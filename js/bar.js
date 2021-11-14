'use strict'

const padre = document.querySelector('.padre');
const equis = document.querySelector('.x-2');
const barra2 = document.querySelector('.bar-2');

document.querySelector('.bar-2').addEventListener('click', ()=> {
	padre.classList.add('activar')
	equis.classList.add('activar')
	barra2.classList.add('activar')
});

document.querySelector('.x-2').addEventListener('click', ()=> {
	padre.classList.remove('activar')
	equis.classList.remove('activar')
	barra2.classList.remove('activar')
});



const enlaces = document.querySelectorAll('#categorias a');

    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (e) => {
			padre.classList.remove('activar')
			equis.classList.remove('activar')
			barra2.classList.remove('activar')
        });
    });