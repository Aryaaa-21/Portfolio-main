document.addEventListener('DOMContentLoaded', () => {
    
    // --- USER CONFIGURATION: CHANGE THESE ---
    const serviceID = "service_ddnjx7z";   // Example: "service_xyz"
    const templateID = "template_y0p1ono"; // Example: "template_abc"
    // ----------------------------------------

    // 1. Initialize Vanta Background
    try {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true, touchControls: true, gyroControls: false,
            minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00,
            color: 0xff0000, backgroundColor: 0x050505,
            points: 12.00, maxDistance: 20.00, spacing: 16.00
        });
    } catch (e) { console.log("Vanta JS Error: ", e); }

    // 2. Custom Cursor Logic
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);
        setTimeout(() => { trail.remove(); }, 500);
    });
    document.addEventListener('mousedown', () => cursor.style.transform = "translate(-50%, -50%) scale(0.8)");
    document.addEventListener('mouseup', () => cursor.style.transform = "translate(-50%, -50%) scale(1)");

    // 3. Form Submission & EmailJS Logic
    const form = document.getElementById('feedbackForm');
    const popup = document.getElementById('popup');
    const btn = document.getElementById('sendBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop reload

        btn.innerText = "Sending..."; // Visual feedback

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                // SUCCESS: Reset Button, Trigger Hearts, Show Popup
                btn.innerText = "Send Message";
                createHeartBurst();
                popup.classList.add('active');
                form.reset();
            }, (err) => {
                // ERROR
                btn.innerText = "Send Message";
                alert("Failed to send message. Error: " + JSON.stringify(err));
            });
    });
});

// Function to close popup
function closePopup() {
    document.getElementById('popup').classList.remove('active');
}

// Function to create Heart Burst Animation
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