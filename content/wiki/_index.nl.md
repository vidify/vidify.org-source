---
title: "Wiki"
description: "De wiki artikelen om meer te weten te komen over Vidify"
author: "Mario Ortiz Manero"
---

# Introductie

Om Vidify te gebruiken, moet je de dekstop app installeren op de computer waar de muziek op afspeelt. De makkelijkste manier om deze te installeren is door de binaries te downloaden. Je kunt de muziekvideo's direct kijken vanuit de desktop app, of als je de muziekvideo's wilt zien op een TV of telefoon kun je de Android app installeren, deze verbindt met Vidify over je netwerk.

Op het moment ondersteunt Vidify: Spotify op Windows en Mac OS, en {{< tooltip "vrijwel alle" "alle MPRIS compatibele" >}} muziekspelers op Linux.

{{< partial "download-buttons.html" >}}

Als je meer technisch onderlegd bent, kun je beter Vidify downloaden van [PyPi](https://pypi.org/project/vidify). Linux gebruikers kunnen ook deze native alternatieven gebruiken:
* Arch Linux: [AUR](https://aur.archlinux.org/packages/vidify/).
* Gentoo Linux: [GURU media-video/vidify](https://gpo.zugaina.org/media-video/vidify).

Meer details over geavanceerde installatie kun je vinden op [GitHub](https://github.com/vidify/vidify#installation) (de README bevat gedetailleerde informatie voor ervaren gebruikers).

### De APIs
Een API is een bron van informatie over welke muziek er op het moment op jouw apparaat afspeelt. Zoals bijvoorbeeld: de Spotify desktop client, of iTunes. Deze APIs zijn op het moment ondersteund:

| Naam                                         | Extra vereisten                         | Beschrijving |
|----------------------------------------------|-----------------------------------------|--------------|
| [Linux Media Players](/nl/wiki/linux-media-players)        | *Standaard geïnstalleerd* (zie de wiki) | Elke MPRIS compatibele mediaspeler voor Linux of BSD (99% zou zeker moeten werken, zoals Spotify, Clementine, VLC...). |
| [Spotify voor Windows & MacOS](/wiki/spotify-for-windows-and-macos) | *Standaard geïnstalleerd*               | De Spotify desktop app voor Windows & MacOS, maakt gebruik van de [SwSpotify](https://github.com/SwagLyrics/SwSpotify) library. |
| [Spotify Web](/wiki/spotify-web-api)                | *Standaard geïnstalleerd*               | De officiële Spotify Web API, maakt gebruik van [Tekore](https://github.com/felix-hilden/tekore). Zie de wiki voor instructies over hoe je dit instelt. |

### De videospelers
De in de app ingebedde videospelers. Als je de binary gebruikt hoef je je hier geen zorgen over te maken, omdat deze al een installatie van [Mpv](https://mpv.io/) bevat.

Je kunt kiezen tussen Mpv of een externe video speler. Deze laatste laat je Vidify's muziekvideo's praktisch overal afspelen. Het stuurt alle informatie over de muziekvideos naar de Vidify app, **Vidify TV**. Deze is eschikbaar voor Android en Android TV [here](https://play.google.com/store/apps/details?id=com.glowapps.vidify).
