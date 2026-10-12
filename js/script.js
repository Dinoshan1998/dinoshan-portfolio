/* =========================================
   DOM ELEMENTS
========================================= */

const body = document.body;

const themeToggle =
    document.getElementById("theme-toggle");

const menuToggle =
    document.getElementById("menu-toggle");

const mobileMenu =
    document.getElementById("mobile-menu");

const year =
    document.getElementById("year");


/* =========================================
   CURRENT YEAR
========================================= */

year.textContent =
    new Date().getFullYear();


/* =========================================
   THEME TOGGLE
========================================= */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    const icon =
        themeToggle.querySelector("i");

    if (body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light-mode");

    const icon =
        themeToggle.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}


/* =========================================
   MOBILE MENU
========================================= */

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("show");

    const icon =
        menuToggle.querySelector("i");

    if (mobileMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const mobileLinks =
    mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("show");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");


document.addEventListener(
    "mousemove",
    (event) => {

        cursor.style.left =
            `${event.clientX}px`;

        cursor.style.top =
            `${event.clientY}px`;


        cursorDot.style.left =
            `${event.clientX}px`;

        cursorDot.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================
   CURSOR HOVER EFFECT
========================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card, .skill-card"
    );


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.style.width = "55px";

        cursor.style.height = "55px";

    });


    element.addEventListener("mouseleave", () => {

        cursor.style.width = "35px";

        cursor.style.height = "35px";

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-grid, .skill-card, .project-card, .timeline-item, .contact-box"
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   NAV ACTIVE LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual =
    document.querySelector(".hero-visual");


document.addEventListener(
    "mousemove",
    (event) => {

        if (
            window.innerWidth <= 700 ||
            !heroVisual
        ) return;


        const x =
            (window.innerWidth / 2 -
            event.clientX) / 60;


        const y =
            (window.innerHeight / 2 -
            event.clientY) / 60;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* =========================================
   PROJECT CARD TILT
========================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 700)
                return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -3;


            const rotateY =
                ((x - centerX) / centerX) * 3;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});