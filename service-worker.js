const CACHE_NAME = "offline";
const OFFLINE_URL = "index.html";

const offlineFiles = [
  "./",
  "/style.css",
  "/main.js",
  "/src/controls.js",
  "/src/download.js",
  "/src/eventFunctions.js",
  "/src/components",
  "/src/components/boxcolorwidgets.js",
  "/src/components/modal.js",
  "/src/components/imageandtext.js",
  "/src/components/imagesizewidget.js",
  "/src/components/backgroundColor.js",
  "/src/components/croppimage.js",
  "/src/events.js",
  "/src/croppr.css",
  "/src/getColorFromImage.js",
  "/src/input.css",
];
self.addEventListener("install", function (event) {
  console.log("[ServiceWorker] Install");

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Setting {cache: 'reload'} in the new request will ensure that the response
      // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
      await cache.addAll(offlineFiles);
    })()
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // console.log('[Service Worker] Fetch', event.request.url);
  //   if (event.request.mode === "navigate") {
  //     event.respondWith(
  //       (async () => {
  //         try {
  //           const preloadResponse = await event.preloadResponse;
  //           if (preloadResponse) {
  //             return preloadResponse;
  //           }

  //           const networkResponse = await fetch(event.request);
  //           return networkResponse;
  //         } catch (error) {
  //           console.log(
  //             "[Service Worker] Fetch failed; returning offline page instead.",
  //             error
  //           );

  //           const cache = await caches.open(CACHE_NAME);
  //           const cachedResponse = await cache.match(OFFLINE_URL);
  //           return cachedResponse;
  //         }
  //       })()
  //     );
  //   }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
