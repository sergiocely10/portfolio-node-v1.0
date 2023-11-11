/*

var items = document.getElementsByClassName("card");
var total_items = items.length;

function myFunction() {
    alert(total_items);
}
*/

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;

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
    }

    // Llamar a las funciones al hacer clic en los botones
    document.querySelector('.prev').addEventListener('click', function () {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        plusSlides(1);
    });
});

