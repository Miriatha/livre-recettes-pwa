const CACHE_PREFIX = "livre-recettes-static-";
const CACHE_VERSION = "v1";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;

const REQUIRED_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./recipe-text-parser.js",
  "./app.js"
];

const OPTIONAL_FILES = [
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

const PRECACHE_URLS = new Map(
  [...REQUIRED_FILES, ...OPTIONAL_FILES].map((path) => {
    const url = new URL(path, self.location.href).href;
    return [new URL(url).pathname, url];
  })
);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(REQUIRED_FILES);

      const optionalResults = await Promise.allSettled(
        OPTIONAL_FILES.map((path) => cache.add(path))
      );

      optionalResults.forEach((result, index) => {
        if (result.status === "rejected") {
          console.warn(
            `Livre de recettes : ressource facultative non mise en cache (${OPTIONAL_FILES[index]}).`
          );
        }
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith(CACHE_PREFIX) && cacheName !== CACHE_NAME
            )
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

async function repondreNavigation(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);

    if (response.ok) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const responseEnCache =
      (await cache.match(request, { ignoreSearch: true })) ||
      (await cache.match(new URL("./", self.location.href).href)) ||
      (await cache.match(new URL("./index.html", self.location.href).href));

    if (responseEnCache) {
      return responseEnCache;
    }

    throw error;
  }
}

async function repondreRessourceStatique(request, canonicalUrl, event) {
  const cache = await caches.open(CACHE_NAME);
  const reponseEnCache = await cache.match(canonicalUrl);
  const miseAJour = fetch(request)
    .then((response) => {
      if (response.ok) {
        return cache.put(canonicalUrl, response.clone()).then(() => response);
      }

      return response;
    })
    .catch(() => null);

  if (reponseEnCache) {
    event.waitUntil(miseAJour);
    return reponseEnCache;
  }

  const reponseReseau = await miseAJour;

  if (reponseReseau) {
    return reponseReseau;
  }

  return fetch(request);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (
    url.origin !== self.location.origin ||
    !url.href.startsWith(self.registration.scope)
  ) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(repondreNavigation(request));
    return;
  }

  const canonicalUrl = PRECACHE_URLS.get(url.pathname);

  if (canonicalUrl) {
    event.respondWith(repondreRessourceStatique(request, canonicalUrl, event));
  }
});
