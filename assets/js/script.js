document.addEventListener('scroll', function () {
    var hiddenElement = document.getElementById('bubbleContainer');

    if (window.scrollY > window.innerHeight / 3) {
        // Current scroll is greater than the window height
        hiddenElement.style.display = 'block'; // Show the element
    } else {
        hiddenElement.style.display = 'none'; // Hide the element
    }
});
