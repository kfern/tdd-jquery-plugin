
//https://learn.jquery.com/plugins/basic-plugin-creation/

QUnit.module( 'Genéricos', function() {

  QUnit.test( 'Versión 0.4.0', function( assert ) {
    assert.ok( $.fn.kfern.getVersion() == '0.4.0', 'La versión de los tests y del plugin coinciden.' );
  });
  });
  
QUnit.module( 'simplebox', function() {

  QUnit.test( 'Objetivo 1. Si el HTML no tiene la estructura mínima no se realiza ningún cambio.', function( assert ) {
    // Arrange
    var fixture = 'wrapper_incorrecto';
    var start = $(fixture);
    // Act
    $(document).kfern.simplebox('simplebox');
    // Assert (actual, expected)
    assert.deepEqual( $(fixture), start, 'Si el HTML no está completo no se realiza ningún cambio.' );
  });

  QUnit.test( 'Objetivo 2. Se carga una página con la estructura básica.', function( assert ) {
    // Arrange
    var fixture = 'div.wrapper_a > div.simplebox';
    // Act
    $(document).kfern.simplebox();
    // Assert (actual, expected)
    var $result = $( fixture );
    assert.ok( $result.attr('id'), 'El div contenedor tiene un id.' );
    assert.ok( $result.data('kfern') == 'simplebox', 'El div contenedor se identifica correctamente.' );
    assert.ok( $(fixture + ' > h2.simplebox-title').is(":visible")    == true, 'El título está visible.' );
    assert.ok( $(fixture + ' > h2.simplebox-title > a').length == 1, 'El título es un enlace.' );    
    assert.ok( $(fixture + ' > div.simplebox-content').is(":visible") == false, 'El contenido está oculto por defecto.' );
  });
  
  QUnit.test( 'Objetivo 3. Implementar el comportamiento del componente cuando se pulsa en el título.', function( assert ) {
    // Arrange
    var fixture = 'div.wrapper_a > div.simplebox';
    var contenido_visible;
    // Act
    $(document).kfern.simplebox();
    contenido_visible = $(fixture + ' > div.simplebox-content').is(":visible");
    $(fixture + ' > h2.simplebox-title > a').trigger('click');
    // Assert
    assert.ok( contenido_visible == false && $(fixture + ' > div.simplebox-content').is(":visible") == true, 'Si un contenido está oculto, cuando se pulse en el título se ha de mostrar el contenido asociado.' );
    
    //Si un contenido está visible, cuando se pulse en el título se ha de ocultar el contenido asociado
    // Arrange
    contenido_visible = $(fixture + ' > div.simplebox-content').is(":visible");
    //Act
    $(fixture + ' > h2.simplebox-title > a').trigger('click');
    // Assert
    assert.ok( contenido_visible && $(fixture + ' > div.simplebox-content').is(":visible") == false, 'Si un contenido está visible, cuando se pulse en el título se ha de ocultar el contenido asociado.' );

  });

/*
  QUnit.test( "keylogger api behavior", function( assert ) {
    var doc = $( document ),
      keys = new KeyLogger( doc );

    // Trigger the key event
    doc.trigger( $.Event( "keydown", { keyCode: 9 } ) );

    // Verify expected behavior
    assert.deepEqual( keys.log, [ 9 ], "correct key was logged" );
  });

  //Caso 3. Varios recursos del mismo tipo en la misma página
  */  
  
});

