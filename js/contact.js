document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || isLoggedIn !== "true") {
        window.location.href = "./html/login.html";
    }

    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {

            localStorage.removeItem("isLoggedIn");

            window.location.href = "./html/login.html";
        });
    }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const bericht = document.getElementById("bericht").value;

    fetch("./php/jouw-server-script.php", {
        method: "POST",
        body: JSON.stringify({ email, bericht }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.");
        } else {
            alert("Er is een fout opgetreden. Probeer het later opnieuw.");
        }
    });
});