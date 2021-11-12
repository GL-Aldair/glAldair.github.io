'use strict'

let slideIndex4 = 1;

showSlides4(slideIndex4);

function plusSlides4(n){
    showSlides4(slideIndex4 += n)
};

function currentSlide4(n){
    showSlides4(slideIndex4 = n)
};

function showSlides4(n){
    let i;
    let slides4 = document.querySelectorAll('.caja4');
    let span4 = document.querySelectorAll('.sp4');

    if(n > slides4.length) slideIndex4 = 1;
    if(n < 1) slideIndex4 = slides4.length;

    for(i = 0; i < slides4.length; i++){
        slides4[i].style.display = "none";
    };

    for(i = 0; i < span4.length; i++){
        span4[i].className = span4[i].className.replace("active","");
    };

    slides4[slideIndex4-1].style.display = "block";
    span4[slideIndex4-1].className += "active";
};