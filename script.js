document.getElementById('actionButton').addEventListener('click', () => {
    fetch('https://your-predefined-url.com/endpoint')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
});

function showInstallPromotion() {
    // You can use a custom UI element to notify the user
    const installButton = document.createElement('button');
    installButton.innerText = 'Install App';
    installButton.classList.add('install-button');
    document.body.appendChild(installButton);

    installButton.addEventListener('click', () => {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
}