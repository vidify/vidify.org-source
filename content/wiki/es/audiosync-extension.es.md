---
title: "La extensión Audiosync"
description: "What's it for and how to use it"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

Te darás cuenta de que algunos vídeos no están exactamente sincronizados. Esto es porque los videoclips son reproducidos desde YouTube, y suelen ser diferentes versiones de la canción, tienen intros y outros... que arruinan la sincronización. A pesar de que esto es muy complicado de arreglar, Vidify tiene una extensión de sincronización de audio que lo intenta.

El repositorio completo está en [vidify/audiosync](https://github.com/vidify/audiosync). Está en desarrollo aún, por lo que puede que sea más complicado de usar.

Audiosync sólo está disponible en Linux por ahora. Se recomienda usar Mpv cono el reproductor de vídeo porque es más preciso. Puedes instalarlo con `pip install vidify[audiosync]`, junto a las siguientes dependencias:

* FFTW: `libfftw3` en distros basados en Debian.
* ffmpeg: `ffmpeg` en la mayoría de repositorios debe estar disponible en tu [PATH](https://maslinux.es/como-establecer-la-variable-path-en-linux/).
* pulseaudio: `pulseaudio`, pre-instalado en la mayoría de distros, junto a `libpulse-dev`.
* youtube-dl: está instalado por defecto con Vidify, pero segúrate de que está disponible en tu PATH.

También está disponible como [`vidify-audiosync`](https://aur.archlinux.org/packages/vidify-audiosync) en el AUR, y viene pre-instalado en los binarios.

Puedes activarlo con `--audiosync`, o dentro de tu [config](https://github.com/vidify/vidify#the-config-file):

```ini
[Defaults]
audiosync = true
```

Puedes calibrar los resultados de audiosync con la opción `--audiosync-calibration`. Por defecto, es 0 milisegundos, pero puede que dependa de tu hardware.

*Nota: si cuando usas audiosync no hay sonido, es posible que necesites desactivar "stream target device restore" editando la correspondiente línea en `/etc/pulse/default.pa` a `load-module module-stream-restore restore_device=false`.*

*Nota 2:
deberías asegurarte de que el dispositivo que está siendo grabado es `audiosync`, o donde la música se está reproduciendo (tus cascos o altavoces). Aquí hay un ejemplo en Pavucontrol (se suele llamar 'Monitor de ...'):*

![pavucontrol](/images/wiki/pavucontrol-audiosync.png)
