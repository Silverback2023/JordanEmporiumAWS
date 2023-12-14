document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const toggleButton = document.getElementById("toggle-btn");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Perform signup logic here
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Example: Log the signup data to the console
        console.log("Signup Data:", { username, email, password });

        // You can add your signup logic, like sending the data to a server, here
    });

    toggleButton.addEventListener("click", function () {
        // Toggle visibility of sign-up and login forms
        signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
        loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";

        // Toggle the button text based on the current state
        if (signupForm.style.display === "block") {
            toggleButton.textContent = "Already have an account? Login";
        } else {
            toggleButton.textContent = "Don't have an account? Sign Up";
        }
    });
});
