---
title: "The End of an Open Source Journey: Archiving Vidify"
description: "Officially announcing the end of my development on Vidify, with
some last words about the project and what it meant to me."
author: "Mario Ortiz Manero"
date: 2023-04-01
---

Vidify was one of my first big software engineering projects, and I invested a
tremendous amount of effort into its development. Supporting [multiple
platforms](https://vidify.org/wiki/), building an [audio synchronization
extension](https://vidify.org/wiki/audiosync-extension/), communicating between
devices through [DNS-SD](https://vidify.org/wiki/the-external-player-protocol/),
and releasing a website and Discord server were just some of the many tasks
which helped shape my growth as a software developer.

The most rewarding part, however, was collaborating so closely with the open
source community. I was able to influence the design of new libraries, such as
[Tekore](https://github.com/felix-hilden/tekore), and improve existing ones,
like [RSpotify](https://github.com/ramsayleung/rspotify). Moreover, Vidify
received a ton of help from contributors, including translating it to
[Chinese](https://github.com/vidify/vidify.org-source/pull/30) or
[Dutch](https://github.com/vidify/vidify/issues/73), adding [new video
players](https://github.com/vidify/vidify/pull/118), [uploading it to
Gentoo](https://github.com/vidify/vidify/pull/67), or reporting and fixing all
sort of issues. This experience is probably what led me to eventually love open
source work.

Unfortunately, I have been neglecting Vidify for some time because of some
fundamental challenges, as I introduced in [this
article](https://vidify.org/blog/202105-update/). Our main dependency,
`youtube-dl`, was [temporarily taken
down](https://github.blog/2020-11-16-standing-up-for-developers-youtube-dl-is-back/),
and Spotify rejected API access due to [ToS
violations](https://github.com/vidify/vidify/issues/166), among other issues.
Additionally, it has become harder for me to keep up with side projects; I am
now focusing on other aspects of life after recently relocating to a different
country to work for Lyft. While I believe Vidify could take off, it would
require a completely different approach and much greater scale, which is not
feasible for me in the near term.

The last commit on the desktop application was merged on December 2021, but
there had already been no active development on it since the end of 2020. We're
now in 2023, and rather than keeping the status of the project uncertain, I
would like to announce that I'm officially archiving all the repositories
related to Vidify:

* [vidify/vidify](https://github.com/vidify/vidify)
* [vidify/vidify.org](https://github.com/vidify/vidify.org)
* [vidify/vidify.org-source](https://github.com/vidify/vidify.org-source)
* [marioortizmanero/structconf](https://github.com/marioortizmanero/structconf)

The repository for audio synchronization remains archived:

* [vidify/old-audiosync](https://github.com/vidify/old-audiosync) 

And I'm releasing some parts of the project that I had kept private so far, most
importantly the Vidify TV application for Android:

* [vidify/vidify-tv](https://github.com/vidify/vidify-tv)
* [vidify/vidify-cpp](https://github.com/vidify/vidify-cpp)
* [vidify/vidify-rs](https://github.com/vidify/vidify-rs)

The final two repositories are unfinished attempts at rewriting the desktop
application to various languages. This is usually a terrible idea, but as I
mentioned, Vidify was part of my learning process in this field, and I have no
regrets :)

It has definitely taken me more time than necessary to do this, because it
saddens me to abandon a project I had been so passionate about. But I know that
the beauty of open source development lies in its ability to benefit others even
after its original creator has moved on. By archiving the project instead of
deleting it, anyone can continue to learn from its software and my accompanying
articles, or even take on its development independently.

If you have any questions or plan to fork Vidify, feel free to reach out to me
through the links in my personal website,
[nullderef.com](https://nullderef.com/).

Thanks to everyone who made this possible ❤️,\
Mario
