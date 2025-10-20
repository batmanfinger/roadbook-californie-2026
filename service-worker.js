// Service Worker pour PWA Offline
const CACHE_NAME = 'californie-roadbook-v2'; // Augmenter la version pour forcer la mise à jour
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/app.js',
  './js/map.js',
  './js/story-mode.js', // AJOUTÉ
  './manifest.json',
  './images/places/default.svg', // Image par défaut
  
  // Ajouter toutes les images des lieux utilisées dans le story mode
  // Vous devez lister ici toutes vos images de places
  './images/places/golden-gate-bridge.jpg',
  './images/places/alcatraz-island.jpg',
  './images/places/fishermans-wharf.jpg',
  './images/places/cable-car.jpg',
  './images/places/chinatown.jpg',
  './images/places/lombard-street.jpg',
  './images/places/painted-ladies.jpg',
  './images/places/palace-of-fine-arts.jpg',
  './images/places/twin-peaks.jpg',
  './images/places/ferry-building.jpg',
  './images/places/yosemite-valley.jpg',
  './images/places/half-dome.jpg',
  './images/places/glacier-point.jpg',
  './images/places/tunnel-view.jpg',
  './images/places/bridalveil-fall.jpg',
  './images/places/mariposa-grove.jpg',
  './images/places/badwater-basin.jpg',
  './images/places/zabriskie-point.jpg',
  './images/places/dantes-view.jpg',
  './images/places/artists-palette.jpg',
  './images/places/mesquite-flat-sand-dunes.jpg',
  './images/places/fremont-street.jpg',
  './images/places/the-strip.jpg',
  './images/places/bellagio-fountains.jpg',
  './images/places/high-roller.jpg',
  './images/places/zion-canyon.jpg',
  './images/places/angels-landing.jpg',
  './images/places/the-narrows.jpg',
  './images/places/canyon-overlook-trail.jpg',
  './images/places/bryce-amphitheater.jpg',
  './images/places/sunrise-point.jpg',
  './images/places/sunset-point.jpg',
  './images/places/navajo-loop-trail.jpg',
  './images/places/antelope-canyon.jpg',
  './images/places/horseshoe-bend.jpg',
  './images/places/monument-valley.jpg',
  './images/places/forrest-gump-point.jpg',
  './images/places/south-rim.jpg',
  './images/places/mather-point.jpg',
  './images/places/desert-view-watchtower.jpg',
  './images/places/bright-angel-trail.jpg',
  './images/places/route-66.jpg',
  './images/places/seligman.jpg',
  './images/places/hackberry-general-store.jpg',
  './images/places/oatman.jpg',
  './images/places/joshua-tree.jpg',
  './images/places/keys-view.jpg',
  './images/places/skull-rock.jpg',
  './images/places/cholla-cactus-garden.jpg',
  './images/places/la-jolla-cove.jpg',
  './images/places/balboa-park.jpg',
  './images/places/gaslamp-quarter.jpg',
  './images/places/old-town.jpg',
  './images/places/coronado-beach.jpg',
  './images/places/griffith-observatory.jpg',
  './images/places/hollywood-sign.jpg',
  './images/places/santa-monica-pier.jpg',
  './images/places/venice-beach.jpg',
  './images/places/getty-center.jpg',
  './images/places/rodeo-drive.jpg',
  './images/places/bixby-creek-bridge.jpg',
  './images/places/mcway-falls.jpg',
  './images/places/pfeiffer-beach.jpg',
  './images/places/point-lobos.jpg',
  './images/places/17-mile-drive.jpg',
  './images/places/carmel-by-the-sea.jpg',
  './images/places/monterey-bay-aquarium.jpg',
  './images/places/santa-cruz-boardwalk.jpg'
  
  // Ajoutez d'autres images selon vos besoins
];

// Installation du Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache ouvert');
        // Utiliser addAll avec gestion d'erreur pour continuer même si certaines images manquent
        return cache.addAll(urlsToCache).catch(function(error) {
          console.warn('Certaines ressources n\'ont pas pu être mises en cache:', error);
          // Ne pas faire échouer l'installation même si quelques ressources manquent
          return Promise.resolve();
        });
      })
  );
  // Forcer l'activation immédiate du nouveau service worker
  self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      // Prendre le contrôle de toutes les pages immédiatement
      return self.clients.claim();
    })
  );
});

// Stratégie de cache améliorée
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // Pour les tuiles de carte OpenStreetMap, Network First avec cache
  if (url.hostname.includes('openstreetmap.org') || 
      url.hostname.includes('tile.openstreetmap.org') ||
      url.hostname.includes('a.tile.openstreetmap.org') ||
      url.hostname.includes('b.tile.openstreetmap.org') ||
      url.hostname.includes('c.tile.openstreetmap.org')) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Si la réponse est valide, la mettre en cache
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(function() {
          // Si pas de réseau, essayer le cache
          return caches.match(event.request).then(function(cachedResponse) {
            // Si pas en cache, retourner une tuile vide ou une erreur
            if (!cachedResponse) {
              // Créer une réponse SVG vide pour les tuiles manquantes
              const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="#f0f0f0"/><text x="128" y="128" text-anchor="middle" fill="#999" font-size="14">Offline</text></svg>';
              return new Response(svg, {
                headers: { 'Content-Type': 'image/svg+xml' }
              });
            }
            return cachedResponse;
          });
        })
    );
    return;
  }
  
  // Pour les images et ressources locales, Cache First
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          
          // Si pas en cache, essayer de fetch et mettre en cache
          return fetch(event.request).then(function(response) {
            // Vérifier si c'est une réponse valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Cloner et mettre en cache pour les prochaines fois
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache);
            });
            
            return response;
          }).catch(function() {
            // Si c'est une image qui échoue, retourner l'image par défaut
            if (event.request.destination === 'image') {
              return caches.match('./images/places/default.svg');
            }
            // Sinon, retourner une erreur
            return new Response('Offline - Ressource non disponible', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
        })
    );
    return;
  }
  
  // Pour les ressources externes, Network First
  event.respondWith(
    fetch(event.request)
      .catch(function() {
        return caches.match(event.request);
      })
  );
});