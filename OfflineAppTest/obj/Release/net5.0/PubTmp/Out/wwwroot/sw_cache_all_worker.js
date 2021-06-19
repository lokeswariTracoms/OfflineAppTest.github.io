const cacheName = 'v3';


self.addEventListener('install', (e) => {
    console.log('Service Worker Installed');
   
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

    e.respondWith(
        fetch(e.request)
            .then(res => {
                //Make Copy/Clone of Response
                const resClone = res.clone();
                //Open cache
                caches
                    .open(cacheName)
                    .then(cach => {
                        //add response to cache 
                        cache.put(e.request, resClone)
                    })
            })
    );
});