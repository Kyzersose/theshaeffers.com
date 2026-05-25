const CACHE = 'shaeffers-v1';

const PRECACHE = [
  '/',
  '/index.html',
  '/projects.html',
  '/curriculum.html',
  '/gapyear.html',
  '/styles.css',
  '/main.js',
  '/manifest.json',
  '/icons/icon.svg',
  '/images/mattandsarah.webp',
  '/images/church.webp',
  '/images/tree-kids.webp',
  '/images/cow.webp',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        return response;
      });
    })
  );
});
