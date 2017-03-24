
//https://learn.jquery.com/plugins/basic-plugin-creation/

QUnit.module( 'Genéricos', function() {

  QUnit.test( 'Versión 0.2.0', function( assert ) {
    assert.ok( $.fn.kfern.getVersion() == '0.2.0', 'La versión de los tests y del plugin coinciden.' );
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
    assert.ok( $(fixture + ' > div.simplebox-content').is(":visible") == false, 'El contenido está oculto por defecto.' );
  });
  
});

