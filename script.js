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
