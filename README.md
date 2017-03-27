# Desarrollo paso a paso de un plugin para jquery

## Proceso general:
1. Fijar objetivos para la siguiente versión.
2. Implementar los tests que verifican que los ojetivos se han cumplido. Esta fase concluye cuando *fallan* todos los tests relacionados con los objetivos.
3. Realizar el desarrollo. Esta fase concluye cuando se han superado todos los tests, estén relacionados con los objetivos o no.
4. Volver al primer paso.

## Tests en jquery

### Plugin interactivo

#### Versión 0.4.0
* Objetivos:
  * Implementar el comportamiento del componente cuando se pulsa en el título.
    * El título ha de ser un enlace.
    * Si un contenido está oculto, cuando se pulse en el título se ha de mostrar el contenido asociado.
    * Si un contenido está visible, cuando se pulse en el título se ha de ocultar el contenido asociado.

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