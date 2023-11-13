document.addEventListener("DOMContentLoaded", function () {
    window.onresize = showSlides;
    let slideIndex = 1;
    var slide_3 = globalThis.matchMedia("(min-width: 900px)");
    var slide_2 = globalThis.matchMedia("(min-width: 670px) and (max-width: 899px)");

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("card");

        if(slide_3.matches){

            if (n > slides.length - 2) {
                slideIndex = 1;
            }
    
            if (n < 1) {
                slideIndex = slides.length - 2;
            }
    
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
    
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex].style.display = "block";
            slides[slideIndex + 1].style.display = "block";

        } else if (slide_2.matches) {

            if (n > slides.length - 1) {
                slideIndex = 1;
            }
    
            if (n < 1) {
                slideIndex = slides.length - 1;
            }
    
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
    
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex].style.display = "block";
            slides[slideIndex + 1].style.display = "none";

        } else {
            if (n > slides.length) {
                slideIndex = 1;
            }
    
            if (n < 1) {
                slideIndex = slides.length;
            }
    
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
    
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex].style.display = "none";
            slides[slideIndex + 1].style.display = "none";
        }

    }

    // Llamar a las funciones al hacer clic en los botones
    document.querySelector('.prev').addEventListener('click', function () {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        plusSlides(1);
    });
});

