// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
if ('serviceWorker' in navigator) {
    console.log('Service Worker Supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw_cached_worker.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Serive Worker Register Error: ${err}`))
    })
}
else {

    console.log('Service Worker not Supported');
}