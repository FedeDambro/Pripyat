function changeSlide(n, sliderClass) {
    let slides = document.querySelectorAll(`.${sliderClass} .image-slide`);
    let slideIndex = parseInt(document.querySelector(`.${sliderClass}`).getAttribute('data-slide'));

    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    document.querySelector(`.${sliderClass}`).setAttribute('data-slide', slideIndex);
}

document.addEventListener("DOMContentLoaded", function() {
    let sliders = document.querySelectorAll(".image-slider");
    sliders.forEach(slider => {
        let sliderClass = slider.classList[1]; // Assicurati che questa sia la classe corretta per il tuo slider
        slider.setAttribute('data-slide', '0');
        showSlides(0, sliderClass); // Inizializza ogni slider individualmente
    });
});

function showSlides(n, sliderClass) {
    let slides = document.querySelectorAll(`.${sliderClass} .image-slide`);
    if (n >= slides.length) { n = 0; }
    if (n < 0) { n = slides.length - 1; }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[n].style.display = "block";
}
