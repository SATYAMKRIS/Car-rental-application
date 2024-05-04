// // script.js

// // Function to handle login form submission
// function handleLoginFormSubmission(event) {
//     event.preventDefault(); // Prevent default form submission behavior
    
//     // Get form data
//     const formData = new FormData(event.target);
//     const username = formData.get('username');
//     const password = formData.get('password');
    
//     // Perform login validation (this is just a mock implementation)
//     if (username === 'admin' && password === 'password') {
//         alert('Login successful!');
//         // Redirect to the home page (replace 'index.html' with the actual filename)
//         window.location.href = 'index.html';
//     } else {
//         alert('Invalid username or password. Please try again.');
//     }
// }

// // Function to handle signup form submission
// function handleSignupFormSubmission(event) {
//     event.preventDefault(); // Prevent default form submission behavior
    
//     // Get form data
//     const formData = new FormData(event.target);
//     const username = formData.get('username');
//     const password = formData.get('password');
//     const confirmPassword = formData.get('confirm-password');
    
//     // Perform signup validation (this is just a mock implementation)
//     if (password === confirmPassword) {
//         alert('Signup successful!');
//         // Redirect to the login page (replace 'login.html' with the actual filename)
//         window.location.href = 'login.html';
//     }
// }
   
// Script.js

function validateLoginForm() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}

function validateSignupForm() {
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Email validation
    if (!validateEmail(email)) {
        alert("Invalid email address.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
