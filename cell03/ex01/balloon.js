const balloon = document.getElementById('balloon');
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

function changeColor(reverse = false) {
    if (reverse) {
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
    }
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', () => {
    size += 10;
    if (size > 420) {
        size = 200; // Explode and return to original size
    } else {
        changeColor();
    }
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
});

balloon.addEventListener('mouseleave', () => {
    if (size > 200) {
        size -= 5;
        changeColor(true); // Change color in reverse order
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;
    }
});