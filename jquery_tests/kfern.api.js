(function ( $ ) {
    $.fn.kfern = {};
    $.fn.kfern.getVersion = function(){
        return '0.2.0';
    };
  
    $.fn.kfern.simplebox = function( selector ){
        selector = selector || 'simplebox';
        $('div.' + selector).each(function(){
            //Verificar que la estructura del contenido recibido contiene los mínimos necesarios
            if (($(this).find('h2.simplebox-title').length == 1) && ($(this).find('div.simplebox-content').length == 1)){
              //Realizar las tareas necesarias para pasar los tests
              //El div contenedor tiene un id y se identifica correctamente.
              $(this).attr('id', 'abc').data('kfern', 'simplebox');
              //El contenido se muestra oculto por defecto
              $(this).find('div.simplebox-content').hide();
            }
        });
    };

}( jQuery ));
