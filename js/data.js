// ==========================================
// DONNÉES DU ROADTRIP CALIFORNIE 2026
// Chargées depuis Google Sheets (source unique de vérité)
// Pour modifier l'itinéraire : éditer le Google Sheet
// https://docs.google.com/spreadsheets/d/e/2PACX-1vTb-5dsjHsTzoAEtLVv9D8yOLQEhKvhJiaPNXLmjyxF927WSj6U7CgYmg138MQyMMYG1bpn8vjPwTAv/pubhtml
// ==========================================

const SHEET_BASE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTb-5dsjHsTzoAEtLVv9D8yOLQEhKvhJiaPNXLmjyxF927WSj6U7CgYmg138MQyMMYG1bpn8vjPwTAv/pub?output=csv";

// tripData est la variable globale attendue par app.js / map.js / story-mode.js / explorer-mode.js
// Elle est peuplée de manière asynchrone via loadTripData()
let tripData = null;

// ==========================================
// PARSING CSV
// ==========================================

function parseCSV(text) {
  // Normaliser les fins de ligne
  text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  const result = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i <= text.length; i++) {
    const ch = i < text.length ? text[i] : "\n"; // sentinelle fin de fichier

    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i++; // guillemet échappé
      } else if (ch === '"') {
        inQuotes = false; // fin de champ quoté
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true; // début de champ quoté
      } else if (ch === ',') {
        row.push(field.trim());
        field = "";
      } else if (ch === "\n") {
        row.push(field.trim());
        field = "";
        if (row.some(c => c !== "")) result.push(row);
        row = [];
      } else {
        field += ch;
      }
    }
  }

  return result;
}

function csvToObjects(csvText) {
  // Normaliser les fins de ligne \r\n en \n
  csvText = csvText.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const rows = parseCSV(csvText);
  if (rows.length < 2) return [];
  const headers = rows[0].map(h => h.trim());
  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = row[i] !== undefined ? row[i].trim() : "";
    });
    return obj;
  });
}

// ==========================================
// CONSTRUCTION DE tripData depuis les CSVs
// ==========================================

function buildTripData(itineraryRows, placesRows, weatherRows) {

  // --- ITINÉRAIRE ---
  // Regrouper les activités par jour
  const dayMap = {};
  for (const row of itineraryRows) {
    const jour = parseInt(row["Jour"]);
    if (isNaN(jour)) continue;

    if (!dayMap[jour]) {
      dayMap[jour] = {
        day: jour,
        date: row["Date"],
        title: row["Titre du jour"],
        city: row["Ville"],
        accommodation: row["Hébergement"],
        activities: [],
        distance_km: row["Distance km"] ? parseInt(row["Distance km"]) : 0,
        drive_duration: row["Durée trajet"] || ""
      };
    }

    const activity = {
      time: row["Heure"],
      name: row["Activité"],
      type: row["Type"],
      lat: row["Lat"] ? parseFloat(row["Lat"]) : null,
      lng: row["Lng"] ? parseFloat(row["Lng"]) : null,
    };
    if (row["Durée (h)"]) activity.duration_hours = parseFloat(row["Durée (h)"]);
    if (row["Coût €"])    activity.cost_family_eur = parseFloat(row["Coût €"]);
    if (row["Coût $"])    activity.cost_family_usd = parseFloat(row["Coût $"]);
    if (row["Priorité"])  activity.priority = row["Priorité"];
    if (row["Notes / Infos pratiques"]) activity.note = row["Notes / Infos pratiques"];

    dayMap[jour].activities.push(activity);
  }

  const itinerary = Object.values(dayMap).sort((a, b) => a.day - b.day);

  // --- LIEUX (placeDetails) ---
  const placeDetails = {};
  for (const row of placesRows) {
    const name = row["Activité"];
    if (!name) continue;
    placeDetails[name] = {
      query: row["Recherche Maps"] || "",
      description: row["Description"] || "",
      highlights: row["Points forts"] ? row["Points forts"].split("|").map(s => s.trim()) : [],
      website: row["Site web"] || null,
      booking: row["Statut réservation"] || "Non",
      imageUrl: row["Image URL"] || null
    };
  }

  // --- MÉTÉO ---
  const weatherData = {};
  for (const row of weatherRows) {
    const ville = row["Ville / Étape"];
    if (!ville) continue;
    weatherData[ville] = {
      tempMin: parseInt(row["Temp. min °C"]) || 0,
      tempMax: parseInt(row["Temp. max °C"]) || 0,
      conditions: row["Conditions"] || "",
      rain: row["Risque pluie"] || "",
      clothing: row["Vêtements conseillés"] || "",
      icon: row["🌡️"] || "☀️",
      weatherUrl: row["Lien Météo"] || ""
    };
  }

  return { itinerary, placeDetails, weatherData };
}

