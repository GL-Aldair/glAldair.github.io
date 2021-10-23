'use strict'

const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', ()=>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas')


// 
// Agregando el filtrado de imagenes po categorias
// 
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (e) => {
            e.preventDefault();
            enlaces.forEach( (enlace) => enlace.classList.remove('activo'));
            e.target.classList.add('activo');

            const categoria = e.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    // 
    // Agregando el filtrado de imagenes con la barra de busqueda
    // 
    document.querySelector('#barra-busqueda').addEventListener('input', (e) => {
        const busqueda = e.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
    });


    // 
    // Imagenes
    // 

    const imagenes = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach( (e) => {
        const ruta = e.getAttribute('src');
        const descripcion = e.parentNode.parentNode.dataset.descripcion;
        
        e.addEventListener('click', () => {
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        });
    });

    // 
    // Boton de cerrar
    // 
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });

    // 
    // Overlay delete activo
    // 

    overlay.addEventListener('click', (e) => {
        e.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });
});