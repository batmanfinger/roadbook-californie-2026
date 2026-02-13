// ==========================================
// DONNÉES DU ROADTRIP CALIFORNIE 2026
// ==========================================

const tripData = {
  itinerary: [
    {
      day: 1,
      date: "2026-02-21",
      title: "Arrivée San Francisco",
      city: "San Francisco",
      accommodation: "Hotel Caza Fisherman's Wharf",
      activities: [
        {
          time: "11:35",
          name: "Arrivée SFO",
          type: "arrival",
          lat: 37.6213,
          lng: -122.3790
        },
        {
          time: "afternoon",
          name: "Installation Hôtel",
          type: "rest",
          lat: 37.8063,
          lng: -122.4184
        },
        {
          time: "evening",
          name: "Balade Fisherman's Wharf",
          type: "leisure",
          lat: 37.8080,
          lng: -122.4177
        }
      ],
      distance_km: 0
    },
    {
      day: 2,
      date: "2026-02-22",
      title: "SF Icônes - Sans Voiture",
      city: "San Francisco",
      accommodation: "Hotel Caza Fisherman's Wharf",
      activities: [
        {
          time: "morning",
          name: "Golden Gate Bridge",
          type: "sightseeing",
          duration_hours: 2,
          lat: 37.8199,
          lng: -122.4783
        },
        {
          time: "late_morning",
          name: "Baker Beach",
          type: "beach",
          duration_hours: 1,
          lat: 37.7934,
          lng: -122.4832
        },
        {
          time: "afternoon",
          name: "Exploratorium",
          type: "museum",
          duration_hours: 3,
          cost_family_eur: 120,
          priority: "high",
          lat: 37.8013,
          lng: -122.3976
        }
      ],
      distance_km: 0
    },
    {
      day: 3,
      date: "2026-02-23",
      title: "Alcatraz & Nature",
      city: "San Francisco",
      accommodation: "Hotel Caza Fisherman's Wharf",
      activities: [
        {
          time: "08:40",
          name: "Alcatraz Island",
          type: "historic_site",
          duration_hours: 3,
          cost_family_eur: 135,
          priority: "urgent_booking",
          note: "Départ ferry 08h40 depuis Pier 33 – billet réservé",
          lat: 37.8267,
          lng: -122.4230
        },
        {
          time: "13:00",
          name: "Pier 39",
          type: "attraction",
          duration_hours: 1,
          lat: 37.8087,
          lng: -122.4098
        },
        {
          time: "15:00",
          name: "California Academy of Sciences",
          type: "museum",
          duration_hours: 3,
          cost_family_eur: 120,
          priority: "high",
          lat: 37.7699,
          lng: -122.4661
        }
      ],
      distance_km: 10
    },
    {
      day: 4,
      date: "2026-02-24",
      title: "Récupération Voiture & Départ vers Monterey",
      city: "San Francisco → Monterey",
      accommodation: "Victorian Inn Cannery Row",
      activities: [
        {
          time: "07:00",
          name: "Départ hôtel vers SFO",
          type: "transport",
          duration_hours: 0.5,
          note: "Taxi/Uber depuis Fisherman's Wharf jusqu'à l'agence Alamo SFO – ~30 min",
          lat: 37.8063,
          lng: -122.4184
        },
        {
          time: "08:00",
          name: "Récupération voiture ALAMO – SFO",
          type: "car_rental",
          duration_hours: 1,
          note: "Alamo – 780 North McDonnell Rd, SFO Airport · Réf. US904973570 · Hyundai Santa Fe SUV · Prévoir 45–60 min de formalités · Carte de crédit physique + permis de conduire obligatoires",
          lat: 37.6213,
          lng: -122.3790
        },
        {
          time: "10:00",
          name: "Muir Woods National Monument",
          type: "nature",
          duration_hours: 2,
          cost_family_eur: 45,
          priority: "high",
          note: "Sur le chemin vers Monterey – réservation parking obligatoire",
          lat: 37.8974,
          lng: -122.5808
        },
        {
          time: "13:00",
          name: "Sausalito",
          type: "town",
          duration_hours: 1.5,
          note: "Déjeuner avec vue sur SF",
          lat: 37.8591,
          lng: -122.4852
        },
        {
          time: "15:30",
          name: "Route vers Monterey (Highway 1)",
          type: "drive",
          duration_hours: 2.5,
          note: "Prendre la Highway 1 côtière si météo le permet",
          lat: 36.6002,
          lng: -121.8947
        }
      ],
      distance_km: 200,
      drive_duration: "2h30 (SF → Monterey)"
    },
    {
      day: 5,
      date: "2026-02-25",
      title: "Monterey Aquarium",
      city: "Monterey",
      accommodation: "Victorian Inn Cannery Row",
      activities: [
        {
          time: "morning",
          name: "Monterey Bay Aquarium",
          type: "aquarium",
          duration_hours: 4,
          cost_family_eur: 160,
          priority: "high",
          note: "Billet réservé – créneau matin",
          lat: 36.6182,
          lng: -121.9018
        },
        {
          time: "afternoon",
          name: "Cannery Row",
          type: "leisure",
          duration_hours: 1,
          lat: 36.6177,
          lng: -121.9010
        },
        {
          time: "late_afternoon",
          name: "Point Lobos State Reserve",
          type: "nature",
          duration_hours: 2,
          cost_family_eur: 40,
          lat: 36.5221,
          lng: -121.9489
        }
      ],
      distance_km: 20
    },
    {
      day: 6,
      date: "2026-02-26",
      title: "17-Mile Drive & Carmel",
      city: "Monterey / Carmel",
      accommodation: "Victorian Inn Cannery Row",
      activities: [
        {
          time: "morning",
          name: "17-Mile Drive",
          type: "scenic_drive",
          duration_hours: 2,
          cost_family_usd: 30,
          priority: "high",
          lat: 36.5834,
          lng: -121.9497
        },
        {
          time: "late_morning",
          name: "Carmel-by-the-Sea",
          type: "town",
          duration_hours: 3,
          lat: 36.5552,
          lng: -121.9233
        },
        {
          time: "evening",
          name: "Carmel Beach",
          type: "beach",
          duration_hours: 1,
          lat: 36.5557,
          lng: -121.9265
        }
      ],
      distance_km: 30
    },
    {
      day: 7,
      date: "2026-02-27",
      title: "Big Sur – Route & Installation",
      city: "Monterey → Big Sur",
      accommodation: "Fernwood Resort Big Sur",
      activities: [
        {
          time: "morning",
          name: "Big Sur - Bixby Bridge",
          type: "scenic_drive",
          duration_hours: 1,
          priority: "high",
          note: "Arrêt photo au point de vue nord du pont",
          lat: 36.3714,
          lng: -121.9027
        },
        {
          time: "late_morning",
          name: "Point Sur Lighthouse",
          type: "historic_site",
          duration_hours: 1.5,
          note: "Vérifier horaires des visites guidées",
          lat: 36.3048,
          lng: -121.8997
        },
        {
          time: "midday",
          name: "McWay Falls",
          type: "nature",
          duration_hours: 1,
          lat: 36.1572,
          lng: -121.6694
        },
        {
          time: "afternoon",
          name: "Big Creek Cove Vista Point",
          type: "scenic_viewpoint",
          duration_hours: 0.5,
          priority: "high",
          lat: 35.9490,
          lng: -121.4927
        },
        {
          time: "17:00",
          name: "Installation Fernwood Resort",
          type: "rest",
          note: "Nuit sur place à Big Sur – Fernwood Resort (réservé, réf. Booking 6600027042)",
          lat: 36.1907,
          lng: -121.7469
        }
      ],
      distance_km: 120,
      drive_duration: "Highway 1 de Monterey à Big Sur (Lucia)"
    },
    {
      day: 8,
      date: "2026-02-28",
      title: "Big Sur → Los Angeles (via côte)",
      city: "Big Sur → Los Angeles",
      accommodation: "Airbnb VIEWS HOLLYWOOD SIGN",
      activities: [
        {
          time: "morning",
          name: "Départ Big Sur vers LA",
          type: "drive",
          note: "Longue route côtière – prévoir pauses scenic",
          lat: 36.1907,
          lng: -121.7469
        },
        {
          time: "afternoon",
          name: "Santa Monica Pier",
          type: "attraction",
          duration_hours: 2,
          lat: 34.0094,
          lng: -118.4973
        },
        {
          time: "evening",
          name: "Venice Beach Boardwalk",
          type: "leisure",
          duration_hours: 1,
          lat: 33.9850,
          lng: -118.4695
        }
      ],
      distance_km: 400,
      drive_duration: "5–6h (Big Sur → LA via PCH)",
      note: "Trajet long mais sublime – Highway 1 tout le long. Arrivée Hollywood Hills en soirée."
    },
    {
      day: 9,
      date: "2026-03-01",
      title: "Los Angeles – Dinosaures & Nature",
      city: "Los Angeles",
      accommodation: "Airbnb VIEWS HOLLYWOOD SIGN",
      activities: [
        {
          time: "morning",
          name: "La Brea Tar Pits & Museum",
          type: "museum",
          duration_hours: 2,
          cost_family_eur: 50,
          priority: "high",
          lat: 34.0639,
          lng: -118.3556
        },
        {
          time: "afternoon",
          name: "Griffith Observatory",
          type: "observatory",
          duration_hours: 2,
          planetarium_cost_eur: 25,
          lat: 34.1184,
          lng: -118.3004
        }
      ],
      distance_km: 50
    },
    {
      day: 10,
      date: "2026-03-02",
      title: "Malibu & Getty Villa",
      city: "Los Angeles / Malibu",
      accommodation: "Airbnb VIEWS HOLLYWOOD SIGN",
      activities: [
        {
          time: "morning",
          name: "El Matador State Beach",
          type: "beach",
          duration_hours: 2,
          cost_family_eur: 15,
          priority: "high",
          lat: 34.0497,
          lng: -118.8767
        },
        {
          time: "late_morning",
          name: "Getty Villa Malibu",
          type: "museum",
          duration_hours: 2.5,
          priority: "high",
          lat: 34.0458,
          lng: -118.5648
        }
      ],
      distance_km: 60
    },
    {
      day: 11,
      date: "2026-03-03",
      title: "Los Angeles – Getty Center & Hollywood",
      city: "Los Angeles",
      accommodation: "Airbnb VIEWS HOLLYWOOD SIGN",
      activities: [
        {
          time: "morning",
          name: "Getty Center",
          type: "museum",
          duration_hours: 3,
          priority: "high",
          note: "Billet réservé – art, jardins suspendus, vue panoramique sur LA",
          lat: 34.0780,
          lng: -118.4741
        },
        {
          time: "afternoon",
          name: "Hollywood Walk of Fame",
          type: "attraction",
          duration_hours: 1.5,
          lat: 34.1016,
          lng: -118.3267
        },
        {
          time: "evening",
          name: "Griffith Park Hike – Vue Hollywood Sign",
          type: "nature",
          duration_hours: 1.5,
          note: "Vue directe depuis le Bronson Canyon ou le Mt Lee Trail – parfait depuis l'Airbnb Hollywood Hills",
          lat: 34.1341,
          lng: -118.3215
        }
      ],
      distance_km: 40
    },
    {
      day: 12,
      date: "2026-03-04",
      title: "Los Angeles → San Diego",
      city: "Los Angeles → San Diego",
      accommodation: "Airbnb Capri Coastal Haven",
      activities: [
        {
          time: "morning",
          name: "Départ vers San Diego (I-5 South)",
          type: "drive",
          duration_hours: 2.5,
          note: "Départ matinal recommandé pour éviter les embouteillages LA",
          lat: 32.7157,
          lng: -117.1611
        },
        {
          time: "late_afternoon",
          name: "La Jolla Cove",
          type: "nature",
          duration_hours: 2,
          priority: "high",
          lat: 32.8507,
          lng: -117.2713
        }
      ],
      distance_km: 195,
      drive_duration: "2h30 (LA → San Diego)"
    },
    {
      day: 13,
      date: "2026-03-05",
      title: "LEGOLAND California",
      city: "Carlsbad (près San Diego)",
      accommodation: "Airbnb Capri Coastal Haven",
      activities: [
        {
          time: "09:00",
          name: "LEGOLAND California Resort",
          type: "theme_park",
          duration_hours: 8,
          cost_family_usd: 257,
          priority: "high",
          note: "Billets réservés (2 adultes + 1 enfant) – Order #630281374 · 1 Legoland Drive, Carlsbad, CA 92008 · ~45 min de San Diego (prendre I-5 North)",
          lat: 33.1263,
          lng: -117.3128
        }
      ],
      distance_km: 90,
      drive_duration: "45 min aller depuis San Diego, 45 min retour",
      note: "Journée entière à Legoland – déjeuner sur place recommandé"
    },
    {
      day: 14,
      date: "2026-03-06",
      title: "Zoo de San Diego & Coronado",
      city: "San Diego",
      accommodation: "Airbnb Capri Coastal Haven",
      activities: [
        {
          time: "morning",
          name: "Zoo de San Diego",
          type: "zoo",
          duration_hours: 4,
          cost_family_usd: 218,
          priority: "high",
          note: "Billets réservés (2 adultes + 1 enfant) – Réf. Klook BK649306484841413 · 2920 Zoo Drive, San Diego",
          lat: 32.7353,
          lng: -117.1490
        },
        {
          time: "afternoon",
          name: "Coronado Island",
          type: "beach_town",
          duration_hours: 2.5,
          note: "Traversée en ferry depuis downtown SD – plage sable blanc + Hôtel Del Coronado",
          lat: 32.6859,
          lng: -117.1831
        }
      ],
      distance_km: 25
    },
    {
      day: 15,
      date: "2026-03-07",
      title: "Départ San Diego",
      city: "San Diego",
      activities: [
        {
          time: "early_morning",
          name: "Final La Jolla Cove Walk",
          type: "nature",
          duration_hours: 1,
          lat: 32.8507,
          lng: -117.2713
        },
        {
          time: "11:00",
          name: "Restitution voiture ALAMO – San Diego Airport",
          type: "car_rental",
          duration_hours: 0.5,
          note: "3355 Admiral Boland Way, San Diego Airport · Restitution avant 13h00 · Plein d'essence obligatoire avant de rendre",
          lat: 32.7338,
          lng: -117.1933
        },
        {
          time: "14:15",
          name: "Enregistrement vol retour",
          type: "departure",
          note: "AF2404 · San Diego SAN Terminal 2 → LAX · Départ 15h15 · Enreg. limite 14h15",
          lat: 32.7338,
          lng: -117.1933
        },
        {
          time: "15:15",
          name: "Vol SAN → LAX (AF2404)",
          type: "flight",
          lat: 32.7338,
          lng: -117.1933
        },
        {
          time: "17:45",
          name: "Vol LAX → Paris CDG (AF8985)",
          type: "flight",
          note: "Correspondance 1h22 à LAX · Terminal 3 · Enreg. limite 16h45",
          lat: 33.9425,
          lng: -118.4081
        }
      ],
      distance_km: 20
    },
    {
      day: 16,
      date: "2026-03-08",
      title: "Arrivée Paris",
      city: "Paris",
      activities: [
        {
          time: "13:30",
          name: "Arrivée CDG",
          type: "arrival",
          note: "Terminal 2E · AF8985",
          lat: 49.0097,
          lng: 2.5479
        }
      ]
    }
  ],

  placeDetails: {
    // ==================== JOUR 1 ====================
    "Arrivée SFO": {
      query: "san francisco international airport",
      description: "Aéroport international de San Francisco (SFO), porte d'entrée de votre aventure californienne ! Terminal moderne avec vue sur la baie.",
      highlights: ["Navette BART vers SF", "Récupération bagages", "Location voiture"],
      website: "https://www.flysfo.com",
      booking: "Non"
    },
    "Installation Hôtel": {
      query: "hotel caza fishermans wharf san francisco",
      description: "Hotel Caza Fisherman's Wharf - Hôtel moderne et confortable au cœur du quartier historique de Fisherman's Wharf. Emplacement idéal pour explorer SF sans voiture les premiers jours.",
      highlights: ["Quartier Fisherman's Wharf", "Proche attractions", "Parking disponible", "Chambres familiales"],
      website: "https://www.hotelcazafishermanswharf.com",
      booking: "Réservé – Réf. Booking 5480847943"
    },
    "Balade Fisherman's Wharf": {
      query: "fishermans wharf san francisco seafood",
      description: "Quartier emblématique de San Francisco ! Ambiance maritime authentique, restaurants de fruits de mer, lions de mer bruyants au Pier 39, et vue sur Alcatraz et le Golden Gate.",
      highlights: ["Lions de mer au Pier 39", "Restaurants fruits de mer", "Boudin Bakery (pain au levain)", "Vue sur Alcatraz", "Musiciens de rue"],
      website: "https://www.fishermanswharf.org",
      booking: "Non"
    },

    // ==================== JOUR 2 ====================
    "Golden Gate Bridge": {
      query: "golden gate bridge san francisco",
      description: "Le pont le plus iconique d'Amérique ! Long de 2,7 km, vous pourrez le traverser à pied pour une vue spectaculaire sur la baie.",
      highlights: ["Traversée à pied", "Vue depuis Battery Spencer", "Photo depuis Baker Beach"],
      website: "https://www.goldengate.org",
      booking: "Non requis"
    },
    "Baker Beach": {
      query: "baker beach san francisco golden gate view",
      description: "Plage sauvage avec LA meilleure vue sur le Golden Gate Bridge ! Sable fin, vagues du Pacifique, et perspective unique sur le pont rouge orangé.",
      highlights: ["Vue iconique Golden Gate", "Plage naturelle", "Marée basse idéale", "Photo parfaite"],
      website: "https://www.parksconservancy.org/parks/baker-beach",
      booking: "Non"
    },
    "Exploratorium": {
      query: "exploratorium san francisco museum",
      description: "Musée des sciences interactif absolument fascinant pour les enfants. Des centaines d'expériences hands-on pour comprendre le monde.",
      highlights: ["600+ expériences interactives", "Tactile Dome", "Vue sur la baie"],
      website: "https://www.exploratorium.edu",
      booking: "Recommandé"
    },

    // ==================== JOUR 3 ====================
    "Alcatraz Island": {
      query: "alcatraz island prison san francisco",
      description: "L'ancienne prison fédérale la plus célèbre du monde, sur une île au milieu de la baie. Audio-guide captivant avec histoires d'évasion !",
      highlights: ["Visite prison", "Audio-guide excellent", "Vue sur SF", "Histoires d'évasions"],
      website: "https://www.alcatrazcruises.com",
      booking: "RÉSERVÉ – Conf. i69824300 · Départ ferry 08h40 Pier 33"
    },
    "Pier 39": {
      query: "pier 39 san francisco sea lions",
      description: "Jetée animée abritant la célèbre colonie de lions de mer ! Boutiques, restaurants, aquarium, et artistes de rue. Ambiance festive garantie.",
      highlights: ["Colonie lions de mer", "Aquarium Bay", "Restaurants vue baie", "Manèges enfants"],
      website: "https://www.pier39.com",
      booking: "Non"
    },
    "California Academy of Sciences": {
      query: "california academy of sciences san francisco",
      description: "Musée extraordinaire combinant aquarium, planétarium, et forêt tropicale vivante sous un même toit. Un paradis pour enfants curieux !",
      highlights: ["Forêt tropicale 4 étages", "Planétarium", "Aquarium", "Dinosaures"],
      website: "https://www.calacademy.org",
      booking: "Recommandé"
    },

    // ==================== JOUR 4 ====================
    "Départ hôtel vers SFO": {
      query: "taxi fishermans wharf san francisco airport",
      description: "Trajet en taxi ou Uber depuis l'hôtel Caza Fisherman's Wharf jusqu'à l'agence Alamo à l'aéroport SFO. Environ 30 minutes sans trafic.",
      highlights: ["Prévoir 35–40 min", "Taxi ou Uber", "Bagages dans le coffre"],
      website: null,
      booking: "Non – commander taxi la veille"
    },
    "Récupération voiture ALAMO – SFO": {
      query: "alamo car rental san francisco airport",
      description: "Agence Alamo à l'aéroport SFO. Récupération du Hyundai Santa Fe SUV (5 places, 4 bagages, automatique, plein inclus). Prévoir 45–60 min de formalités.",
      highlights: ["Carte de crédit physique obligatoire", "Permis de conduire original", "Passeport", "Bon numérique à présenter"],
      website: "https://www.alamo.com",
      booking: "RÉSERVÉ – Réf. US904973570 · Argus/Alamo · 423.88€"
    },
    "Muir Woods National Monument": {
      query: "muir woods redwood trees california",
      description: "Forêt majestueuse de séquoias géants. Sentiers faciles et accessibles, parfaits pour une balade familiale dans un décor féérique.",
      highlights: ["Séquoias de 250 ans", "Cathedral Grove", "Sentiers faciles"],
      website: "https://www.nps.gov/muwo",
      booking: "OBLIGATOIRE – Réservation parking en ligne"
    },
    "Sausalito": {
      query: "sausalito california waterfront village",
      description: "Village côtier pittoresque au bord de la baie avec vue imprenable sur San Francisco. Galeries d'art, boutiques chics, et restaurants avec terrasses face à l'eau.",
      highlights: ["Vue sur SF skyline", "Waterfront coloré", "Cafés et restaurants", "Ambiance méditerranéenne"],
      website: "https://www.sausalito.org",
      booking: "Non"
    },

    // ==================== JOUR 5 ====================
    "Monterey Bay Aquarium": {
      query: "monterey bay aquarium california",
      description: "L'un des meilleurs aquariums au monde ! Loutres de mer adorables, méduses hypnotiques, forêt de kelp géante, et bassin tactile.",
      highlights: ["Loutres de mer", "Forêt de kelp", "Méduses", "Bassin tactile", "Requins"],
      website: "https://www.montereybayaquarium.org",
      booking: "RÉSERVÉ – Order 15680816 · 25 fév."
    },
    "Cannery Row": {
      query: "cannery row monterey historic waterfront",
      description: "Rue historique immortalisée par John Steinbeck. Anciennes conserveries transformées en restaurants, boutiques et galeries d'art le long du front de mer.",
      highlights: ["Histoire des conserveries", "Restaurants fruits de mer", "Boutiques locales", "Front de mer pittoresque"],
      website: "https://www.canneryrow.com",
      booking: "Non"
    },
    "Point Lobos State Reserve": {
      query: "point lobos state reserve california coast",
      description: "Le plus grand lieu de rencontre entre terre et mer - magnifique réserve naturelle avec phoques, loutres, cyprès sculptés par le vent.",
      highlights: ["Phoques et loutres", "Sentiers côtiers", "Cyprès de Monterey", "Plages secrètes"],
      website: "https://www.parks.ca.gov",
      booking: "Parking peut être complet"
    },

    // ==================== JOUR 6 ====================
    "17-Mile Drive": {
      query: "17 mile drive pebble beach california",
      description: "Route privée spectaculaire à travers Pebble Beach avec vues océan incroyables, Lone Cypress iconique, et propriétés de rêve.",
      highlights: ["Lone Cypress", "Pebble Beach", "Seal Rock", "Spanish Bay"],
      website: "https://www.pebblebeach.com",
      booking: "Péage 12.50$ à l'entrée"
    },
    "Carmel-by-the-Sea": {
      query: "carmel by the sea village california",
      description: "Village de conte de fées avec cottages européens, galeries d'art, boutiques bohèmes et plage de sable blanc. Charme absolu garanti !",
      highlights: ["Architecture cottage", "Galeries d'art", "Plage magnifique", "Ambiance artistique"],
      website: "https://www.carmelcalifornia.com",
      booking: "Non"
    },
    "Carmel Beach": {
      query: "carmel beach white sand california sunset",
      description: "Plage de sable blanc immaculé bordée de cyprès. Eau turquoise, falaises escarpées, et couchers de soleil spectaculaires.",
      highlights: ["Sable blanc fin", "Cyprès côtiers", "Coucher soleil magique", "Chiens bienvenus"],
      website: "https://www.carmelcalifornia.com/carmel-beach",
      booking: "Non"
    },

    // ==================== JOUR 7 ====================
    "Big Sur - Bixby Bridge": {
      query: "bixby bridge big sur california",
      description: "Le pont le plus photographié de Californie ! Arche magistrale de 218m au-dessus du canyon, symbole de Big Sur.",
      highlights: ["Photo iconique", "Point de vue nord", "Côte dramatique"],
      website: null,
      booking: "Non"
    },
    "Point Sur Lighthouse": {
      query: "point sur lighthouse big sur california",
      description: "Phare historique perché sur un rocher volcanique à 90m au-dessus de l'océan. Visites guidées fascinantes avec vue spectaculaire sur Big Sur.",
      highlights: ["Phare historique 1889", "Rocher volcanique", "Vue panoramique", "Visite guidée"],
      website: "https://www.pointsur.org",
      booking: "Horaires limités – vérifier avant"
    },
    "McWay Falls": {
      query: "mcway falls big sur waterfall beach",
      description: "Cascade rare tombant directement sur une plage ! Vue depuis le sentier (cascade inaccessible), spectacle unique en Californie.",
      highlights: ["Cascade sur plage", "Vue panoramique", "Crique turquoise"],
      website: "https://www.parks.ca.gov",
      booking: "Non – parking Julia Pfeiffer Burns"
    },
    "Big Creek Cove Vista Point": {
      query: "big creek cove vista point big sur california",
      description: "Point de vue spectaculaire au bout de la Highway 1 praticable. Dernier arrêt avant la fermeture de route, vue époustouflante sur les falaises sauvages de Big Sur.",
      highlights: ["Falaises vertigineuses", "Océan Pacifique", "Dernier point accessible", "Photos panoramiques"],
      website: null,
      booking: "Non – arrêt gratuit sur Highway 1"
    },
    "Installation Fernwood Resort": {
      query: "fernwood resort big sur california",
      description: "Resort rustique et authentique au cœur de Big Sur. Cabines et chambres entourées de séquoias et de ruisseaux. Expérience immersive dans la nature californienne.",
      highlights: ["Atmosphère Big Sur authentique", "Séquoias", "Ruisseaux", "Bar & restaurant sur place"],
      website: "https://www.fernwoodbigsur.com",
      booking: "RÉSERVÉ – Réf. Booking 6600027042 · 27–28 fév."
    },

    // ==================== JOUR 8 ====================
    "Départ Big Sur vers LA": {
      query: "pacific coast highway big sur to los angeles",
      description: "Longue et sublime route côtière depuis Big Sur jusqu'à Los Angeles via la Pacific Coast Highway. L'un des plus beaux trajets du monde.",
      highlights: ["Highway 1 tout le long", "Arrêts belvédères", "San Simeon Hearst Castle", "Morro Bay"],
      website: null,
      booking: "Non"
    },
    "Santa Monica Pier": {
      query: "santa monica pier ferris wheel california",
      description: "Jetée emblématique avec parc d'attractions, grande roue iconique, arcades, et ambiance festive. Fin de la Route 66 !",
      highlights: ["Grande roue Pacific Park", "Arcades", "Fin Route 66", "Plage"],
      website: "https://www.santamonicapier.org",
      booking: "Non – manèges payants"
    },
    "Venice Beach Boardwalk": {
      query: "venice beach boardwalk california street performers",
      description: "Promenade iconique et excentrique de Los Angeles ! Street art incroyable, artistes de rue, Muscle Beach, et ambiance bohème californienne authentique.",
      highlights: ["Street performers", "Muscle Beach", "Street art", "Skate park"],
      website: "https://www.venicebeach.com",
      booking: "Non"
    },

    // ==================== JOUR 9 ====================
    "La Brea Tar Pits & Museum": {
      query: "la brea tar pits museum los angeles fossils",
      description: "Fosses de goudron actives avec fossiles de l'ère glaciaire ! Mamouths, tigres à dents de sabre, et paresseux géants. Unique au monde.",
      highlights: ["Fosses actives", "Fossiles mammouth", "Tigre à dents de sabre", "Musée paléo"],
      website: "https://tarpits.org",
      booking: "Tickets en ligne recommandé"
    },
    "Griffith Observatory": {
      query: "griffith observatory los angeles hollywood sign",
      description: "Observatoire emblématique avec vue panoramique sur LA et le Hollywood Sign. Planétarium, expositions spatiales, et télescopes gratuits !",
      highlights: ["Vue Hollywood Sign", "Planétarium", "Télescopes gratuits", "Expositions espace"],
      website: "https://griffithobservatory.org",
      booking: "Gratuit – Planétarium payant"
    },

    // ==================== JOUR 10 ====================
    "El Matador State Beach": {
      query: "el matador state beach malibu sea caves",
      description: "L'une des plus belles plages de Californie ! Falaises dramatiques, grottes marines, arches rocheuses et bassins de marée.",
      highlights: ["Grottes marines", "Formations rocheuses", "Falaises spectaculaires", "Bassins marée"],
      website: "https://www.parks.ca.gov",
      booking: "Parking payant 10$"
    },
    "Getty Villa Malibu": {
      query: "getty villa malibu roman garden",
      description: "Villa romaine reconstruite avec jardins somptueux et vue océan. Collection d'antiquités grecques/romaines. Architecture époustouflante !",
      highlights: ["Villa romaine", "Jardins méditerranéens", "Vue océan", "Antiquités"],
      website: "https://www.getty.edu/visit/villa",
      booking: "GRATUIT mais réservation OBLIGATOIRE"
    },

    // ==================== JOUR 11 ====================
    "Getty Center": {
      query: "getty center los angeles art museum",
      description: "Musée d'art perché sur les collines de Brentwood avec vue panoramique sur Los Angeles. Architecture Richard Meier, jardins en terrasses, collections impressionnistes.",
      highlights: ["Vue panoramique sur LA", "Jardins en terrasses", "Impressionnistes", "Architecture spectaculaire"],
      website: "https://www.getty.edu/visit/center",
      booking: "RÉSERVÉ – Order #3022450 · Entrée gratuite · Parking payant"
    },
    "Hollywood Walk of Fame": {
      query: "hollywood walk of fame stars boulevard",
      description: "La célèbre promenade des étoiles sur Hollywood Boulevard. Plus de 2700 étoiles gravées au sol pour les icônes du cinéma, de la télévision et de la musique.",
      highlights: ["2700+ étoiles", "TCL Chinese Theatre", "Dolby Theatre", "Boutiques souvenirs"],
      website: "https://www.walkoffame.com",
      booking: "Non"
    },
    "Griffith Park Hike – Vue Hollywood Sign": {
      query: "griffith park hollywood sign hike trail",
      description: "Randonnée facile dans Griffith Park pour une vue directe sur le Hollywood Sign. Idéal en fin d'après-midi avec la lumière dorée. Parfait depuis l'Airbnb Hollywood Hills.",
      highlights: ["Vue directe Hollywood Sign", "Coucher de soleil", "Sentiers balisés", "Proche Airbnb"],
      website: "https://www.laparks.org/griffithpark",
      booking: "Non – parking gratuit disponible"
    },

    // ==================== JOUR 12 ====================
    "La Jolla Cove": {
      query: "la jolla cove seals san diego california",
      description: "Crique spectaculaire avec colonie de phoques et otaries ! Eaux turquoise, falaises, et animaux à quelques mètres. Magique !",
      highlights: ["Phoques sur rochers", "Otaries", "Eaux cristallines", "Sentier côtier"],
      website: "https://www.sandiego.gov",
      booking: "Non – parking difficile"
    },

    // ==================== JOUR 13 ====================
    "LEGOLAND California Resort": {
      query: "legoland california carlsbad theme park",
      description: "Parc à thème Lego à Carlsbad, à 45 minutes au nord de San Diego. Idéal pour les enfants de 2 à 12 ans ! Attractions, constructions Lego géantes, et spectacles.",
      highlights: ["Manèges adaptés enfants", "Miniland USA", "LEGO City", "Plage aquatique", "Spectacles"],
      website: "https://www.legoland.com/california",
      booking: "RÉSERVÉ – Order #630281374 · 5 mars · 2 adultes + 1 enfant · 257$"
    },

    // ==================== JOUR 14 ====================
    "Zoo de San Diego": {
      query: "san diego zoo balboa park california",
      description: "L'un des meilleurs zoos du monde dans Balboa Park ! Plus de 3500 animaux sur 40 hectares avec habitat naturel simulé et télécabine panoramique.",
      highlights: ["3500+ animaux", "Pandas géants", "Télécabine", "Jardins botaniques", "Animaux de près"],
      website: "https://zoo.sandiegozoo.org",
      booking: "RÉSERVÉ – Réf. Klook BK649306484841413 · 6 mars · 218$"
    },
    "Coronado Island": {
      query: "coronado island beach san diego california",
      description: "Île charmante avec l'une des plus belles plages d'Amérique (sable blanc fin), hôtel historique Del Coronado, et pont spectaculaire.",
      highlights: ["Plage top USA", "Hôtel Del Coronado", "Pont Coronado", "Village pittoresque"],
      website: "https://www.coronadovisitorcenter.com",
      booking: "Non"
    },

    // ==================== JOUR 15 ====================
    "Final La Jolla Cove Walk": {
      query: "la jolla cove morning walk seals",
      description: "Dernière balade matinale à La Jolla Cove pour dire au revoir aux phoques ! Moment paisible avant le départ.",
      highlights: ["Adieux aux phoques", "Lever de soleil", "Derniers moments Californie"],
      website: "https://www.sandiego.gov",
      booking: "Non"
    },
    "Restitution voiture ALAMO – San Diego Airport": {
      query: "alamo car rental san diego airport return",
      description: "Restitution du Hyundai Santa Fe à l'agence Alamo de l'aéroport de San Diego. Prévoir le plein d'essence juste avant, et arriver au moins 2h avant le vol.",
      highlights: ["Faire le plein avant", "3355 Admiral Boland Way", "Restitution avant 13h00", "Navette aéroport depuis agence"],
      website: "https://www.alamo.com",
      booking: "Restitution – Réf. US904973570"
    },

    // ==================== JOUR 16 ====================
    "Arrivée CDG": {
      query: "aeroport charles de gaulle paris",
      description: "Aéroport Paris-Charles de Gaulle (CDG) - Bienvenue de retour en France après 16 jours d'aventure californienne inoubliable !",
      highlights: ["Terminal 2E/F", "Récupération bagages", "Douanes UE", "Transports vers Paris"],
      website: "https://www.parisaeroport.fr",
      booking: "Arrivée confirmée – AF8985 · 13h30"
    }
  },

  weatherData: {
    "San Francisco": {
      tempMin: 8, tempMax: 17,
      conditions: "Frais et brumeux, surtout le matin. Vent océanique modéré.",
      rain: "Pluie possible (35%)", clothing: "Veste imperméable, pull, couches", icon: "🌤️",
      weatherUrl: "https://www.accuweather.com/fr/us/san-francisco/94103/daily-weather-forecast/347629"
    },
    "San Francisco → Monterey": {
      tempMin: 9, tempMax: 16, conditions: "Variable", rain: "Possible (30%)",
      clothing: "Veste + couches", icon: "🌤️",
      weatherUrl: "https://www.accuweather.com/fr/us/monterey/93940/daily-weather-forecast/331966"
    },
    "Monterey": {
      tempMin: 8, tempMax: 16,
      conditions: "Climat côtier frais, influencé par l'océan.",
      rain: "Peu de pluie (25%)", clothing: "Pull léger, veste pour le soir", icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/monterey/93940/daily-weather-forecast/331966"
    },
    "Monterey / Carmel": {
      tempMin: 8, tempMax: 16,
      conditions: "Climat côtier frais, influencé par l'océan.",
      rain: "Peu de pluie (20%)", clothing: "Pull léger, veste pour le soir", icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/carmel-by-the-sea/93921/daily-weather-forecast/332066"
    },
    "Monterey → Big Sur": {
      tempMin: 8, tempMax: 15,
      conditions: "Côtier frais, brume possible le matin",
      rain: "Possible (25%)", clothing: "Veste imperméable, couches", icon: "🌤️",
      weatherUrl: "https://www.accuweather.com/fr/us/big-sur/93920/daily-weather-forecast/2153491"
    },
    "Big Sur → Los Angeles": {
      tempMin: 10, tempMax: 19, conditions: "Variable selon zone, plus doux en arrivant sur LA",
      rain: "Faible (15%)", clothing: "Couches, lunettes soleil", icon: "🌤️",
      weatherUrl: "https://www.accuweather.com/fr/us/los-angeles/90012/daily-weather-forecast/347625"
    },
    "Los Angeles": {
      tempMin: 11, tempMax: 21, conditions: "Ensoleillé, temps idéal",
      rain: "Rare (10%)", clothing: "Vêtements légers, crème solaire", icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/los-angeles/90012/daily-weather-forecast/347625"
    },
    "Los Angeles / Malibu": {
      tempMin: 11, tempMax: 21, conditions: "Ensoleillé, temps idéal",
      rain: "Rare (10%)", clothing: "Vêtements légers, crème solaire", icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/malibu/90265/daily-weather-forecast/337141"
    },
    "Los Angeles → San Diego": {
      tempMin: 11, tempMax: 19, conditions: "Ensoleillé",
      rain: "Très faible (5%)", clothing: "Léger et confortable", icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/los-diego/90012/daily-weather-forecast/347625"
    },
    "Carlsbad (près San Diego)": {
      tempMin: 12, tempMax: 21, conditions: "Doux et ensoleillé, idéal pour un parc d'attractions",
      rain: "Quasiment aucune (5%)", clothing: "Shorts, t-shirts, crème solaire", icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/carlsbad/92008/daily-weather-forecast/330901"
    },
    "San Diego": {
      tempMin: 12, tempMax: 22, conditions: "Climat doux et agréable, presque printanier.",
      rain: "Quasiment aucune (5%)", clothing: "Shorts, t-shirts, maillot de bain", icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/san-diego/92101/daily-weather-forecast/347628"
    },
    "Paris": {
      tempMin: 5, tempMax: 10, conditions: "Retour en France !",
      rain: "Variable", clothing: "Manteau d'hiver", icon: "🇫🇷",
      weatherUrl: "https://www.accuweather.com/fr/fr/paris/623/daily-weather-forecast/623"
    }
  }
};