// ==========================================
// CHARGEMENT ASYNCHRONE
// Retourne une Promise résolue quand tripData est prêt
// ==========================================

function loadTripData() {
  const urls = {
    itinerary: `${SHEET_BASE_URL}&gid=1067858470`,
    places:    `${SHEET_BASE_URL}&gid=1270814294`,
    weather:   `${SHEET_BASE_URL}&gid=738590871`
  };

  const fetches = [
    fetch(urls.itinerary).then(r => r.text()),
    fetch(urls.places).then(r => r.text()),
    fetch(urls.weather).then(r => r.text())
  ];

  return Promise.all(fetches)
    .then(([itineraryCsv, placesCsv, weatherCsv]) => {
      const itineraryRows = csvToObjects(itineraryCsv);
      const placesRows    = csvToObjects(placesCsv);
      const weatherRows   = csvToObjects(weatherCsv);
      tripData = buildTripData(itineraryRows, placesRows, weatherRows);
      console.log(`✅ Roadbook chargé : ${tripData.itinerary.length} jours, ${Object.keys(tripData.placeDetails).length} lieux`);
      return tripData;
    })
    .catch(err => {
      console.error("❌ Impossible de charger le Google Sheet :", err);
      console.warn("⚠️ Utilisation des données de secours embarquées...");
      tripData = FALLBACK_DATA;
      return tripData;
    });
}

// ==========================================
// DONNÉES DE SECOURS (fallback offline)
// Utilisées si le Sheet est inaccessible (mode avion, etc.)
// Contient uniquement les infos critiques de réservation
// ==========================================

