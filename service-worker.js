// Service Worker pour PWA Offline
const CACHE_NAME = 'californie-roadbook-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/app.js',
  './js/map.js',
  './manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
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
    })
  );
});

// Stratégie Cache First pour les ressources locales
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // Pour les tuiles de carte OpenStreetMap, on utilise Network First avec cache fallback
  if (url.hostname.includes('openstreetmap.org') || url.hostname.includes('tile.openstreetmap.org')) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Clone la réponse car elle ne peut être utilisée qu'une fois
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(function() {
          // Si pas de réseau, essayer le cache
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // Pour les ressources locales, Cache First
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Retourne depuis le cache ou fetch depuis le réseau
        return response || fetch(event.request);
      })
  );
});
