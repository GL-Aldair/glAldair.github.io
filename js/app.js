'use strict'

$(document).ready(function(){
    

    $('body').on({ 'mousemove' : function( e ){
        console.clear()
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#flecha').css({
            'left' : (clientX - 27 ) + 'px',
            'top' : (clientY - 27 ) + 'px'
        })
    }})

    $('a').on({ 
        'mouseover' : function(){
            $('#flecha').addClass('mini')
        },
        'mouseout' : function(){
            $('#flecha').removeClass('mini')
        },
    })

})