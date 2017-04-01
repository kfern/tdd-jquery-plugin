# Desarrollo paso a paso de un plugin para jquery

## Proceso general:
1. Fijar objetivos para la siguiente versión.
2. Implementar los tests que verifican que los ojetivos se han cumplido. Esta fase concluye cuando *fallan* todos los tests relacionados con los objetivos.
3. Realizar el desarrollo. Esta fase concluye cuando se han superado todos los tests, estén relacionados con los objetivos o no.
4. Volver al primer paso.

## Tests en jquery

### Plugin interactivo
#### Versión 0.5.0
* Objetivos:
  * Realizar los tests usando node.
    * Crear un archivo package.json de configuración del proyecto.
      * npm init
      * Resultado: https://github.com/kfern/tests/commit/9b21c7cc5fda8c25a1987b77a31babfe6b814cbf
    * Instalar Karma de forma global para ser usado mediante la línea de comandos:
      * npm install -g karma-cli
    * Instalar karma en el proyecto siguiendo los pasos indicados en http://karma-runner.github.io/1.0/intro/installation.html
      * npm install karma --save-dev
      * npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
	  * Añadir una entrada en .gitignore para excluir la carpeta node_modules	  
	  * Resultado: https://github.com/kfern/tests/commit/684167b9a484bb06961486a1540ef113bb8e6e9a
    * Incluir el paquete qunitjs y crear un archivo de configuración para karma usando qunit como testing framework:
      * npm install qunitjs --save-dev
      * karma init
	  * Resultado: https://github.com/kfern/tests/commit/5c2086f6325605469578ffaf608d67efd0d98c68
    * Comprobar si los tests están funcionando:
	  * karma start
	  * Abrir la url http://localhost:9876/debug.html con Chrome. Los mensajes se muestran en la consola del navegador. 
	  * Resultado: https://github.com/kfern/tests/commit/d01ab227c567f9253d8a85f8f6e5da4cb9a060da
    * Resolver "Uncaught ReferenceError: jQuery is not defined"
	    * En la versión anterior la librería jquery era cargada en simplebox.tests.html. Ahora no es está cargando por defecto.
		* La solución simple: incluir la librería dentro de la carpeta del proyecto.
		* Resultado: https://github.com/kfern/tests/commit/a615b629d4606e2fff40ab444fb5f4e9f11952ce		
	  
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