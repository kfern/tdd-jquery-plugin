
//https://learn.jquery.com/plugins/basic-plugin-creation/

QUnit.module( 'Genéricos', function() {

  QUnit.test( 'Versión 0.1.0', function( assert ) {
    assert.ok( $.fn.kfern.getVersion() == '0.1.0', 'La versión de los tests y del plugin coinciden.' );
  });

});



