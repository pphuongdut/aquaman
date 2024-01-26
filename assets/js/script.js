document.addEventListener('scroll', function () {
    var hiddenElement = document.getElementById('bubbleContainer');

    if (window.scrollY > window.innerHeight / 3) {
        // Current scroll is greater than the window height
        hiddenElement.style.display = 'block'; // Show the element
    } else {
        hiddenElement.style.display = 'none'; // Hide the element
    }

    // scroll to section 2 => visible aquaman_section_2, settimout 3s to hide

    if (window.scrollY > window.innerHeight / 3) {
        console.log(document.getElementById('aquaman_section_2'));
        // Show aquaman section 2
        document.getElementById('aquaman_section_2').style.display = 'block';

        // Hide after 3 seconds
        setTimeout(() => {
            document.getElementById('aquaman_section_2').style.display = 'none';
        }, 2800);
    }

    // scroll to section-3 with id section-3 => add class animate__animated  to aquaman_section_3, aquaman_section_3_text
    const section3 = document.getElementById('section-3');
    const section3_text = document.getElementById('aquaman_section_3_text');
    const aquaman_section_3 = document.getElementById('aquaman_section_3');

    if (window.scrollY > section3?.offsetTop - window.innerHeight / 2) {
        section3_text.classList.add('animate__animated');
        aquaman_section_3.classList.add('animate__animated');
    }
});
