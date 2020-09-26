---
title: "The Audiosync extension"
description: "What's it for and how to use it"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

You'll realize that some videos aren't exactly in sync. That's because the videos are played from YouTube, and they are usually different versions of the song, have intros and outros... which mess up the timing. Although this is very complicated to fix, Vidify has an audio synchronization extension that tries to.

The full repository is in [vidify/audiosync](https://github.com/vidify/audiosync). It's still Work-In-Progress, so it might be harder to use.

Audiosync is only available on Linux for now. It's strongly recommended to use Mpv as the video player because it's more precise. You can install it with `pip install vidify[audiosync]`, along with the following dependencies:

* FFTW: `libfftw3` on Debian-based distros.
* ffmpeg: `ffmpeg` on most repositories. It must be available on your [PATH](https://superuser.com/q/284342)..
* pulseaudio: `pulseaudio`, pre-installed on most distros, and `libpulse-dev`.
* youtube-dl: this is installed by default with Vidify, but make sure it's available on your PATH.

It's also available as [`vidify-audiosync`](https://aur.archlinux.org/packages/vidify-audiosync) on the AUR, and it comes pre-installed in the binaries.

It can be activated with `--audiosync`, or inside your [config file](https://github.com/vidify/vidify#the-config-file):

```ini
[Defaults]
audiosync = true
```

You can calibrate the audiosync results with the option `--audiosync-calibration` or `audiosync_calibration`. By default it's 0 milliseconds, but it may depend on your hardware.

*Note: if when using audiosync there's no sound, you might need to disable stream target device restore by editing the corresponing line in `/etc/pulse/default.pa` to `load-module module-stream-restore restore_device=false`.*

*Note 2: you should make sure that the sink being recorded is either `audiosync`, or the one where the music is playing (your headphones or speaker). Here's an example on Pavucontrol (it's usually called 'Monitor of ...'):*

![pavucontrol](/images/wiki/pavucontrol-audiosync.png)
