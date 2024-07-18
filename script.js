// script.js
document.addEventListener('mousemove', function(e) {
    const sparkleContainer = document.getElementById('sparkle-container');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.clientX - 5}px`;
    sparkle.style.top = `${e.clientY - 5}px`;

    sparkleContainer.appendChild(sparkle);

    // Remove the sparkle after the animation is done
    sparkle.addEventListener('animationend', function() {
        sparkleContainer.removeChild(sparkle);
    });
});
