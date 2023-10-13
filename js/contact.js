document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || isLoggedIn !== "true") {
        window.location.href = "./../html/login.html";
    }

    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {

            localStorage.removeItem("isLoggedIn");

            window.location.href = "./html/login.html";
        });
    }
});
