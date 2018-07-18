var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("hidden");
    var quote = document.getElementsByClassName("quote");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        quote[i].className = quote[i].className.replace(" active", "");

    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block";
    quote[slideIndex-1].className += " active";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}