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