const FALLBACK_DATA = {
  itinerary: [
    { day:1,  date:"2026-02-21", title:"Arrivée San Francisco",          city:"San Francisco",          accommodation:"Hotel Caza Fisherman's Wharf", activities:[{time:"11:35",name:"Arrivée SFO",type:"arrival",lat:37.6213,lng:-122.3790},{time:"afternoon",name:"Installation Hôtel",type:"rest",lat:37.8063,lng:-122.4184},{time:"evening",name:"Balade Fisherman's Wharf",type:"leisure",lat:37.8080,lng:-122.4177}], distance_km:0 },
    { day:2,  date:"2026-02-22", title:"SF Icônes - Sans Voiture",        city:"San Francisco",          accommodation:"Hotel Caza Fisherman's Wharf", activities:[{time:"morning",name:"Golden Gate Bridge",type:"sightseeing",duration_hours:2,lat:37.8199,lng:-122.4783},{time:"late_morning",name:"Baker Beach",type:"beach",duration_hours:1,lat:37.7934,lng:-122.4832},{time:"afternoon",name:"Exploratorium",type:"museum",duration_hours:3,cost_family_eur:120,priority:"high",lat:37.8013,lng:-122.3976}], distance_km:0 },
    { day:3,  date:"2026-02-23", title:"Alcatraz & Nature",               city:"San Francisco",          accommodation:"Hotel Caza Fisherman's Wharf", activities:[{time:"08:40",name:"Alcatraz Island",type:"historic_site",duration_hours:3,cost_family_eur:135,priority:"urgent_booking",note:"RÉSERVÉ – Conf. i69824300 · Ferry Pier 33",lat:37.8267,lng:-122.4230},{time:"13:00",name:"Pier 39",type:"attraction",duration_hours:1,lat:37.8087,lng:-122.4098},{time:"15:00",name:"California Academy of Sciences",type:"museum",duration_hours:3,cost_family_eur:120,priority:"high",lat:37.7699,lng:-122.4661}], distance_km:10 },
    { day:4,  date:"2026-02-24", title:"Récupération Voiture & Monterey", city:"San Francisco → Monterey",accommodation:"Victorian Inn Cannery Row",    activities:[{time:"07:00",name:"Départ hôtel vers SFO",type:"transport",duration_hours:0.5,note:"Taxi/Uber ~30 min",lat:37.8063,lng:-122.4184},{time:"08:00",name:"Récupération voiture ALAMO – SFO",type:"car_rental",duration_hours:1,cost_family_eur:424,note:"RÉSERVÉ US904973570 · Hyundai Santa Fe · carte physique + permis + passeport",lat:37.6213,lng:-122.3790},{time:"10:00",name:"Muir Woods National Monument",type:"nature",duration_hours:2,cost_family_eur:45,priority:"high",lat:37.8974,lng:-122.5808},{time:"13:00",name:"Sausalito",type:"town",duration_hours:1.5,lat:37.8591,lng:-122.4852}], distance_km:200, drive_duration:"2h30" },
    { day:5,  date:"2026-02-25", title:"Monterey Aquarium",               city:"Monterey",               accommodation:"Victorian Inn Cannery Row",    activities:[{time:"morning",name:"Monterey Bay Aquarium",type:"aquarium",duration_hours:4,cost_family_eur:160,priority:"high",note:"RÉSERVÉ Order 15680816",lat:36.6182,lng:-121.9018},{time:"afternoon",name:"Cannery Row",type:"leisure",duration_hours:1,lat:36.6177,lng:-121.9010},{time:"late_afternoon",name:"Point Lobos State Reserve",type:"nature",duration_hours:2,cost_family_eur:40,lat:36.5221,lng:-121.9489}], distance_km:20 },
    { day:6,  date:"2026-02-26", title:"17-Mile Drive & Carmel",          city:"Monterey / Carmel",      accommodation:"Victorian Inn Cannery Row",    activities:[{time:"morning",name:"17-Mile Drive",type:"scenic_drive",duration_hours:2,cost_family_usd:30,priority:"high",lat:36.5834,lng:-121.9497},{time:"late_morning",name:"Carmel-by-the-Sea",type:"town",duration_hours:3,lat:36.5552,lng:-121.9233},{time:"evening",name:"Carmel Beach",type:"beach",duration_hours:1,lat:36.5557,lng:-121.9265}], distance_km:30 },
    { day:7,  date:"2026-02-27", title:"Big Sur – Route & Installation",  city:"Monterey → Big Sur",     accommodation:"Fernwood Resort Big Sur",     activities:[{time:"morning",name:"Big Sur - Bixby Bridge",type:"scenic_drive",duration_hours:1,priority:"high",lat:36.3714,lng:-121.9027},{time:"late_morning",name:"Point Sur Lighthouse",type:"historic_site",duration_hours:1.5,lat:36.3048,lng:-121.8997},{time:"midday",name:"McWay Falls",type:"nature",duration_hours:1,lat:36.1572,lng:-121.6694},{time:"afternoon",name:"Big Creek Cove Vista Point",type:"scenic_viewpoint",duration_hours:0.5,priority:"high",lat:35.9490,lng:-121.4927},{time:"17:00",name:"Installation Fernwood Resort",type:"rest",note:"RÉSERVÉ Booking 6600027042",lat:36.1907,lng:-121.7469}], distance_km:120 },
    { day:8,  date:"2026-02-28", title:"Big Sur → Los Angeles",           city:"Big Sur → Los Angeles",  accommodation:"Airbnb VIEWS HOLLYWOOD SIGN", activities:[{time:"morning",name:"Départ Big Sur vers LA",type:"drive",lat:36.1907,lng:-121.7469},{time:"afternoon",name:"Santa Monica Pier",type:"attraction",duration_hours:2,lat:34.0094,lng:-118.4973},{time:"evening",name:"Venice Beach Boardwalk",type:"leisure",duration_hours:1,lat:33.9850,lng:-118.4695}], distance_km:400, drive_duration:"5-6h" },
    { day:9,  date:"2026-03-01", title:"LA – Dinosaures & Nature",        city:"Los Angeles",            accommodation:"Airbnb VIEWS HOLLYWOOD SIGN", activities:[{time:"morning",name:"La Brea Tar Pits & Museum",type:"museum",duration_hours:2,cost_family_eur:50,priority:"high",lat:34.0639,lng:-118.3556},{time:"afternoon",name:"Griffith Observatory",type:"observatory",duration_hours:2,lat:34.1184,lng:-118.3004}], distance_km:50 },
    { day:10, date:"2026-03-02", title:"Malibu & Getty Villa",            city:"Los Angeles / Malibu",   accommodation:"Airbnb VIEWS HOLLYWOOD SIGN", activities:[{time:"morning",name:"El Matador State Beach",type:"beach",duration_hours:2,cost_family_eur:15,priority:"high",lat:34.0497,lng:-118.8767},{time:"late_morning",name:"Getty Villa Malibu",type:"museum",duration_hours:2.5,priority:"high",lat:34.0458,lng:-118.5648}], distance_km:60 },
    { day:11, date:"2026-03-03", title:"LA – Getty Center & Hollywood",   city:"Los Angeles",            accommodation:"Airbnb VIEWS HOLLYWOOD SIGN", activities:[{time:"morning",name:"Getty Center",type:"museum",duration_hours:3,priority:"high",note:"RÉSERVÉ Order #3022450",lat:34.0780,lng:-118.4741},{time:"afternoon",name:"Hollywood Walk of Fame",type:"attraction",duration_hours:1.5,lat:34.1016,lng:-118.3267},{time:"evening",name:"Griffith Park Hike – Vue Hollywood Sign",type:"nature",duration_hours:1.5,lat:34.1341,lng:-118.3215}], distance_km:40 },
    { day:12, date:"2026-03-04", title:"Los Angeles → San Diego",         city:"Los Angeles → San Diego",accommodation:"Airbnb Capri Coastal Haven",  activities:[{time:"morning",name:"Départ vers San Diego (I-5 South)",type:"drive",duration_hours:2.5,lat:32.7157,lng:-117.1611},{time:"late_afternoon",name:"La Jolla Cove",type:"nature",duration_hours:2,priority:"high",lat:32.8507,lng:-117.2713}], distance_km:195, drive_duration:"2h30" },
    { day:13, date:"2026-03-05", title:"LEGOLAND California",             city:"Carlsbad (près San Diego)",accommodation:"Airbnb Capri Coastal Haven",activities:[{time:"09:00",name:"LEGOLAND California Resort",type:"theme_park",duration_hours:8,cost_family_usd:257,priority:"high",note:"RÉSERVÉ Order #630281374",lat:33.1263,lng:-117.3128}], distance_km:90, drive_duration:"45 min" },
    { day:14, date:"2026-03-06", title:"Zoo de San Diego & Coronado",     city:"San Diego",              accommodation:"Airbnb Capri Coastal Haven",  activities:[{time:"morning",name:"Zoo de San Diego",type:"zoo",duration_hours:4,cost_family_usd:218,priority:"high",note:"RÉSERVÉ Klook BK649306484841413",lat:32.7353,lng:-117.1490},{time:"afternoon",name:"Coronado Island",type:"beach_town",duration_hours:2.5,lat:32.6859,lng:-117.1831}], distance_km:25 },
    { day:15, date:"2026-03-07", title:"Départ San Diego",                city:"San Diego",              accommodation:"",                           activities:[{time:"early_morning",name:"Final La Jolla Cove Walk",type:"nature",duration_hours:1,lat:32.8507,lng:-117.2713},{time:"11:00",name:"Restitution voiture ALAMO",type:"car_rental",note:"3355 Admiral Boland Way · plein avant · avant 13h00",lat:32.7338,lng:-117.1933},{time:"15:15",name:"Vol SAN → LAX (AF2404)",type:"flight",lat:32.7338,lng:-117.1933},{time:"17:45",name:"Vol LAX → Paris CDG (AF8985)",type:"flight",lat:33.9425,lng:-118.4081}], distance_km:20 },
    { day:16, date:"2026-03-08", title:"Arrivée Paris",                   city:"Paris",                  accommodation:"",                           activities:[{time:"13:30",name:"Arrivée CDG",type:"arrival",note:"Terminal 2E · AF8985",lat:49.0097,lng:2.5479}], distance_km:0 }
  ],
  placeDetails: {},
  weatherData: {
    "San Francisco":          { tempMin:8,  tempMax:17, conditions:"Frais et brumeux, vent océanique.",        rain:"Pluie possible (35%)", clothing:"Veste imperméable, pull, couches",  icon:"🌤️" },
    "Monterey":               { tempMin:8,  tempMax:16, conditions:"Climat côtier frais.",                     rain:"Peu de pluie (25%)",   clothing:"Pull léger, veste pour le soir",    icon:"☀️" },
    "Monterey / Carmel":      { tempMin:8,  tempMax:16, conditions:"Climat côtier frais.",                     rain:"Peu de pluie (20%)",   clothing:"Pull léger, veste pour le soir",    icon:"☀️" },
    "Los Angeles":            { tempMin:11, tempMax:21, conditions:"Ensoleillé, temps idéal.",                 rain:"Rare (10%)",           clothing:"Vêtements légers, crème solaire",   icon:"☀️" },
    "Los Angeles / Malibu":   { tempMin:11, tempMax:21, conditions:"Ensoleillé, temps idéal.",                 rain:"Rare (10%)",           clothing:"Vêtements légers, crème solaire",   icon:"☀️" },
    "San Diego":              { tempMin:12, tempMax:22, conditions:"Doux et agréable, presque printanier.",    rain:"Quasiment aucune (5%)",clothing:"Shorts, t-shirts, maillot de bain", icon:"☀️" },
    "Carlsbad (près San Diego)":{ tempMin:12, tempMax:21, conditions:"Doux et ensoleillé.",                   rain:"Quasiment aucune (5%)",clothing:"Shorts, t-shirts, crème solaire",   icon:"☀️" },
    "Paris":                  { tempMin:5,  tempMax:10, conditions:"Retour en France !",                       rain:"Variable",             clothing:"Manteau d'hiver",                   icon:"🇫🇷" }
  }
};
