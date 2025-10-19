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
          type: "arrival"
        },
        {
          time: "afternoon",
          name: "Installation Hôtel",
          type: "rest"
        },
        {
          time: "evening",
          name: "Balade Fisherman's Wharf",
          type: "leisure"
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
        }
      ],
      distance_km: 30
    },
    {
      day: 7,
      date: "2026-02-27",
      title: "Big Sur → Santa Barbara",
      city: "Monterey → Santa Barbara",
      accommodation: "Avania Inn West Beach",
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
        }
      ],
      distance_km: 350,
      drive_duration: "4h30"
    },
    {
      day: 8,
      date: "2026-02-28",
      title: "Santa Barbara",
      city: "Santa Barbara",
      accommodation: "Avania Inn West Beach",
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
          time: "late_morning",
          name: "Santa Barbara Zoo",
          type: "zoo",
          duration_hours: 3,
          cost_family_eur: 95,
          lat: 34.4206,
          lng: -119.6652
        }
      ],
      distance_km: 15
    },
    {
      day: 9,
      date: "2026-03-01",
      title: "Santa Barbara → Los Angeles",
      city: "Santa Barbara → Los Angeles",
      accommodation: "Oasis Luxe Santa Monica",
      activities: [
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
          duration_hours: 1
        },
        {
          time: "09:54",
          name: "Vol Retour",
          type: "departure"
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
          type: "arrival"
        }
      ]
    }
  ],

  placeDetails: {
    "Golden Gate Bridge": {
      query: "golden gate bridge san francisco",
      description: "Le pont le plus iconique d'Amérique ! Long de 2,7 km, vous pourrez le traverser à pied pour une vue spectaculaire sur la baie.",
      highlights: ["Traversée à pied", "Vue depuis Battery Spencer", "Photo depuis Baker Beach"],
      website: "https://www.goldengate.org",
      booking: "Non requis"
    },
    "Exploratorium": {
      query: "exploratorium san francisco museum",
      description: "Musée des sciences interactif absolument fascinant pour les enfants. Des centaines d'expériences hands-on pour comprendre le monde.",
      highlights: ["600+ expériences interactives", "Tactile Dome", "Vue sur la baie"],
      website: "https://www.exploratorium.edu",
      booking: "Recommandé"
    },
    "Muir Woods National Monument": {
      query: "muir woods redwood trees california",
      description: "Forêt majestueuse de séquoias géants. Sentiers faciles et accessibles, parfaits pour une balade familiale dans un décor féérique.",
      highlights: ["Séquoias de 250 ans", "Cathedral Grove", "Sentiers faciles"],
      website: "https://www.nps.gov/muwo",
      booking: "OBLIGATOIRE - Réservation parking"
    },
    "California Academy of Sciences": {
      query: "california academy of sciences san francisco",
      description: "Musée extraordinaire combinant aquarium, planétarium, et forêt tropicale vivante sous un même toit. Un paradis pour enfants curieux !",
      highlights: ["Forêt tropicale 4 étages", "Planétarium", "Aquarium", "Dinosaures"],
      website: "https://www.calacademy.org",
      booking: "Recommandé"
    },
    "Alcatraz Island": {
      query: "alcatraz island prison san francisco",
      description: "L'ancienne prison fédérale la plus célèbre du monde, sur une île au milieu de la baie. Audio-guide captivant avec histoires d'évasion !",
      highlights: ["Visite prison", "Audio-guide excellent", "Vue sur SF", "Histoires d'évasions"],
      website: "https://www.alcatrazcruises.com",
      booking: "CRITIQUE - Réserver 2-3 mois à l'avance"
    },
    "Monterey Bay Aquarium": {
      query: "monterey bay aquarium california",
      description: "L'un des meilleurs aquariums au monde ! Loutres de mer adorables, méduses hypnotiques, forêt de kelp géante, et bassin tactile.",
      highlights: ["Loutres de mer", "Forêt de kelp", "Méduses", "Bassin tactile", "Requins"],
      website: "https://www.montereybayaquarium.org",
      booking: "OBLIGATOIRE - Créneaux horaires"
    },
    "Point Lobos State Reserve": {
      query: "point lobos state reserve california coast",
      description: "Le plus grand lieu de rencontre entre terre et mer - magnifique réserve naturelle avec phoques, loutres, cyprès sculptés par le vent.",
      highlights: ["Phoques et loutres", "Sentiers côtiers", "Cyprès de Monterey", "Plages secrètes"],
      website: "https://www.parks.ca.gov",
      booking: "Parking peut être complet"
    },
    "17-Mile Drive": {
      query: "17 mile drive pebble beach california",
      description: "Route privée spectaculaire à travers Pebble Beach avec vues océan incroyables, Lone Cypress iconique, et propriétés de rêve.",
      highlights: ["Lone Cypress", "Pebble Beach", "Seal Rock", "Spanish Bay"],
      website: "https://www.pebblebeach.com",
      booking: "Péage 12.50$ à l'entrée"
    },
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
    "Santa Barbara Zoo": {
      query: "santa barbara zoo california ocean view",
      description: "Zoo compact avec vue océan ! Parfait pour jeunes enfants, pas trop grand, animaux variés et train pour se reposer.",
      highlights: ["Vue océan", "Girafes", "Train", "Taille idéale enfants"],
      website: "https://www.sbzoo.org",
      booking: "Tickets en ligne"
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
    "La Jolla Cove": {
      query: "la jolla cove seals san diego california",
      description: "Crique spectaculaire avec colonie de phoques et otaries ! Eaux turquoise, falaises, et animaux à quelques mètres. Magique !",
      highlights: ["Phoques sur rochers", "Otaries", "Eaux cristallines", "Sentier côtier"],
      website: "https://www.sandiego.gov",
      booking: "Non - parking difficile"
    },
    "San Diego Zoo Safari Park": {
      query: "san diego zoo safari park africa tram",
      description: "Expérience safari incroyable ! Parc immense avec animaux en semi-liberté, tram safari traversant savane africaine. Journée complète !",
      highlights: ["Tram safari Afrique", "Girafes de près", "Éléphants", "Guépards", "Aires de jeux"],
      website: "https://sdzsafaripark.org",
      booking: "Tickets en ligne recommandé"
    },
    "Coronado Island": {
      query: "coronado island beach san diego california",
      description: "Île charmante avec l'une des plus belles plages d'Amérique (sable blanc fin), hôtel historique Del Coronado, et pont spectaculaire.",
      highlights: ["Plage top USA", "Hôtel Del Coronado", "Pont Coronado", "Village pittoresque"],
      website: "https://www.coronadovisitorcenter.com",
      booking: "Non"
    }
  }
};
