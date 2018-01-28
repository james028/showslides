var slideIndex = 1;

function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
showSlides();
function showSlides() {
    console.log("go");
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");


    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");

    setTimeout(showSlides, 5000);
}