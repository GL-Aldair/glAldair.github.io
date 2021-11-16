'use strict'

const nav = document.querySelector('.nav');
const x = document.querySelector('.x-btn');
const barra = document.querySelector('.bar-btn');

document.querySelector('.bar-btn').addEventListener('click', ()=> {
	nav.classList.add('activos')
	x.classList.add('activos')
	barra.classList.add('activos')
});

document.querySelector('.x-btn').addEventListener('click', ()=> {
	nav.classList.remove('activos')
	x.classList.remove('activos')
	barra.classList.remove('activos')
});


document.querySelector('.contacto').addEventListener('click', ()=> {
	nav.classList.remove('activos')
	x.classList.remove('activos')
	barra.classList.remove('activos')
});

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

function mostrar_menu(){
    nav.style.opacity = "1";
}

function ocultar_menu(){
    nav.style.opacity = "0";
    nav.classList.remove('activos')
	x.classList.remove('activos')
	barra.classList.remove('activos')
}