/* --- VANTA JS BACKGROUND --- */
// Ensure you have included three.min.js and vanta.net.min.js in your HTML
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
        color: 0xff0033,       // Matches your neon-red
        backgroundColor: 0x000000,
        points: 6.00,
        maxDistance: 22.00,
        spacing: 25.00
    });
} catch (error) {
    console.log("Vanta JS scripts not loaded correctly. Check HTML script tags.");
}


/* --- SLIDER LOGIC --- */
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});


/* --- CUSTOM CURSOR LOGIC --- */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    // 1. Move the main cursor circle
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.display = 'block'; // Ensure it shows when moving

    // 2. Create the trail effect
    createTrail(e.pageX, e.pageY);
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);

    trail.style.left = x + 'px';
    trail.style.top = y + 'px';

    // Remove the trail div after animation ends to prevent memory leaks
    setTimeout(() => {
        trail.remove();
    }, 500); // Matches the 0.5s animation duration in CSS
}

// Hide custom cursor when leaving window
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
});