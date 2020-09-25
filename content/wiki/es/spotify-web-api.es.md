---
title: "Spotify Web API"
description: "What the API means and how it works"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

All the supported platforms have a way to obtain song data from the desktop Spotify app, but it may not be as reliable as the official web API, or may lack features in comparison to it. For example, with the Spotify Web API, you can control the music on other devices other than where Vidify is running. However, it also brings other downsides:

* You have to sign in and set it up manually (only once though)
* Only Spotify Premium users are able to use some functions
* API calls are limited
* More internet usage is needed to continuously communicate with Spotify

The simplest way to activate the web API is by selecting it in the GUI when the app is launched for the first time. After selecting the Spotify Web API, Vidify will ask you for your Client ID and Client secret. These are the keys Spotify uses to access your account's data from external sources (the currently playing song). Here's how to obtain them:

### Obtaining your client ID and client secret:
1. Go to the [Spotify Developers Dashboard](https://developer.spotify.com/dashboard/applications).
2. Create a new client ID. You can fill the descriptions as you like. Select `No` when asked if it's a commercial integration and accept the Terms and Conditions in the next step.
3. Go to `Edit Settings` and copy-paste `http://localhost:8888/callback/` in the Redirect URIs field.
4. You can now copy your Client ID and Client Secret and input them when you launch the app for the first time.

*The client secret is a private key, so do not upload or share it with anyone.*

### Advanced usage
Everything input in the GUI will automatically be saved inside the config file. If you want to use a redirect uri other than the default one (`http://localhost:8888/callback/`), you'll have to specify it as an argument or in the config file. Here's a table with the related options available:

| Argument                         | Config option                           |
|----------------------------------|-----------------------------------------|
| `--api spotify_web`              | `api = spotify_web` inside `[Defaults]` |
| `--client-id <CLIENT_ID>`        | `client_id` inside `[SpotifyWeb]`       |
| `--client-secret <CLIENT_SECRET>`| `client_secret` inside `[SpotifyWeb]`   |
| `--redirect-uri <REDIRECT_URI>`  | `redirect_uri` inside `[SpotifyWeb]`    |


### Current limitations
* Spotify's Web API doesn't have an asynchronous event loop like [DBus](https://github.com/vidify/vidify/wiki/Linux-Media-Players), meaning that the track data has to be manually updated every second to detect new changes.
