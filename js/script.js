document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || isLoggedIn !== "true") {
        window.location.href = "./../html/login.html";
    }

    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {

            localStorage.removeItem("isLoggedIn");

            window.location.href = "./../html/login.html";
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            var header = document.querySelector('header');
            if (header.style.transform === 'translateY(-100%)') {
                header.style.transform = 'translateY(0)';
            } else {
                header.style.transform = 'translateY(-100%)';
            }
        }
    });
});
