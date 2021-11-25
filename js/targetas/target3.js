'use strict'

let slideIndex3 = 1;

showSlides3(slideIndex3);

function plusSlides3(n){
    showSlides3(slideIndex3 += n)
};

function currentSlide3(n){
    showSlides3(slideIndex3 = n)
};

function showSlides3(n){
    let i;
    let slides3 = document.querySelectorAll('.caja3');
    let span3 = document.querySelectorAll('.sp3');

    if(n > slides3.length) slideIndex3 = 1;
    if(n < 1) slideIndex3 = slides3.length;

    for(i = 0; i < slides3.length; i++){
        slides3[i].style.display = "none";
    };

    for(i = 0; i < span3.length; i++){
        span3[i].className = span3[i].className.replace("active","");
    };

    slides3[slideIndex3-1].style.display = "block";
    span3[slideIndex3-1].className += "active";
};