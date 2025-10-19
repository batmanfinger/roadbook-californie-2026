// ==========================================
// GESTION DE LA CARTE LEAFLET
// ==========================================

let map = null;
let userMarker = null;
let routeLine = null;
let markers = [];

// Coordonnées des étapes principales
const mainStops = [
  { name: "San Francisco", lat: 37.8047, lng: -122.4183, day: 1 },
  { name: "Monterey", lat: 36.6177, lng: -121.9018, day: 5 },
  { name: "Santa Barbara", lat: 34.4140, lng: -119.6982, day: 8 },
  { name: "Los Angeles", lat: 34.0195, lng: -118.4912, day: 10 },
  { name: "San Diego", lat: 32.8473, lng: -117.2742, day: 13 }
];

// ==========================================
// INITIALISATION DE LA CARTE
// ==========================================

function initMap() {
  // Vérifie si Leaflet est chargé
  if (typeof L === 'undefined') {
    console.error('Leaflet not loaded');
    return;
  }

  // Centre sur la Californie
  map = L.map('map', {
    zoomControl: true,
    attributionControl: true
  }).setView([36.7783, -119.4179], 6);

  // Tuiles OpenStreetMap (fonctionnent offline si cachées)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
    minZoom: 5
  }).addTo(map);

  // Forcer le recalcul de la taille de la carte avec plusieurs tentatives
  setTimeout(() => map.invalidateSize(), 100);
  setTimeout(() => map.invalidateSize(), 300);
  setTimeout(() => map.invalidateSize(), 500);

  // Recalculer aussi au redimensionnement de la fenêtre
  window.addEventListener('resize', () => {
    if (map) map.invalidateSize();
  });

  // Dessiner l'itinéraire
  drawRoute();

  // Ajouter les marqueurs des étapes
  addStopMarkers();

  // Démarrer le suivi GPS
  startLocationTracking();
}

// ==========================================
// TRACÉ DE L'ITINÉRAIRE
// ==========================================

function drawRoute() {
  const routeCoords = mainStops.map(stop => [stop.lat, stop.lng]);
  
  routeLine = L.polyline(routeCoords, {
    color: '#0077BE',
    weight: 4,
    opacity: 0.7,
    smoothFactor: 1
  }).addTo(map);

  // Ajuster la vue pour voir tout l'itinéraire
  map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
}

// ==========================================
// MARQUEURS DES ÉTAPES
// ==========================================

function addStopMarkers() {
  mainStops.forEach((stop, index) => {
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        background: #0077BE;
        color: white;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">${index + 1}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    const marker = L.marker([stop.lat, stop.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center;">
          <strong style="font-size: 16px;">${stop.name}</strong><br>
          <span style="font-size: 12px; color: #666;">Jour ${stop.day}</span>
        </div>
      `);

    markers.push(marker);
  });
}

// ==========================================
// SUIVI GPS
// ==========================================

function startLocationTracking() {
  if (!navigator.geolocation) {
    console.log('Géolocalisation non disponible');
    return;
  }

  // Options de géolocalisation
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  // Suivre la position en continu
  navigator.geolocation.watchPosition(
    updateUserPosition,
    handleLocationError,
    options
  );
}

function updateUserPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  // Créer ou mettre à jour le marqueur utilisateur
  if (!userMarker) {
    // Icône personnalisée pour l'utilisateur
    const userIcon = L.divIcon({
      className: 'user-marker',
      html: `<div style="
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #4285F4;
        border: 4px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      "></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    userMarker = L.marker([lat, lng], { icon: userIcon })
      .addTo(map)
      .bindPopup('📍 Vous êtes ici');

    // Cercle de précision
    L.circle([lat, lng], {
      radius: accuracy,
      color: '#4285F4',
      fillColor: '#4285F4',
      fillOpacity: 0.1,
      weight: 1
    }).addTo(map);

    // Centrer la carte sur la position (première fois seulement)
    map.setView([lat, lng], 13);
  } else {
    // Mettre à jour la position
    userMarker.setLatLng([lat, lng]);
  }

  console.log(`Position mise à jour: ${lat}, ${lng} (précision: ${accuracy}m)`);
}

function handleLocationError(error) {
  let message;
  switch(error.code) {
    case error.PERMISSION_DENIED:
      message = "Autorisation de géolocalisation refusée";
      break;
    case error.POSITION_UNAVAILABLE:
      message = "Position non disponible";
      break;
    case error.TIMEOUT:
      message = "Délai de géolocalisation dépassé";
      break;
    default:
      message = "Erreur de géolocalisation";
  }
  console.log(message, error);
}

// ==========================================
// FONCTIONS PUBLIQUES
// ==========================================

// Centrer sur une étape spécifique
function focusOnStop(dayNumber) {
  const stop = mainStops.find(s => s.day === dayNumber);
  if (stop && map) {
    map.setView([stop.lat, stop.lng], 12, { animate: true });
    const marker = markers[mainStops.indexOf(stop)];
    if (marker) {
      marker.openPopup();
    }
  }
}

// Exposer les fonctions nécessaires
window.initMap = initMap;
window.focusOnStop = focusOnStop;
