document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            const response = await fetch("users.csv");
            const data = await response.text();
            const users = data.split("\n").map(line => line.split(","));

            const userExists = users.some(user => user[0] === username && user[1] === password);

            if (userExists) {
                alert("Login successful!");
                window.location.href = "HomePage.html";
            } else {
                alert("Account does not exist. Please register.");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;
            
            const response = await fetch("users.csv");
            const data = await response.text();
            const users = data.split("\n").map(line => line.split(","));
            
            if (users.some(user => user[0] === newUsername)) {
                alert("Username already exists!");
                return;
            }

            // Append new user to CSV (this requires a server-side script in reality)
            alert("Account created! Please login.");
            window.location.href = "Login.html";
        });
    }
});