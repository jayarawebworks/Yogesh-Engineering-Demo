/* =========================================================
   YOGESH ENGINEERING SERVICES
   NAVBAR JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");


    if (!menuButton || !mobileMenu) return;


    /* -----------------------------------------
       OPEN / CLOSE MOBILE MENU
    ----------------------------------------- */

    function toggleMenu() {

        const isOpen = mobileMenu.classList.contains("open");

        if (isOpen) {

            mobileMenu.classList.remove("open");
            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation"
            );

            document.body.style.overflow = "";

        } else {

            mobileMenu.classList.add("open");
            menuButton.classList.add("active");

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            menuButton.setAttribute(
                "aria-label",
                "Close navigation"
            );

            document.body.style.overflow = "hidden";
        }
    }


    menuButton.addEventListener("click", toggleMenu);


    /* -----------------------------------------
       CLOSE MENU AFTER CLICKING A LINK
    ----------------------------------------- */

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");
            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.style.overflow = "";

        });

    });


    /* -----------------------------------------
       ESCAPE KEY
    ----------------------------------------- */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("open")
        ) {
            toggleMenu();
        }

    });


    /* -----------------------------------------
       CLOSE MENU IF SCREEN BECOMES DESKTOP
    ----------------------------------------- */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            mobileMenu.classList.remove("open");
            menuButton.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});
