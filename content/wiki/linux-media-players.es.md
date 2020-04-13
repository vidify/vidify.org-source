---
title: "Linux Media Players"
description: "What the API means, and how to use it"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

This is the default API used currently in the app. It obtains information from any MPRIS compatible media player (MPRIS is a standard interface widely used for media players on Linux). All you may need to install are the following libraries, although they will probably be installed in your system already:

* [PyGI](https://pygobject.readthedocs.io/en/latest/) (not packaged on PyPi, you need to install it from your distribution's repository - it's usually called python-gi, python-gobject or pygobject). Here's a quick [tutorial](https://pygobject.readthedocs.io/en/latest/getting_started.html) on how to install it on most systems.

* [GLib](https://developer.gnome.org/glib/). You most likely have it installed already.


### Current limitations
* Spotify on Linux doesn't currently support the MPRIS property `Position`.
* Currently, changing players while the app is open won't refresh the player to the last one.
