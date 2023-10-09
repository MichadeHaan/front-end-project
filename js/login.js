document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === "gebruiker" && password === "wachtwoord") {
                alert("Inloggen gelukt!");
                window.location.href = "./../index.html";
            } else {
                alert("Inloggen mislukt. Controleer je gebruikersnaam en wachtwoord.");
            }
        });
    }
});