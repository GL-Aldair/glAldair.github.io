'use strict'

const enlaces = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')

enlaces.forEach((cadaEnlace, i )=>{
    enlaces[i].addEventListener('click', (e)=>{
        // e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        
        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)
    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
    // grande.setAttribute('src', '')
})