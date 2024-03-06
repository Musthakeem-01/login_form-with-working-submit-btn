document.addEventListener('DOMContentLoaded', function () {
    const credentials = [
        {
            "name": "musthakeem",
            "password": "allah"
        },
        {
            "name": "afreen",
            "password": "allah"
        }
    ];

    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const usernameInput = document.querySelector('input[type="text"]');
        const passwordInput = document.querySelector('input[type="password"]');

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if the entered credentials match any of the hardcoded credentials
        const matchedCredential = credentials.find(cred => cred.name === username && cred.password === password);

        if (matchedCredential) {
            // If credentials match, redirect to a new page
            window.location.href = 'demo.html'; // Replace 'dashboard.html' with your desired page
        } else {
            // If credentials don't match, display an error message
            alert('Invalid username or password');
        }
    });
});
