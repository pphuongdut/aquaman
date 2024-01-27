// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {
    var hiddenElement = document.getElementById('bubbleContainer');

    if (window.scrollY > window.innerHeight / 3) {
        // Current scroll is greater than the window height
        hiddenElement.style.display = 'block'; // Show the element
    } else {
        hiddenElement.style.display = 'none'; // Hide the element
    }

    // if (window.scrollY > window.innerHeight / 3) {
    //     var video = document.getElementById('aquaman_section_2');
    //     video.play();
    // }

    const elementToAnimate = document.querySelector('.hidden-element');

    if (isInViewport(elementToAnimate)) {
        elementToAnimate.style.display = 'block';
        elementToAnimate.classList.add(
            'animate__animated',
            'animate__slideInUp'
        );
    }
});
