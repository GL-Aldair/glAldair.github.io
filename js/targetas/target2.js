'use strict'

let slideIndex2 = 1;

showSlides2(slideIndex2);

function plusSlides2(n){
    showSlides2(slideIndex2 += n)
};

function currentSlide2(n){
    showSlides2(slideIndex2 = n)
};

function showSlides2(n){
    let i;
    let slides2 = document.querySelectorAll('.caja2');
    let span2 = document.querySelectorAll('.sp2');

    if(n > slides2.length) slideIndex2 = 1;
    if(n < 1) slideIndex2 = slides2.length;

    for(i = 0; i < slides2.length; i++){
        slides2[i].style.display = "none";
    };

    for(i = 0; i < span2.length; i++){
        span2[i].className = span2[i].className.replace("active","");
    };

    slides2[slideIndex2-1].style.display = "block";
    span2[slideIndex2-1].className += "active";
};