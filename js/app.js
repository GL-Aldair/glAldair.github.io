'use strict'

const bar = document.getElementById('bar-X');
const hamburguer = document.getElementById('bar-Y');
const header = document.querySelector('.header');

document.getElementById('bar-Y').addEventListener('click', ()=>{
    bar.classList.add('active');
    hamburguer.classList.remove('active');
    header.classList.add('active');
});
document.getElementById('bar-X').addEventListener('click', ()=>{
    bar.classList.remove('active');
    hamburguer.classList.add('active');
    header.classList.remove('active');
});
document.querySelector('.header').addEventListener('click', ()=>{
    bar.classList.remove('active');
    hamburguer.classList.add('active');
    header.classList.remove('active');
});