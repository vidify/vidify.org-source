---
title: "Spotify Web API"
description: "Wat de API betekent en hoe die werkt"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

Voor alle ondersteunde besturingssystemen is het mogelijk om media data op te vragen van de Spotify desktop app. Echter, dit kan minder betrouwbaar zijn dan de officiële web API, of functies missen die de web API wel heeft. Zo heb je met de Spotify web API ook controle over muziek die afspeelt op andere apparaten dan die waarop Vidify is geïnstalleerd. Dat gezegd hebbende, er zijn ook nadelen:

* Je moet inloggen en het (eenmalig) handmatig instellen
* Alleen Spotify Premium gebruikers kunnen alle functies gebruiken
* De hoeveelheid verzoeken die je via de web API kunt doen is gelimiteerd
* Er wordt meer data verstuurd over het internet, vanwege de constante verbinding met Spotify

De eenvoudigste manier om de web API te activeren is door deze te selecteren in de GUI nadat de app voor de eerste keer is opgestart. Nadat je de web API hebt geselecteerd, vraagt Vidify om je 'Client ID' en 'Client secret' Deze sleutels gebruikt Spotify om toegang te krijgen tot jouw gegevens (welke nummer je nu afspeelt) vanuit externe bronnen. Dit is hoe je jouw 'Client ID' en 'Client secret' vindt:

### Vind jouw 'Client ID' en 'Client secret':
1. Ga naar de [Spotify Developers Dashboard](https://developer.spotify.com/dashboard/applications), log in en accepteer de gebruikersvoorwaarden.
2. Creëer een nieuwe 'Client ID', en maak een willekeurige beschrijving. Selecteer `No` wanneer je wordt gevraagd of dit voor commerciëlen doeleinde is en accepteer de voorwaarden..
3. Ga naar `Edit Settings` en kopieer en plak `http://localhost:8888/callback/` naar het veld voor `Redirect URIs`.
4. Nu kun je de 'Client ID' en 'Client secret' die je net heb gemaakt kopiëren naar de app wanneer je deze opstart en de web API selecteert.

*Je 'Client secret' is privé, upload of deel deze nooit met iemand.*

### Geavanceerd gebruik
Alles wat je in de GUI input wordt automatisch opgeslagen in het config bestand. Mocht je een andere redirect uri willen gebruiken (standaard: `http://localhost:8888/callback/`) dan kun je deze specificeren als een CLI argument of in het config bestand. Hier is een tabel van de beschikbare opties::

| Argument                         | Config optie                        |
|----------------------------------|-------------------------------------|
| `--api spotify_web`              | `api = spotify_web` in `[Defaults]` |
| `--client-id <CLIENT_ID>`        | `client_id` in `[SpotifyWeb]`       |
| `--client-secret <CLIENT_SECRET>`| `client_secret` in `[SpotifyWeb]`   |
| `--redirect-uri <REDIRECT_URI>`  | `redirect_uri` in `[SpotifyWeb]`    |


### Actuele limitaties
* De Spotify Web API ondersteund geen 'asynchronous event loop' zoals [DBus](https://github.com/vidify/vidify/wiki/Linux-Media-Players) dat doet, dit betekend dat de metadata elke seconde dient te worden ververst om veranderingen te detecteren.
