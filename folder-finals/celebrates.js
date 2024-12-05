const container = document.getElementById('button-container');
if (container) {
    container.appendChild(button);
} else {
    console.error('Container with ID "button-container" not found.');
}
const box1 = document.getElementById('box1');
if (box1) {
    box1.addEventListener('click', function() {
        window.location.href = 'alden.html';
    });
} else {
    console.error('Element with ID "box1" not found.');
}
// Redirect to different URLs when the respective images are clicked
const image2 = document.getElementById('box2');
if (image2) {
    image2.addEventListener('click', function() {
        window.location.href = 'alden.html';
    });
} else {
    console.error('Image with ID "image2" not found.');
}
const image3 = document.getElementById('image3');
if (image3) {
    image3.addEventListener('click', function() {
        window.location.href = 'https://www.example3.com';
    });
} else {
    console.error('Image with ID "image3" not found.');
}
const image4 = document.getElementById('image4');
if (image4) {
    image4.addEventListener('click', function() {
        window.location.href = 'https://www.example4.com';
    });
} else {
    console.error('Image with ID "image4" not found.');
}