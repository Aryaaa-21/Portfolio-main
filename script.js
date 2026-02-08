// --- Vanta Background Initialization ---
document.addEventListener("DOMContentLoaded", function () {
    try {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff004f,
            backgroundColor: 0x0c0c0c,
            points: 6.00,
            maxDistance: 22.00,
            spacing: 25.00
        });
    } catch (error) {
        console.log("Vanta JS failed to load (check internet or adblocker):", error);
    }
});

const cursor = document.querySelector('.cursor');
if (window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener('mousemove', (e) => {
        // 1. Move the Main Cursor
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // 2. Create the Trail Effect
        createTrail(e.clientX, e.clientY);
    });
    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 500);
    }

    document.addEventListener('mousedown', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
}


function openTab(evt, tabName) {
    var i, tabContent, tabBtns;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active-content");
    }

    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].className = tabBtns[i].className.replace(" active", "");
    }

    var selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";

    setTimeout(() => {
        selectedTab.classList.add("active-content");
    }, 10);

    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("education").style.display = "block";
    var typed = new Typed(".auto-type", {
        strings: ["Arya Bhagat", " A Learner", "A Creator", "A Developer", "A Dreamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});




/* --- FEEDBACK SECTION LOGIC --- */
document.addEventListener("DOMContentLoaded", function () {
    const serviceID = "service_ddnjx7z";
    const templateID = "template_y0p1ono";

    const form = document.getElementById('feedbackForm');
    const popup = document.getElementById('popup');
    const btn = document.getElementById('sendBtn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (btn) btn.innerText = "Sending...";

            // Ensure emailjs is loaded
            if (typeof emailjs !== 'undefined') {
                emailjs.sendForm(serviceID, templateID, form)
                    .then(() => {
                        if (btn) btn.innerText = "Send Message";
                        createHeartBurst();
                        if (popup) popup.classList.add('active');
                        form.reset();
                    }, (err) => {
                        if (btn) btn.innerText = "Send Message";
                        alert("Failed to send message. Error: " + JSON.stringify(err));
                    });
            } else {
                alert("EmailJS service not loaded.");
                if (btn) btn.innerText = "Send Message";
            }
        });
    }
});

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.classList.remove('active');
}

function createHeartBurst() {
    const heartCount = 30;
    const colors = ['❤️', '💖', '❤️', '❤️'];

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * Math.PI * 2;
        const velocity = 200 + Math.random() * 30;
        const tx = Math.cos(angle) * velocity + 'px';
        const ty = Math.sin(angle) * velocity + 'px';

        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);
        heart.style.left = (window.innerWidth / 2) + 'px';
        heart.style.top = (window.innerHeight / 2) + 'px';

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

/* --- GLOBAL LIGHTBOX LOGIC --- */
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    if (!lightbox || !lightboxImg) return;

    // Select all project and certificate images
    const images = document.querySelectorAll('.project-card img, .cert-card img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        img.style.cursor = 'pointer';
    });

    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && lightbox.classList.contains('show')) {
            closeLightbox();
        }
    });
});

/* --- NAVIGATION MENU LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Close menu on link click
    let navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // Scroll Spy (Optional: Highlight active link)
    let sections = document.querySelectorAll('section');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };
});


/* --- SCROLL REVEAL ANIMATION --- */
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
});

