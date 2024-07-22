const colors = ['pink', 'blue', 'yellow', 'green', 'orange', 'purple', 'red', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet', 'brown', 'gold'];

// Function to get a random number within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a random color from the colors array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('mousemove', function(e) {
    const sparkleContainer = document.getElementById('sparkle-container');
    
    // Create multiple sparkles for an interesting effect
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random initial position offset
        const offsetX = getRandomInt(-10, 10);
        const offsetY = getRandomInt(-10, 10);
        sparkle.style.left = `${e.clientX + offsetX}px`;
        sparkle.style.top = `${e.clientY + offsetY}px`;
        
        // Random animation directions
        sparkle.style.setProperty('--x', getRandomInt(-100, 100));
        sparkle.style.setProperty('--y', getRandomInt(-100, 100));
        
        // Random colors for radial gradient
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        sparkle.style.background = `radial-gradient(circle, ${color1} 60%, ${color2} 0%)`;

        sparkleContainer.appendChild(sparkle);

        // Remove the sparkle after the animation is done
        sparkle.addEventListener('animationend', function() {
            sparkleContainer.removeChild(sparkle);
        });
    }
});
