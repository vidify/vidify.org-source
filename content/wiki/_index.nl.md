---
title: "Wiki"
description: "The wiki articles to learn more about Vidify"
author: "Mario Ortiz Manero"
---

## Invoering
Vidify is ontwikkeld om modulair te zijn. Standaard bevat deze ondersteuning voor de meeste populaire muziekspelers (zie ook [APIs](#the-apis)). Hetzelfde geld voor de [videospelers](#the-players) (standaard [VLC](https://www.videolan.org/vlc/index.html) op het moment). Functionaliteit kan worden uitgebreid door de daarvoor nodige software te installeren, deze zijn gedocumenteerd in hun respectievelijke hoofdstukken.

Hier zijn de verschillende manier om Vidify te installeren, afhankelijk van jouw besturingssysteem:

{{< partial "download-buttons.html" >}}

* **Cross-platform:** Met [pip](https://pypi.org/project/vidify): `pip install --user vidify`. Optionele APIs en Videospelers kunnen worden geïnstalleerd met `pip install --user vidify[extra1,extra2]`, dit is equivalent aan het installeren van de lijst van benodigdheden voor `extra1` en `extra2`.
* **Linux:**
    * Arch Linux: je kunt dit vinden in de AUR: [`vidify`](https://aur.archlinux.org/packages/vidify/). Onderhouden door mijzelf ([marioortizmanero](https://github.com/marioortizmanero)).
    * Gentoo Linux: er is een ebuild onderhouden door [AndrewAmmerlaan](https://github.com/AndrewAmmerlaan) in de [GURU overlay](https://wiki.gentoo.org/wiki/Project:GURU) genaamd [media-video/vidify](https://gpo.zugaina.org/media-video/vidify): `eselect repository enable guru && emerge --sync guru && emerge vidify`
    * *Voel je vrij om dit te uploaden naar de repositories van jouw distro! Laat me dit weten in een issue zodat ik dit aan deze lijst kan toevoegen.*

*Opmerking: Vidify werkt alleen met Python >= 3.6.*

### De APIs
Een API is een bron van informatie over welke muziek er op het moment op jouw apparaat afspeelt. Zoals bijvoorbeeld: de Spotify desktop client, of iTunes. Deze APIs zijn op het moment ondersteund:

| Naam                                         | Extra vereisten                         | Beschrijving |
|----------------------------------------------|-----------------------------------------|--------------|
| [Linux Media Players](/nl/wiki/linux-media-players)        | *Standaard geïnstalleerd* (zie de wiki) | Elke MPRIS compatibele mediaspeler voor Linux of BSD (99% zou zeker moeten werken, zoals Spotify, Clementine, VLC...). |
| [Spotify voor Windows & MacOS](/wiki/spotify-for-windows-and-macos) | *Standaard geïnstalleerd*               | De Spotify desktop app voor Windows & MacOS, maakt gebruik van de [SwSpotify](https://github.com/SwagLyrics/SwSpotify) library. |
| [Spotify Web](/wiki/spotify-web-api)                | *Standaard geïnstalleerd*               | De officiële Spotify Web API, maakt gebruik van [Tekore](https://github.com/felix-hilden/tekore). Zie de wiki voor instructies over hoe je dit instelt. |

### De Videospelers
De in de app ingebedde videospelers. De standaard is VLC, omdat deze het meest populair is. Maar het staat je vrij om andere te gebruiken, als je de videospeler zelf en de daarbij horende Python modules hebt geïnstalleerd.

| Naam                  | Extra vereisten                                   | Beschrijving                                                                                               | Argumenten/config opties                      |
|-----------------------|---------------------------------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| VLC           | [VLC](https://www.videolan.org/vlc/#download)     | De standaard videospeler. veel gebruikt en heel stabiel.                                                   |`--vlc-args <VLC_ARGS>`                        |
| Mpv           | [Mpv](https://mpv.io/installation/), `python-mpv` | Een opdrachtregel portable videospeler. Lichter en preciezer dan VLC.                                      | `--mpv-flags <MPV_ARGS>` (alleen booleans) |
| External | Standaard geïnstalleerd                           | Speel de video's af op een extern apparaat. Zie het hoofdstuk over [externe speler selectie](#the-external-player) voor meer inforamtie.  | Geen                                          |


#### De Externe speler
De externe speler laat jou Vidify's muziekvideo's praktisch overal afspelen. Het stuurt alle informatie over de muziekvideo naar een externe applicatie. Hier zijn de huidige implementaties:

* **Vidify TV**: beschikbaar voor Android, Android TV en Amazon Fire Stick TV. [Play Store page](https://play.google.com/store/apps/details?id=com.glowapps.vidify).
