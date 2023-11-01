document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();


        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "gebruiker" && password === "wachtwoord") {
            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "/stag%20front-end-project/index.html";
        } else {
            alert("Ongeldige gebruikersnaam of wachtwoord. Probeer opnieuw.");
        }
    });
});