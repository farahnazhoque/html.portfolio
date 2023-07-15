window.addEventListener('resize', adjustLine2);
window.addEventListener('load', adjustLine2);

function adjustLine2() {
    var line2 = document.querySelector('.line2');
    var imageContainer = document.querySelector('.image-container');

    // Set the height of line2 to the top position of the image container
    line2.style.height = imageContainer.getBoundingClientRect().top + '50px';
}
