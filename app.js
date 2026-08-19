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

    if (loader) {
        loader.classList.add("hidden");
    }

    document.body.classList.remove(
        "no-scroll"
    );

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

/* =================================
   CINEMATIC GALLERY
================================= */

.luxury-gallery {
    padding: 140px 7vw;

    background: #e8e1d5;

    color: var(--black);
}


.gallery-top {
    display: grid;

    grid-template-columns: 1.2fr 0.8fr;

    gap: 80px;

    align-items: end;

    margin-bottom: 70px;
}


.gallery-top h2 {
    margin-top: 20px;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(60px, 8vw, 115px);

    font-weight: 500;

    line-height: 0.83;

    letter-spacing: -3px;
}


.gallery-top h2 em {
    color: var(--gold);

    font-style: italic;
}


.gallery-intro {
    max-width: 350px;

    color: var(--muted);

    font-size: 13px;

    line-height: 2;
}


/* Gallery grid */

.gallery-grid {
    display: grid;

    grid-template-columns:
        1.3fr 0.7fr 0.7fr;

    grid-auto-rows: 330px;

    gap: 14px;
}


.gallery-item {
    position: relative;

    min-width: 0;

    padding: 0;

    border: 0;

    overflow: hidden;

    background: transparent;

    cursor: pointer;

    text-align: left;
}


.gallery-item-large {
    grid-row: span 2;
}


.gallery-item-wide {
    grid-column: span 2;
}


.gallery-scene {
    position: absolute;

    inset: 0;

    overflow: hidden;

    display: flex;

    align-items: flex-end;

    padding: 25px;

    color: white;

    transition:
        transform 0.8s
        cubic-bezier(.2,.8,.2,1);
}


.gallery-item:hover
.gallery-scene {
    transform: scale(1.045);
}


.gallery-scene::before {
    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 45%,
            rgba(0,0,0,0.75)
        );

    z-index: 1;
}


.gallery-scene::after {
    content: "";

    position: absolute;

    width: 70%;

    height: 1px;

    left: 15%;

    top: 43%;

    background:
        rgba(255,255,255,0.15);

    box-shadow:
        0 70px 0 rgba(255,255,255,0.08),
        0 140px 0 rgba(255,255,255,0.05);

    transform:
        rotate(-8deg);

    transition:
        transform 0.8s ease;
}


.gallery-item:hover
.gallery-scene::after {
    transform:
        rotate(-8deg)
        translateX(25px);
}


/* Scene 01 */

.scene-01 {
    background:
        radial-gradient(
            circle at 70% 20%,
            rgba(183,154,101,0.5),
            transparent 25%
        ),
        linear-gradient(
            140deg,
            #776d5d,
            #292720 55%,
            #0e0d0b
        );
}


/* Scene 02 */

.scene-02 {
    background:
        radial-gradient(
            circle at 30% 25%,
            rgba(220,210,187,0.32),
            transparent 24%
        ),
        linear-gradient(
            125deg,
            #6b6253,
            #39342c 48%,
            #171511
        );
}


/* Scene 03 */

.scene-03 {
    background:
        radial-gradient(
            circle at 70% 65%,
            rgba(183,154,101,0.4),
            transparent 20%
        ),
        linear-gradient(
            145deg,
            #474238,
            #201e18 55%,
            #0b0b09
        );
}


/* Scene 04 */

.scene-04 {
    background:
        radial-gradient(
            circle at 20% 20%,
            rgba(255,255,255,0.18),
            transparent 25%
        ),
        linear-gradient(
            150deg,
            #7c7567,
            #3b362d 50%,
            #12110e
        );
}


/* Scene 05 */

.scene-05 {
    background:
        radial-gradient(
            circle at 65% 25%,
            rgba(183,154,101,0.3),
            transparent 25%
        ),
        linear-gradient(
            135deg,
            #524d43,
            #29261f 50%,
            #11100d
        );
}


/* Scene 06 */

.scene-06 {
    background:
        radial-gradient(
            circle at 55% 45%,
            rgba(183,154,101,0.28),
            transparent 20%
        ),
        linear-gradient(
            160deg,
            #363128,
            #151411 60%,
            #080807
        );
}


.scene-number {
    position: absolute;

    z-index: 3;

    top: 20px;
    left: 20px;

    font-size: 8px;

    letter-spacing: 2px;

    color:
        rgba(255,255,255,0.6);
}


.scene-title {
    position: relative;

    z-index: 3;

    font-size: 9px;

    letter-spacing: 3px;
}


.scene-arrow {
    position: absolute;

    z-index: 3;

    right: 20px;
    bottom: 18px;

    width: 40px;
    height: 40px;

    display: flex;

    align-items: center;
    justify-content: center;

    border:
        1px solid
        rgba(255,255,255,0.35);

    font-size: 15px;

    transition:
        background 0.3s ease,
        color 0.3s ease;
}


.gallery-item:hover
.scene-arrow {
    background: var(--gold);

    color: var(--black);

    border-color: var(--gold);
}


