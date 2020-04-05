---
title: "Wiki"
description: "The wiki articles to learn more about Vidify"
author: "Mario Ortiz Manero"
---

# Getting Started

To use Vidify, you're always going to need the desktop app installed on the computer where the music is playing. The easiest way to install it is by downloading the binaries. The app is only optional, since it connects to Vidify through the network.

Vidify currently supports Spotify on Windows and Mac OS, and {{< tooltip "almost all" "all MPRIS compatible" >}} music players on Linux.

{{< partial "download-buttons.html" >}}

If you're more tech savvy, it's better to download Vidify from [PyPi](https://pypi.org/project/vidify) with `pip install vidify`, and Linux users can use other native alternatives:
* Any distro: [snapcraft](https://snapcraft.io/vidify-qt).
* Arch Linux: [AUR](https://aur.archlinux.org/packages/vidify/).
* Gentoo Linux: [GURU media-video/vidify](https://gpo.zugaina.org/media-video/vidify).

More details about advanced intallations can be found on [GitHub](https://github.com/vidify/vidify#installation) (the README contains detailed information for more advanced users).

### The APIs
An API is simply a source of information about the music playing on a device. For example, the Spotify desktop client, or iTunes. Here are the currently supported ones:

| Name                                                          | Extra requirements                    | Description |
|---------------------------------------------------------------|---------------------------------------|-------------|
| [Linux Media Players](/wiki/linux-media-players)              | *Installed by default* (see the wiki) | Any MPRIS compatible media player for Linux or BSD (99% of them, like Spotify, Clementine, VLC...). |
| [Spotify for Windows & MacOS](/spotify-for-windows-and-macos) | *Installed by default*                | The Spotify desktop app for Windows & MacOS, using the [SwSpotify](https://github.com/SwagLyrics/SwSpotify) library. |
| [Spotify Web](/wiki/spotify-web-api)                          | *Installed by default*                | The official Spotify Web API, using [Tekore](https://github.com/felix-hilden/tekore). Check the wiki for more details on how to set it up. |

### The players
The embedded video players inside the app. If you're using a binary, you don't have to worry about this, since it already comes with [Mpv](https://mpv.io/) inside it.

You'll be able to choose between Mpv and the external player. The latter lets you play Vidify's music videos essentially anywhere. It will send all the music video information to the Vidify app, **Vidify TV**. It's available on Android and Android TV [here](https://play.google.com/store/apps/details?id=com.glowapps.vidify).
