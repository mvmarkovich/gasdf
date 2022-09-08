let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const sliders = new Swiper('.products__carousel', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
        prevEl: '.products .carousel-btn-prev',
        nextEl: '.products .carousel-btn-next'
    },

    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        568: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1048: {
            slidesPerView: 5
        }

    }
});