/* =================================
   LIGHTBOX
================================= */

.gallery-lightbox {
    position: fixed;

    inset: 0;

    z-index: 6000;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 40px;

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transition:
        opacity 0.4s ease,
        visibility 0.4s ease;
}


.gallery-lightbox.open {
    opacity: 1;

    visibility: visible;

    pointer-events: auto;
}


.lightbox-backdrop {
    position: absolute;

    inset: 0;

    background:
        rgba(8,7,6,0.95);

    backdrop-filter:
        blur(15px);
}


.lightbox-content {
    position: relative;

    z-index: 2;

    width: min(1100px, 88vw);

    max-height: 90vh;

    display: grid;

    grid-template-columns: 1fr 280px;

    background: #171512;

    color: white;

    box-shadow:
        0 40px 120px
        rgba(0,0,0,0.7);

    transform:
        scale(0.96)
        translateY(20px);

    transition:
        transform 0.45s
        cubic-bezier(.2,.8,.2,1);
}


.gallery-lightbox.open
.lightbox-content {
    transform:
        scale(1)
        translateY(0);
}


.lightbox-visual {
    min-height: 650px;

    background:
        linear-gradient(
            140deg,
            #6c6354,
            #29251e 50%,
            #0d0c0a
        );

    position: relative;

    overflow: hidden;
}


.lightbox-visual::before {
    content: "";

    position: absolute;

    width: 120%;

    height: 1px;

    top: 42%;
    left: -10%;

    background:
        rgba(255,255,255,0.15);

    box-shadow:
        0 80px 0 rgba(255,255,255,0.09),
        0 160px 0 rgba(255,255,255,0.06);

    transform: rotate(-10deg);
}


.lightbox-visual::after {
    content: "";

    position: absolute;

    width: 1px;

    height: 120%;

    top: -10%;
    left: 48%;

    background:
        rgba(255,255,255,0.1);

    box-shadow:
        100px 0 0 rgba(255,255,255,0.07),
        200px 0 0 rgba(255,255,255,0.04);

    transform: rotate(12deg);
}


.lightbox-caption {
    padding: 45px 30px;

    display: flex;

    flex-direction: column;

    justify-content: flex-end;
}


.lightbox-caption > span {
    color: var(--gold);

    font-size: 8px;

    letter-spacing: 3px;
}


.lightbox-caption h3 {
    margin: 14px 0;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size: 42px;

    font-weight: 500;

    line-height: 0.95;
}


.lightbox-caption p {
    color: #89847b;

    font-size: 11px;

    line-height: 1.9;
}


.lightbox-close {
    position: absolute;

    z-index: 5;

    top: 25px;
    right: 25px;

    width: 45px;
    height: 45px;

    border:
        1px solid
        rgba(255,255,255,0.3);

    border-radius: 50%;

    background:
        rgba(0,0,0,0.3);

    color: white;

    font-size: 25px;

    cursor: pointer;

    transition: 0.3s ease;
}


.lightbox-close:hover {
    background: var(--gold);

    color: var(--black);

    border-color: var(--gold);

    transform: rotate(90deg);
}


.lightbox-control {
    position: absolute;

    z-index: 5;

    top: 50%;

    transform: translateY(-50%);

    width: 50px;
    height: 50px;

    border:
        1px solid
        rgba(255,255,255,0.25);

    border-radius: 50%;

    background:
        rgba(0,0,0,0.35);

    color: white;

    cursor: pointer;

    font-size: 18px;

    transition: 0.3s ease;
}


.lightbox-control:hover {
    background: var(--gold);

    color: var(--black);

    border-color: var(--gold);
}


.lightbox-prev {
    left: 25px;
}


.lightbox-next {
    right: 25px;
}


/* =================================
   GALLERY MOBILE
================================= */

@media (max-width: 800px) {

    .luxury-gallery {
        padding: 100px 6vw;
    }


    .gallery-top {
        grid-template-columns: 1fr;

        gap: 30px;
    }


    .gallery-grid {
        grid-template-columns: 1fr 1fr;

        grid-auto-rows: 250px;
    }


    .gallery-item-large {
        grid-row: span 2;
    }


    .gallery-item-wide {
        grid-column: span 2;
    }


    .lightbox-content {
        width: 90vw;

        grid-template-columns: 1fr;

        overflow-y: auto;

        max-height: 88vh;
    }


    .lightbox-visual {
        min-height: 400px;
    }


    .lightbox-caption {
        padding: 30px;
    }


    .lightbox-prev {
        left: 8px;
    }


    .lightbox-next {
        right: 8px;
    }

}


@media (max-width: 500px) {

    .gallery-grid {
        grid-template-columns: 1fr;

        grid-auto-rows: 260px;
    }


    .gallery-item-large,
    .gallery-item-wide {
        grid-row: auto;

        grid-column: auto;
    }


    .gallery-top h2 {
        font-size: 60px;
    }


    .lightbox-visual {
        min-height: 300px;
    }


    .lightbox-caption h3 {
        font-size: 35px;
    }

}
