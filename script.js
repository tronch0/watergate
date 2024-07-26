
// document.getElementById('actionButton').addEventListener('click', () => {
//     fetch('https://your-predefined-url.com/endpoint')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error:', error));
// });

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js')
//         .then(registration => {
//             console.log('Service Worker registered with scope:', registration.scope);
//         })
//         .catch(error => {
//             console.log('Service Worker registration failed:', error);
//         });
// }

// let deferredPrompt;
// window.addEventListener('beforeinstallprompt', (e) => {
//     console.log("beforeinstallprompt fired!");

//     e.preventDefault();
//     deferredPrompt = e;
//     showInstallPromotion();
// });

// function showInstallPromotion() {
//     const installButton = document.createElement('button');
//     installButton.innerText = 'Install App';
//     installButton.classList.add('install-button');
//     document.body.appendChild(installButton);

//     installButton.addEventListener('click', () => {
//         deferredPrompt.prompt();
//         deferredPrompt.userChoice.then((choiceResult) => {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('User accepted the install prompt');
//             } else {
//                 console.log('User dismissed the install prompt');
//             }
//             deferredPrompt = null;
//             installButton.remove();
//         });
//     });
// }

document.getElementById('actionButton').addEventListener('click', () => {
    fetch('https://your-predefined-url.com/endpoint')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('statusMessage').textContent = 'Gate is opening...';
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('statusMessage').textContent = 'Failed to open the gate.';
        });
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

// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     deferredPrompt = e;
//     showInstallPromotion();
// });

// function showInstallPromotion() {
//     const installButton = document.createElement('button');
//     installButton.innerText = 'Install App';
//     installButton.classList.add('install-button');
//     document.body.appendChild(installButton);

//     installButton.addEventListener('click', () => {
//         deferredPrompt.prompt();
//         deferredPrompt.userChoice.then((choiceResult) => {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('User accepted the install prompt');
//             } else {
//                 console.log('User dismissed the install prompt');
//             }
//             deferredPrompt = null;
//             installButton.remove();
//         });
//     });
// }

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installSnackbar').classList.add('show'); // Show the install snackbar
});

document.getElementById('snackbarInstallButton').addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
        document.getElementById('installSnackbar').classList.remove('show'); // Hide the install snackbar after the prompt
    });
});

document.getElementById('closeSnackbar').addEventListener('click', () => {
    document.getElementById('installSnackbar').classList.remove('show'); // Hide the install snackbar when close button is clicked
});