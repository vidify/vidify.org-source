---
title: "Wiki"
description: "Los artículos de la wiki para aprender más sobre Vidify"
author: "Mario Ortiz Manero"
---

# Introducción

Para usar Vidify, siempre vas a necesitar la app de escritorio instalada donde la música está siendo reproducida. La manera más fácil de instalarla es descargando los binarios. Desde ahí puedes reproducir videoclips, pero si quieres hacerlo en una TV o móvil necesitarás la aplicación para Android instalada, que se comunica a través de tu red.

Vidify actualmente soporta Spotify para Windows y Mac OS, y {{< tooltip "casi todos" "todos los compatibles con MPRIS" >}} los reproductores de música de Linux.

{{< partial "download-buttons.html" >}}

Si sabes más sobre ordenadores, será mejor descargar Vidify desde [PyPi](https://pypi.org/project/vidify). Los usuarios de Linux tienen otras alternativas disponibles más nativas:

* Arch Linux: [AUR](https://aur.archlinux.org/packages/vidify/).
* Gentoo Linux: [GURU media-video/vidify](https://gpo.zugaina.org/media-video/vidify).

Más detalles sobre las instalaciones avanzadas pueden encontrarse en [GitHub](https://github.com/vidify/vidify#installation) (el README contiene información detallada para usuarios más experimentados).

### Las APIs
Una API simplemente es una fuente de información de la música reproducida en un dispositivo. Por ejemplo, la aplicación de Spotify de escritorio, o iTunes. Aquí están las soportadas actualmente:

| Nombre                                                                 | Requerimientos extra                  | Descripción |
|------------------------------------------------------------------------|---------------------------------------|-------------|
| [Reproductores de música de Linux](/es/wiki/linux-media-players)       | *Instalado por defecto* (ver wiki)    | Cualquier reproductor compatible con MPRIS para Linux o BSD (un 99% de ellos, como Spotify, Clementine, VLC...). |
| [Spotify para Windows y MacOS](/es/wiki/spotify-for-windows-and-macos) | *Instalado por defecto*               | La app de escritorio de Spotify para Windows y MAC OS. |
| [Spotify Web](/es/wiki/spotify-web-api)                                | *Instalado por defecto*               | La API oficial de Spotify Web. Échale un ojo a su artículo de la wiki para más detalles de cómo usarla. |

### Los reproductores de vídeo
Los reproductores de vídeo integrados dentro de la app. Si estás usando un binario, no te tienes que preocupar, porque ya viene con [Mpv](https://mpv.io/) dentro.

Podrás escoger entre Mpv y el reproductor externo. Este último te permite reproducir los videoclips de Vidify esencialmente en cualquier sitio. Enviará información de los vídeos a la app de Vidify, **Vidify TV**. Está disponible para Android y Android TV [aquí](https://play.google.com/store/apps/details?id=com.glowapps.vidify).
