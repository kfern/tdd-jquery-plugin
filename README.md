# Desarrollo paso a paso de un plugin para jquery

## Proceso general:
1. Fijar objetivos para la siguiente versión.
2. Implementar los tests que verifican que los ojetivos se han cumplido. Esta fase concluye cuando *fallan* todos los tests relacionados con los objetivos.
3. Realizar el desarrollo. Esta fase concluye cuando se han superado todos los tests, estén relacionados con los objetivos o no.
4. Volver al primer paso.

## Tests en jquery
[![Build Status](https://travis-ci.org/kfern/tests.svg?branch=master)](https://travis-ci.org/kfern/tests)
[![Greenkeeper badge](https://badges.greenkeeper.io/kfern/tests.svg)](https://greenkeeper.io/)

### Plugin interactivo
#### Versión 0.5.0
* Objetivos:
  * Realizar los tests usando node.
    * Seguir los pasos indicados en https://github.com/kkroening/karma-qunit-jquery
    * Añadir una dependencia que faltaba (https://github.com/kkroening/karma-qunit-jquery/pull/1)
    * Añadir karma-coverage 
      * npm install karma-coverage --save-dev 
      * Configurar siguiendo las instrucciones en https://github.com/karma-runner/karma-coverage
    * El resultado de este paso es tener todos los tests funcionando usando un conjunto de tecnologías basadas en nodejs.
* Resultado: https://github.com/kfern/tests/commit/09310e437dbf07812145c54b84862ac9ff049e6f
#### Versión 0.4.0
* Objetivos:
  * Implementar el comportamiento del componente cuando se pulsa en el título.
    * El título ha de ser un enlace.
    * Si un contenido está oculto, cuando se pulse en el título se ha de mostrar el contenido asociado.
    * Si un contenido está visible, cuando se pulse en el título se ha de ocultar el contenido asociado.
* Tests: https://github.com/kfern/tests/commit/7a3a8749092737d4582459599baa45761d5c5866
* Resultado: https://github.com/kfern/tests/commit/b71d3762ede7d33df9235b6b92cb4568a48fadbf
#### Versión 0.3.0
* Objetivos:
  * Añadir code coverage mediante Blanket.js.
* Resultado: https://github.com/kfern/tests/commit/493974e8328759bc0deea2570f79904a7b8b1da0

#### Versión 0.2.0
* Objetivos:
  * Si el HTML no tiene la estructura mínima no se realiza ningún cambio.
  * Cuando se carga una página que contiene al menos un componente:
    * El div contenedor tiene un id.
    * El div contenedor se identifica correctamente.
    * El título está visible por defecto.
    * El contenido está oculto por defecto.
* Tests: https://github.com/kfern/tests/commit/b5b2b9b7fd5cd231c5201b409d8cdd9523307295
* Resultado: https://github.com/kfern/tests/commit/b5fec844e4604e697f50f39b51ee1b0b5fca6e82

#### Versión 0.1.0
* Objetivos:
  * Esqueleto del proyecto.
* Tests: https://github.com/kfern/tests/commit/40504894aa65bd9f74b18239b750bdef8eb8293c
* Resultado: https://github.com/kfern/tests/commit/bcb303b94b98470048f3f64f31701de3a2fbc60d