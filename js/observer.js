'use strict'

const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
const imagen5 = document.getElementById('imagen5');

const cargarImagen = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);
observador.observe(imagen5);