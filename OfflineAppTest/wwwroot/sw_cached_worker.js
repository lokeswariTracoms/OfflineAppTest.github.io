const cacheName = 'v3';
const cacheAssets = [
    '/',
    '/Home/Index',
    '/Views/Home/Index.cshtml',
    '/js/test.js',
    '/js/site.js'
];

self.addEventListener('install', (e) => {
    console.log('Service Worker Installed');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Serivce Worker: Caching files');
                cache.addAll(cacheAssets)
            })
            .then(() => self.skipWaiting())
    );
});
self.addEventListener('activate', e => {
    console.log('Service Worker Activated');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            console.log('Serivce Worker Keys Cache');
            return Promise.all(cacheNames.map(cache => {
                      console.log('Serivce Worker promise map Cache:' + cache);
                        if (cache !== cacheName) {
                           console.log('Serivce Worker Clearing Old Cache:' + cache);
                            return caches.delete(cache);
                        }


                    })
            );

        })
           // .then(() => self.skipWaiting())
    );
    console.log('Service Worker Activated:END');
    // return self.clients.claim()


});
self.addEventListener("fetch", function (e) {
   // alert('a');
    console.log('Service Worker Fetching');
   
     e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});