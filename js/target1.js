'use strict'

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
};

function currentSlide(n){
    showSlides(slideIndex = n)
};

function showSlides(n){
    let i;
    let slides = document.querySelectorAll('.caja');
    let span = document.querySelectorAll('.sp');

    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    };

    for(i = 0; i < span.length; i++){
        span[i].className = span[i].className.replace("active","");
    };

    slides[slideIndex-1].style.display = "block";
    span[slideIndex-1].className += "active";
};