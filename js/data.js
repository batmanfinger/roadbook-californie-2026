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
      title: "Nature Day - Récupération Voiture",
      city: "San Francisco",
      accommodation: "Hotel Caza Fisherman's Wharf",
      activities: [
        {
          time: "10:00",
          name: "Muir Woods National Monument",
          type: "nature",
          duration_hours: 2,
          cost_family_eur: 45,
          priority: "high",
          lat: 37.8974,
          lng: -122.5808
        },
        {
          time: "12:30",
          name: "Sausalito",
          type: "town",
          duration_hours: 1.5,
          lat: 37.8591,
          lng: -122.4852
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
      distance_km: 80
    },
    {
      day: 4,
      date: "2026-02-24",
      title: "Alcatraz & Départ vers Monterey",
      city: "San Francisco → Monterey",
      accommodation: "Victorian Inn Cannery Row",
      activities: [
        {
          time: "morning",
          name: "Alcatraz Island",
          type: "historic_site",
          duration_hours: 3,
          cost_family_eur: 135,
          priority: "urgent_booking",
          lat: 37.8267,
          lng: -122.4230
        },
        {
          time: "12:00",
          name: "Pier 39",
          type: "attraction",
          duration_hours: 1,
          lat: 37.8087,
          lng: -122.4098
        }
      ],
      distance_km: 200,
      drive_duration: "2h30"
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
      title: "Big Sur Day (Aller-Retour)",
      city: "Monterey",
      accommodation: "Victorian Inn Cannery Row",
      activities: [
        {
          time: "morning",
          name: "Big Sur - Bixby Bridge",
          type: "scenic_drive",
          duration_hours: 1,
          priority: "high",
          lat: 36.3714,
          lng: -121.9027
        },
        {
          time: "late_morning",
          name: "McWay Falls",
          type: "nature",
          duration_hours: 1,
          lat: 36.1572,
          lng: -121.6694
        },
        {
          time: "midday",
          name: "Point Sur Lighthouse",
          type: "historic_site",
          duration_hours: 1.5,
          lat: 36.3048,
          lng: -121.8997
        },
        {
          time: "afternoon",
          name: "Big Creek Cove Vista Point",
          type: "scenic_viewpoint",
          duration_hours: 0.5,
          priority: "high",
          lat: 35.9490,
          lng: -121.4927
        }
      ],
      distance_km: 200,
      drive_duration: "Aller-retour depuis Monterey (jusqu'à Lucia)"
    },
    {
      day: 8,
      date: "2026-02-28",
      title: "Monterey → Santa Barbara (via intérieur)",
      city: "Monterey → Santa Barbara",
      accommodation: "Avania Inn West Beach",
      activities: [
        {
          time: "morning",
          name: "Départ vers Santa Barbara",
          type: "drive",
          lat: 34.4208,
          lng: -119.6982
        },
        {
          time: "afternoon",
          name: "Stearns Wharf",
          type: "attraction",
          duration_hours: 1,
          lat: 34.4081,
          lng: -119.6857
        },
        {
          time: "late_afternoon",
          name: "Santa Barbara Beach",
          type: "beach",
          duration_hours: 1.5,
          lat: 34.4083,
          lng: -119.6946
        }
      ],
      distance_km: 350,
      drive_duration: "4h (via US-101)"
    },
    {
      day: 9,
      date: "2026-03-01",
      title: "Santa Barbara → Los Angeles",
      city: "Santa Barbara → Los Angeles",
      accommodation: "Oasis Luxe Santa Monica",
      activities: [
        {
          time: "morning",
          name: "Mission Santa Barbara",
          type: "historic_site",
          duration_hours: 1.5,
          cost_family_eur: 35,
          lat: 34.4381,
          lng: -119.7149
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
      distance_km: 150,
      drive_duration: "2h"
    },
    {
      day: 10,
      date: "2026-03-02",
      title: "LA Dinosaures & Nature",
      city: "Los Angeles",
      accommodation: "Oasis Luxe Santa Monica",
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
      day: 11,
      date: "2026-03-03",
      title: "Malibu & Getty Villa",
      city: "Los Angeles / Malibu",
      accommodation: "Oasis Luxe Santa Monica",
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
      day: 12,
      date: "2026-03-04",
      title: "Los Angeles → San Diego",
      city: "Los Angeles → San Diego",
      accommodation: "La Jolla Riviera Inn",
      activities: [
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
      drive_duration: "2h30"
    },
    {
      day: 13,
      date: "2026-03-05",
      title: "San Diego Safari Park",
      city: "San Diego",
      accommodation: "La Jolla Riviera Inn",
      activities: [
        {
          time: "all_day",
          name: "San Diego Zoo Safari Park",
          type: "safari_park",
          duration_hours: 8,
          cost_family_eur: 190,
          priority: "high",
          lat: 33.0975,
          lng: -116.9993
        }
      ],
      distance_km: 70
    },
    {
      day: 14,
      date: "2026-03-06",
      title: "San Diego Découverte",
      city: "San Diego",
      accommodation: "La Jolla Riviera Inn",
      activities: [
        {
          time: "morning",
          name: "Balboa Park",
          type: "park",
          duration_hours: 3,
          lat: 32.7341,
          lng: -117.1441
        },
        {
          time: "afternoon",
          name: "Coronado Island",
          type: "beach_town",
          duration_hours: 3,
          lat: 32.6859,
          lng: -117.1831
        }
      ],
      distance_km: 40
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
          time: "09:54",
          name: "Vol Retour",
          type: "departure",
          lat: 32.7338,
          lng: -117.1933
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
          time: "09:40",
          name: "Arrivée CDG",
          type: "arrival",
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
      booking: "Réservé"
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
    "Muir Woods National Monument": {
      query: "muir woods redwood trees california",
      description: "Forêt majestueuse de séquoias géants. Sentiers faciles et accessibles, parfaits pour une balade familiale dans un décor féérique.",
      highlights: ["Séquoias de 250 ans", "Cathedral Grove", "Sentiers faciles"],
      website: "https://www.nps.gov/muwo",
      booking: "OBLIGATOIRE - Réservation parking"
    },
    "Sausalito": {
      query: "sausalito california waterfront village",
      description: "Village côtier pittoresque au bord de la baie avec vue imprenable sur San Francisco. Galeries d'art, boutiques chics, et restaurants avec terrasses face à l'eau.",
      highlights: ["Vue sur SF skyline", "Waterfront coloré", "Cafés et restaurants", "Ambiance méditerranéenne"],
      website: "https://www.sausalito.org",
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
    "Alcatraz Island": {
      query: "alcatraz island prison san francisco",
      description: "L'ancienne prison fédérale la plus célèbre du monde, sur une île au milieu de la baie. Audio-guide captivant avec histoires d'évasion !",
      highlights: ["Visite prison", "Audio-guide excellent", "Vue sur SF", "Histoires d'évasions"],
      website: "https://www.alcatrazcruises.com",
      booking: "CRITIQUE - Réserver 2-3 mois à l'avance"
    },
    "Pier 39": {
      query: "pier 39 san francisco sea lions",
      description: "Jetée animée abritant la célèbre colonie de lions de mer ! Boutiques, restaurants, aquarium, et artistes de rue. Ambiance festive garantie.",
      highlights: ["Colonie lions de mer", "Aquarium Bay", "Restaurants vue baie", "Manèges enfants"],
      website: "https://www.pier39.com",
      booking: "Non"
    },

    // ==================== JOUR 5 ====================
    "Monterey Bay Aquarium": {
      query: "monterey bay aquarium california",
      description: "L'un des meilleurs aquariums au monde ! Loutres de mer adorables, méduses hypnotiques, forêt de kelp géante, et bassin tactile.",
      highlights: ["Loutres de mer", "Forêt de kelp", "Méduses", "Bassin tactile", "Requins"],
      website: "https://www.montereybayaquarium.org",
      booking: "OBLIGATOIRE - Créneaux horaires"
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
      description: "Plage de sable blanc immaculé bordée de cyprès. Eau turquoise, falaises escarpées, et couchers de soleil spectaculaires. Paradis des photographes !",
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
    "McWay Falls": {
      query: "mcway falls big sur waterfall beach",
      description: "Cascade rare tombant directement sur une plage ! Vue depuis le sentier (cascade inaccessible), spectacle unique en Californie.",
      highlights: ["Cascade sur plage", "Vue panoramique", "Crique turquoise"],
      website: "https://www.parks.ca.gov",
      booking: "Non - parking Julia Pfeiffer Burns"
    },
    "Point Sur Lighthouse": {
      query: "point sur lighthouse big sur california",
      description: "Phare historique perché sur un rocher volcanique à 90m au-dessus de l'océan. Visites guidées fascinantes avec vue spectaculaire sur Big Sur.",
      highlights: ["Phare historique 1889", "Rocher volcanique", "Vue panoramique", "Visite guidée"],
      website: "https://www.pointsur.org",
      booking: "Horaires limités - vérifier avant"
    },
    "Big Creek Cove Vista Point": {
      query: "big creek cove vista point big sur california",
      description: "Point de vue spectaculaire au bout de la Highway 1 praticable (après Lucia). Dernier arrêt avant la fermeture de route, offrant une vue époustouflante sur les falaises sauvages de Big Sur plongeant dans le Pacifique.",
      highlights: ["Falaises vertigineuses", "Océan Pacifique", "Dernier point accessible", "Photos panoramiques"],
      website: null,
      booking: "Non - arrêt gratuit sur Highway 1"
    },
    "Départ vers Santa Barbara": {
      query: "us 101 california scenic highway",
      description: "Route pittoresque à travers la Californie centrale via Salinas et King City. Paysages agricoles et collines ondulantes jusqu'à la côte de Santa Barbara.",
      highlights: ["Highway US-101", "Vallée de Salinas", "Collines californiennes", "Arrivée côte SB"],
      website: null,
      booking: "Non"
    },
    "Stearns Wharf": {
      query: "stearns wharf santa barbara pier",
      description: "Jetée historique de 1872, la plus ancienne en bois de Californie ! Restaurants de fruits de mer, boutiques, et aquarium avec vue panoramique sur les montagnes.",
      highlights: ["Jetée historique 1872", "Restaurants fruits de mer", "Vue montagnes", "Ty Warner Sea Center"],
      website: "https://stearnswharf.org",
      booking: "Non"
    },
    "Santa Barbara Beach": {
      query: "santa barbara beach california palm trees",
      description: "Plage de sable doré bordée de palmiers avec vue sur les Channel Islands. Eau calme, idéale pour se détendre après la route. Ambiance Riviera californienne !",
      highlights: ["Palmiers emblématiques", "Eau calme", "Vue Channel Islands", "Coucher soleil"],
      website: "https://santabarbaraca.com/beaches",
      booking: "Non"
    },
    
    // ========== JOUR 9 ==========
    "Venice Beach Boardwalk": {
      query: "venice beach boardwalk california street performers",
      description: "Promenade iconique et excentrique de Los Angeles ! Street art incroyable, artistes de rue, Muscle Beach, et ambiance bohème californienne authentique.",
      highlights: ["Street performers", "Muscle Beach", "Street art", "Skate park", "Ambiance unique"],
      website: "https://www.venicebeach.com",
      booking: "Non"
    },

    "Mission Santa Barbara": {
      query: "mission santa barbara california historic",
      description: "La 'Reine des Missions' californienne fondée en 1786. Architecture coloniale espagnole magnifique, jardins paisibles, et musée historique.",
      highlights: ["Architecture coloniale", "Jardins historiques", "Musée des missions", "Vue panoramique"],
      website: "https://www.santabarbaramission.org",
      booking: "Non requis"
    },
    "Santa Monica Pier": {
      query: "santa monica pier ferris wheel california",
      description: "Jetée emblématique avec parc d'attractions, grande roue iconique, arcades, et ambiance festive. Fin de la Route 66 !",
      highlights: ["Grande roue Pacific Park", "Arcades", "Fin Route 66", "Plage"],
      website: "https://www.santamonicapier.org",
      booking: "Non - manèges payants"
    },
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
      booking: "Gratuit - Planétarium payant"
    },
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
    
    // ========== JOUR 12 - LA → SAN DIEGO ==========
    "La Jolla Cove": {
      query: "la jolla cove seals san diego california",
      description: "Crique spectaculaire avec colonie de phoques et otaries ! Eaux turquoise, falaises, et animaux à quelques mètres. Magique !",
      highlights: ["Phoques sur rochers", "Otaries", "Eaux cristallines", "Sentier côtier"],
      website: "https://www.sandiego.gov",
      booking: "Non - parking difficile"
    },
    
    // ========== JOUR 13 - SAN DIEGO SAFARI PARK ==========
    "San Diego Zoo Safari Park": {
      query: "san diego zoo safari park africa tram",
      description: "Expérience safari incroyable ! Parc immense avec animaux en semi-liberté, tram safari traversant savane africaine. Journée complète !",
      highlights: ["Tram safari Afrique", "Girafes de près", "Éléphants", "Guépards", "Aires de jeux"],
      website: "https://sdzsafaripark.org",
      booking: "Tickets en ligne recommandé"
    },
    
    // ========== JOUR 14 - SAN DIEGO DÉCOUVERTE ==========
    "Balboa Park": {
      query: "balboa park san diego museums gardens",
      description: "Parc urbain spectaculaire de 490 hectares ! 17 musées, jardins botaniques magnifiques, architecture hispanique, et zoo de San Diego. Un trésor culturel.",
      highlights: ["17 musées différents", "Jardins botaniques", "Architecture hispanique", "Zoo San Diego", "Orgue en plein air"],
      website: "https://www.balboapark.org",
      booking: "Gratuit - musées payants"
    },
    "Coronado Island": {
      query: "coronado island beach san diego california",
      description: "Île charmante avec l'une des plus belles plages d'Amérique (sable blanc fin), hôtel historique Del Coronado, et pont spectaculaire.",
      highlights: ["Plage top USA", "Hôtel Del Coronado", "Pont Coronado", "Village pittoresque"],
      website: "https://www.coronadovisitorcenter.com",
      booking: "Non"
    },
    
    // ========== JOUR 15 - DÉPART ==========
    "Final La Jolla Cove Walk": {
      query: "la jolla cove morning walk seals",
      description: "Dernière balade matinale à La Jolla Cove pour dire au revoir aux phoques ! Moment paisible avant le départ, profitez de l'air marin et des souvenirs.",
      highlights: ["Adieux aux phoques", "Lever de soleil", "Derniers moments Californie", "Photos souvenirs"],
      website: "https://www.sandiego.gov",
      booking: "Non"
    },
    "Vol Retour SAN": {
      query: "san diego international airport",
      description: "Aéroport international de San Diego (Lindbergh Field). Petit aéroport pratique avec vue sur la baie. Fin de votre aventure californienne !",
      highlights: ["Check-in anticipé", "Boutiques duty-free", "Restaurants vue piste", "Accès facile"],
      website: "https://www.san.org",
      booking: "Vol confirmé"
    },
    
    // ========== JOUR 16 - ARRIVÉE PARIS ==========
    "Arrivée CDG": {
      query: "aeroport charles de gaulle paris",
      description: "Aéroport Paris-Charles de Gaulle (CDG) - Bienvenue de retour en France après 16 jours d'aventure californienne inoubliable !",
      highlights: ["Terminal 2E/F", "Récupération bagages", "Douanes UE", "Transports vers Paris"],
      website: "https://www.parisaeroport.fr",
      booking: "Arrivée confirmée"
    }
  },
  weatherData: {
    "San Francisco": {
      tempMin: 8,
      tempMax: 17,
      conditions: "Frais et brumeux, surtout le matin. Vent océanique modéré.",
      rain: "Pluie possible (35%)",
      clothing: "Veste imperméable, pull, couches",
      icon: "🌤️",
      weatherUrl: "https://www.accuweather.com/fr/us/san-francisco/94103/daily-weather-forecast/347629"
    },
    "Monterey": {
      tempMin: 8,
      tempMax: 16,
      conditions: "Climat côtier frais, influencé par l'océan.",
      rain: "Peu de pluie (25%)",
      clothing: "Pull léger, veste pour le soir",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/monterey/93940/daily-weather-forecast/331966"
    },
    "Monterey / Carmel": {
      tempMin: 8,
      tempMax: 16,
      conditions: "Climat côtier frais, influencé par l'océan.",
      rain: "Peu de pluie (20%)",
      clothing: "Pull léger, veste pour le soir",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/carmel-by-the-sea/93921/daily-weather-forecast/332066"
    },
    "Santa Barbara": {
      tempMin: 10,
      tempMax: 19,
      conditions: "Plus doux et ensoleillé, avec un climat méditerranéen.",
      rain: "Très peu de pluie (20%)",
      clothing: "T-shirt + pull léger, lunettes soleil",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/santa-barbara/93101/daily-weather-forecast/327137"
    },
    "Los Angeles": {
      tempMin: 11,
      tempMax: 21,
      conditions: "Ensoleillé, temps idéal",
      rain: "Rare (10%)",
      clothing: "Vêtements légers, crème solaire",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/los-angeles/90012/daily-weather-forecast/347625"
    },
    "Los Angeles / Malibu": {
      tempMin: 11,
      tempMax: 21,
      conditions: "Ensoleillé, temps idéal",
      rain: "Rare (10%)",
      clothing: "Vêtements légers, crème solaire",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/malibu/90265/daily-weather-forecast/337141"
    },
    "San Diego": {
      tempMin: 12,
      tempMax: 22,
      conditions: "Climat doux et agréable, presque printanier.",
      rain: "Quasiment aucune (5%)",
      clothing: "Shorts, t-shirts, maillot de bain",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/san-diego/92101/daily-weather-forecast/347628"
    },
    "Monterey → Santa Barbara": {
      tempMin: 9,
      tempMax: 17,
      conditions: "Variable selon les zones",
      rain: "Faible (15%)",
      clothing: "Couches, adaptable",
      icon: "🌤️",
      weatherUrl: "https://www.accuweather.com/fr/us/santa-barbara/93101/daily-weather-forecast/327137"
    },
    "Santa Barbara → Los Angeles": {
      tempMin: 10,
      tempMax: 18,
      conditions: "Ensoleillé",
      rain: "Faible (10%)",
      clothing: "Léger, lunettes de soleil",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/los-angeles/90012/daily-weather-forecast/347625"
    },
    "Los Angeles → San Diego": {
      tempMin: 11,
      tempMax: 19,
      conditions: "Ensoleillé",
      rain: "Très faible (5%)",
      clothing: "Léger et confortable",
      icon: "☀️",
      weatherUrl: "https://www.accuweather.com/fr/us/los-angeles/90012/daily-weather-forecast/347625"
    },
    "San Francisco → Monterey": {
      tempMin: 9,
      tempMax: 16,
      conditions: "Variable",
      rain: "Possible (30%)",
      clothing: "Veste + couches",
      icon: "🌤️",
      weatherUrl: "https://www.accuweather.com/fr/us/monterey/93940/daily-weather-forecast/331966"
    },
    "Paris": {
      tempMin: 5,
      tempMax: 10,
      conditions: "Retour en France !",
      rain: "Variable",
      clothing: "Manteau d'hiver",
      icon: "🇫🇷",
      weatherUrl: "https://www.accuweather.com/fr/fr/paris/623/daily-weather-forecast/623"
    }
  }
};
