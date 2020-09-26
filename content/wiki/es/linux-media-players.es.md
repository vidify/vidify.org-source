---
title: "Reproductores de Música de Linux"
description: "Qué significa la API y cómo usarla"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

Esta es la API más recomendada para usuarios de Linux. Obtiene información de cualquier reproductor compatible con MPRIS (MPRIS es una interfaz estándar muy usada en Linux). Lo único que necesitas instalar son las siguientes librerías, aunque probablemente ya estarán instaladas en tu sistema:

* [PyGI](https://pygobject.readthedocs.io/en/latest/) (no disponible en PyPi, tienes que instalarlo en los repositorios de tu distribución - normalmente se llama `python-gi`, `python3-gobject`, o `pygobject`). Aquí hay un [tutorial](https://pygobject.readthedocs.io/en/latest/getting_started.html) de cómo instalarlo en la mayoría de los sistemas.

* [GLib](https://developer.gnome.org/glib/). Probablemente lo tengas instalado ya.


### Current limitations
* Spotify en Linux no tiene actualmente soporte para la propiedad MPRIS `Position`.
* Actualmente, cambiar reproductores MPRIS mientras la app está abierta no refrescará el reproductor al último.
