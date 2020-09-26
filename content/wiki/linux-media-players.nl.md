---
title: "Linux Mediaspelers"
description: "Wat de API betekent en hoe die werkt"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

Dit is de standaard API die momenteel in de app gebruikt wordt. Deze API haalt informatie op van een MPRIS compatibele media speler (MPRIS is een standaard interface ondersteund door vrijwel alle media spelers op Linux). Alles wat je nodig hebt zijn de volgende libraries, deze zijn waarschijnlijk al op je systeem geïnstalleerd:

* [PyGI](https://pygobject.readthedocs.io/en/latest/) (niet beschikbaar op PyPi, installeer deze vanuit je distributie repository - meestal is deze beschikbaar onder de namen: python-gi, python-gobject or pygobject). Hier is een korte [tutorial](https://pygobject.readthedocs.io/en/latest/getting_started.html) voor de meeste systemen.

* [GLib](https://developer.gnome.org/glib/). Dit heb je waarschijnlijk al.


### Actuele imitaties
* Spotify voor Linux ondersteund op het moment niet de MPRIS eigenschap `Position`.
* Op het moment leidt het wisselen van media spelers er niet toe dat de app ververst wordt om de nieuwe te gebruiken.
