# Página web de Vidify

##### Idiomas: [English](https://github.com/vidify/vidify.org-source/blob/master/README.md) | [Español](https://github.com/vidify/vidify.org-source/tree/master/docs/README.es.md) | [简体中文](https://github.com/vidify/vidify.org-source/tree/master/docs/README.cn.md)

Este reporio contiene el código fuente de [vidify.org](https://vidify.org/).

Es una página web estática generada con [Hugo](https://gohugo.io/), y basada en [el tema Navigator Hugo](https://themes.gohugo.io/navigator-hugo/). Puedes encontrar los ficheros generados en [vidify/vidify.org](https://github.com/vidify/vidify.org).

## Contribuciones

¡Cualquier contribución es bienvenida! Si quieres ayudar a traducir la web a más idiomas, tendrás que seguir los siguientes pasos:

* Crear un nuevo apartado en `config.toml` dentro de `[[Params.langsList]]` y `[Languages]`.
* Traduce los términos en `i18n/LANG.toml`.
* Traduce el contenido de la página principal en `data/LANG/*.yaml`.
* Traduce los archivos en `content/contact/_index.LANG.md`, `content/wiki/LANG/*.LANG.md`, y opcionalmente `content/blog/LANG/*.LANG.md` (el archivo `content/blog/LANG/_index.LANG.md` es importante, pero los demás son opcionales).

Asegúrate de que la página aún [compila correctamente](#generación)

Make sure the site still [builds correctly](#building) after your changes, and make a new pull request.

## Generación

Puedes generar la página web con `hugo`. Todos los archivos estáticos se guardarán en el directorio `public`. Si quieres ver tus cambios en tiempo real, puedes usar `hugo server -D` y abrir [http://localhost:1313/](http://localhost:1313/).

El script `deploy.sh` está creado para publicar nuevos cambios a la página, ya que modificará el [repositorio vidify/vidify.org](https://vidify.org/).
