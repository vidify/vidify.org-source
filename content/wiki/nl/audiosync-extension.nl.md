---
title: "De Audiosync extensie"
description: "Wat de API betekent en hoe die werkt"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

Je zal je realiseren dat sommige videos niet precies gesynchroniseerd zijn met de muziek. Dit is omdat de video's worden afgespeeld van YouTube, en dit zijn vaak andere versies van hetzelfde nummer, met verschillende intro's en uitro's... wat problemen oplevert met de timing. Dit is lastig om op te lossen, maar Vidify heeft desondanks een audio synchronisatie extensie die dit probeert.

De gehele broncode is hier beschikbaar: [vidify/audiosync](https://github.com/vidify/audiosync). Het is nog niet volledig functioneel, en kan dus lastig in gebruik zijn.

Voorlopig is Audiosync alleen beschikbaar voor Linux. Het wordt sterk aangeraden om hierbij Mpv als videospeler te gebruiken. Je kan dit installeren met `pip install vidify[audiosync]`, samen met de volgende extra vereisten:

* FFTW: `libfftw3` op Debian gebaseerde distros.
* ffmpeg: `ffmpeg` beschikbaar voor praktisch alle distros. Moet beschikbaar zijn in jouw [PATH](https://superuser.com/q/284342).
* pulseaudio: `pulseaudio`, bijna altijd al geïnstalleerd.
* youtube-dl: dit wordt al geïnstalleerd door Vidify, maar zorg ervoor dat dit beschikbaar is in jouw path.

Het is ook beschikbaar als [`vidify-audiosync`](https://aur.archlinux.org/packages/vidify-audiosync) in de AUR en als [media-video/vidify-audiosync](https://gpo.zugaina.org/media-video/vidify-audiosync) in de [GURU overlay](https://wiki.gentoo.org/wiki/Project:GURU).

Deze functie wordt geactiveerd met het `--audiosync` argument, of in het [config bestand](https://github.com/vidify/vidify#the-config-file):

```ini
[Defaults]
audiosync = true
```

Je kunt de resultaten van audiosync kalibreren met de optie `--audiosync-calibration` of `audiosync_calibration`. Standaard is deze 0 milliseconden, maar dit is mogelijk afhankelijk van jouw hardware.

*Opmerking: als er geen geluid is, dan moet je misschien 'stream target device restore' uitzetten door de corresponderende lijn in `/etc/pulse/default.pa` te veranderen naar `load-module module-stream-restore restore_device=false`.*

*Opmerking 2: bevestig dat de sink waarvan wordt opgenomen `audiosync` is, of de sink waar de muziek op afspeelt. Hier is een voorbeeld in Pavucontrol (Meestal heet dit 'Monitor of ...'):*

![pavucontrol](/images/wiki/pavucontrol-audiosync.png)
