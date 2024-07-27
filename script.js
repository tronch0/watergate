
// document.getElementById('actionButton').addEventListener('click', () => {
//     fetch('https://your-predefined-url.com/endpoint')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             document.getElementById('statusMessage').textContent = 'Gate is opening...';
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             document.getElementById('statusMessage').textContent = 'Failed to open the gate.';
//         });
// });

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
//     document.getElementById('installSnackbar').classList.add('show'); // Show the install snackbar
// });

// document.getElementById('snackbarInstallButton').addEventListener('click', () => {
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//             console.log('User accepted the install prompt');
//         } else {
//             console.log('User dismissed the install prompt');
//         }
//         deferredPrompt = null;
//         document.getElementById('installSnackbar').classList.remove('show'); // Hide the install snackbar after the prompt
//     });
// });

// document.getElementById('closeSnackbar').addEventListener('click', () => {
//     document.getElementById('installSnackbar').classList.remove('show'); // Hide the install snackbar when close button is clicked
// });


// ------ second version with click effect:


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

// document.getElementById('actionButton').addEventListener('click', () => {
//     const processingIndicator = document.getElementById('processingIndicator');
//     processingIndicator.style.display = 'block';
//     setTimeout(() => {
//         processingIndicator.style.display = 'none';
//     }, 1000);

//     fetch('https://your-predefined-url.com/endpoint')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             document.getElementById('statusMessage').textContent = 'Gate is opening...';
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             document.getElementById('statusMessage').textContent = 'Failed to open the gate.';
//         });
// });


document.getElementById('actionButton').addEventListener('click', () => {
    const processingIndicator = document.getElementById('processingIndicator');
    const actionButtonIcon = document.querySelector('#actionButton i');

    // Show processing indicator
    processingIndicator.style.display = 'block';
    setTimeout(() => {
        processingIndicator.style.display = 'none';
    }, 1000);

    // Make the HTTP request
    fetch('https://your-predefined-url.com/endpoint')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // document.getElementById('statusMessage').textContent = 'Gate is opening...';

            // Change icon to checkmark on success
            actionButtonIcon.classList.remove('fa-unlock-alt');
            actionButtonIcon.classList.add('fa-check');
            setTimeout(() => {
                actionButtonIcon.classList.remove('fa-check');
                actionButtonIcon.classList.add('fa-unlock-alt');
            }, 3000);
        })
        .catch(error => {
            console.error('Error:', error);
            // document.getElementById('statusMessage').textContent = 'Failed to open the gate.';

            // Change icon to error on failure
            actionButtonIcon.classList.remove('fa-unlock-alt');
            actionButtonIcon.classList.add('fa-times');
            setTimeout(() => {
                actionButtonIcon.classList.remove('fa-times');
                actionButtonIcon.classList.add('fa-unlock-alt');
            }, 3000);
        });
});