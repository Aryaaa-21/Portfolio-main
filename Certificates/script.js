document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. VANTA JS BACKGROUND ---
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
            color: 0xff0033,        
            backgroundColor: 0x050505, 
            points: 10.00,
            maxDistance: 22.00,
            spacing: 18.00,
            showDots: true
        });
    } catch (e) {
        console.error("Vanta JS failed to load. Ensure scripts are in HTML head.", e);
    }

    // --- 2. CUSTOM NEON CURSOR ---
    const cursor = document.querySelector('.cursor');
        if (window.matchMedia("(pointer: fine)").matches) {
        cursor.style.display = 'block';

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            createTrail(e.clientX, e.clientY);
        });
    }

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        document.body.appendChild(trail);
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';

        setTimeout(() => {
            trail.remove();
        }, 500);
    }

    // --- 3. CAROUSEL & CONTENT LOGIC ---
    const cards = document.querySelectorAll(".card");
    const upBtn = document.getElementById("up-btn");
    const downBtn = document.getElementById("down-btn");
    const titleEl = document.getElementById("member-name");
    const roleEl = document.getElementById("member-role");
    const dotsContainer = document.getElementById("dots-container");
    const infoContent = document.querySelector(".info-content");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const cardData = [
        { title: "All My Certificates", desc: "After College" },
        { title: "My First Hackathon", desc: "Got 13th Rank" },
        { title: "Skill Up Certificate", desc: "Got After learning frontend" },
        { title: "Cisco Certificate", desc: "Data Science " },
        { title: "IIC Regional Meet", desc: "Student Volunteer Certificate" },
        { title: "Celo Workshop", desc: "On 29th October" },
        { title: "Cultural Event", desc: "Participation Certificate" }
    ];
    let currentIndex = 0;
    let isAnimating = false;

    // A. Create Dots
    cardData.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        
        dot.addEventListener("click", () => {
            if (!isAnimating && index !== currentIndex) {
                changeCard(index);
            }
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    // B. Update Stack Visuals
    function updateStack() {
        cards.forEach((card, index) => {
            card.classList.remove("prev", "active", "next", "next-2", "hidden", "hidden-top");

            const diff = index - currentIndex;

            if (diff === 0) {
                card.classList.add("active");
            } 
            else if (diff === -1) {
                card.classList.add("prev");
            } 
            else if (diff === 1) {
                card.classList.add("next");
            } 
            else if (diff === 2) {
                card.classList.add("next-2");
            } 
            else if (diff < -1) {
                card.classList.add("hidden-top");
            } 
            else {
                card.classList.add("hidden");
            }
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentIndex);
        });
    }

    // C. Change Card Logic
    function changeCard(newIndex) {
        if (isAnimating) return;
        isAnimating = true;

        infoContent.classList.add("fade-out");

        currentIndex = newIndex;
        updateStack();
        setTimeout(() => {
            if (cardData[currentIndex]) {
                titleEl.textContent = cardData[currentIndex].title;
                roleEl.textContent = cardData[currentIndex].desc;
            }
            infoContent.classList.remove("fade-out");
        }, 250); 

        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    // D. Button Listeners
    downBtn.addEventListener("click", () => {
        if (currentIndex < cards.length - 1) {
            changeCard(currentIndex + 1);
        }
    });

    upBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            changeCard(currentIndex - 1);
        }
    });

    // E. Lightbox Logic
    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (card.classList.contains("active")) {
                const img = card.querySelector("img");
                if(img) {
                    lightboxImg.src = img.src;
                    lightbox.classList.add("show");
                }
            }
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("show");
    }

    closeBtn.addEventListener("click", closeLightbox);
    
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    updateStack();
});