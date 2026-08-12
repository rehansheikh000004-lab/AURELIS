/* =========================================================
   AURELIS
   COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTS
    ========================= */

    const loader = document.getElementById("loader");

    const header = document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    const navLinks =
        document.querySelectorAll(".main-nav a");

    const revealElements =
        document.querySelectorAll(".reveal");

    const philosophy =
        document.querySelector(".philosophy");


    /* =========================
       BODY LOCK
    ========================= */

    document.body.classList.add("no-scroll");


    /* =========================
       LOADER
    ========================= */

    window.addEventListener("load", function () {

        setTimeout(function () {

            if (loader) {
                loader.classList.add("hidden");
            }

            document.body.classList.remove("no-scroll");

        }, 1700);

    });


    /* =========================
       HEADER SCROLL
    ========================= */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =========================
       MOBILE MENU
    ========================= */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener(
            "click",
            function () {

                const open =
                    mainNav.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    open ? "true" : "false"
                );

            }
        );

    }


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (mainNav) {

                    mainNav.classList.remove("open");

                }

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (mainNav) {
                    mainNav.classList.remove("open");
                }

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =========================
       SCROLL REVEAL
    ========================= */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries, observerInstance) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add("visible");

            }
        );

    }


    /* =========================
       SMOOTH SCROLL
    ========================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(targetId);


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }
    );


    /* =========================
       PHILOSOPHY MOUSE EFFECT
    ========================= */

    if (
        philosophy &&
        window.matchMedia(
            "(min-width: 900px)"
        ).matches
    ) {

        philosophy.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    philosophy.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const moveX =
                    (x / rect.width - 0.5) * 18;


                const moveY =
                    (y / rect.height - 0.5) * 18;


                philosophy.style.setProperty(
                    "--mouse-x",
                    moveX + "px"
                );


                philosophy.style.setProperty(
                    "--mouse-y",
                    moveY + "px"
                );

            }
        );


        philosophy.addEventListener(
            "mouseleave",
            function () {

                philosophy.style.setProperty(
                    "--mouse-x",
                    "0px"
                );

                philosophy.style.setProperty(
                    "--mouse-y",
                    "0px"
                );

            }
        );

    }


    /* =========================
       RESIZE
    ========================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 700 &&
                mainNav
            ) {

                mainNav.classList.remove(
                    "open"
                );

            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


});

/* =================================
   PROPERTY EXPLORER
================================= */

const propertyModal =
    document.getElementById("propertyModal");

const propertyModalBackdrop =
    document.getElementById(
        "propertyModalBackdrop"
    );

const propertyClose =
    document.getElementById("propertyClose");


const propertyName =
    document.getElementById("propertyName");

const propertyLocation =
    document.getElementById("propertyLocation");

const propertyPrice =
    document.getElementById("propertyPrice");

const propertyDescription =
    document.getElementById(
        "propertyDescription"
    );

const propertyBeds =
    document.getElementById("propertyBeds");

const propertyBaths =
    document.getElementById("propertyBaths");

const propertyArea =
    document.getElementById("propertyArea");

const propertyCollection =
    document.getElementById(
        "propertyCollection"
    );


const properties = [

    {
        name: "Casa Aurelia",

        location:
            "ALIBAUG · MAHARASHTRA",

        price:
            "₹18.5 Cr",

        beds:
            "5",

        baths:
            "6",

        area:
            "6,800",

        collection:
            "AURELIS COLLECTION",

        description:
            "A private architectural residence created around natural light, expansive spaces and a seamless connection with nature."
    },


    {
        name: "Villa Solenne",

        location:
            "GOA · INDIA",

        price:
            "₹12.8 Cr",

        beds:
            "4",

        baths:
            "5",

        area:
            "5,200",

        collection:
            "PRIVATE COLLECTION",

        description:
            "A refined coastal retreat where contemporary architecture meets tropical landscapes, privacy and effortless indoor-outdoor living."
    },


    {
        name: "Maison No. 07",

        location:
            "MUMBAI · MAHARASHTRA",

        price:
            "₹24.5 Cr",

        beds:
            "3",

        baths:
            "4",

        area:
            "4,100",

        collection:
            "URBAN COLLECTION",

        description:
            "A sophisticated urban residence designed around quiet interiors, sculptural architecture and exceptional city living."
    }

];


const residenceCards =
    document.querySelectorAll(
        ".residence-card"
    );


function openProperty(index) {

    const property =
        properties[index];

    if (!property || !propertyModal) {
        return;
    }


    propertyName.textContent =
        property.name;

    propertyLocation.textContent =
        property.location;

    propertyPrice.textContent =
        property.price;

    propertyDescription.textContent =
        property.description;

    propertyBeds.textContent =
        property.beds;

    propertyBaths.textContent =
        property.baths;

    propertyArea.textContent =
        property.area;

    propertyCollection.textContent =
        property.collection;


    propertyModal.classList.add(
        "open"
    );

    propertyModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeProperty() {

    if (!propertyModal) {
        return;
    }


    propertyModal.classList.remove(
        "open"
    );

    propertyModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


residenceCards.forEach(
    function (card, index) {

        card.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openProperty(index);

            }
        );

    }
);


if (propertyClose) {

    propertyClose.addEventListener(
        "click",
        closeProperty
    );

}


if (propertyModalBackdrop) {

    propertyModalBackdrop.addEventListener(
        "click",
        closeProperty
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            propertyModal &&
            propertyModal.classList.contains(
                "open"
            )
        ) {

            closeProperty();

        }

    }
);
