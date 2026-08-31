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


/* =====================================================
   WHATSAPP ENQUIRY FORM
===================================================== */

const enquiryForm = document.getElementById("whatsappEnquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const company =
            document.getElementById("company").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const machine =
            document.getElementById("machine").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const whatsappMessage =
`Hello Yogesh Engineering Services,

I would like to enquire about your engineering services.

Name: ${name}
Company: ${company || "Not provided"}
Phone: ${phone}
Email: ${email || "Not provided"}

Service Required:
${service}

Machine / Equipment:
${machine || "Not provided"}

Requirement:
${message}

Thank you.`;


        /*
         * Replace this number with
         * the company's actual WhatsApp number.
         *
         * Format:
         * 91 7972219776
         */

        const whatsappNumber = "91 7972219776";


        const whatsappURL =
            `https://wa.me/${ 7972219776}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappURL, "_blank");

    });

}
