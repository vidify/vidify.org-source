---
title: "The external player protocol"
description: "A developer guide on how the external player protocol works"
type: developer
author: "Mario Ortiz Manero"
---

De externe media speler definieert een publiek model om te volgen bij het communiceren met andere apparaten. Op deze manier kan iedereen deze in hun app of programma implementeren om de video daar af te spelen. Hier is een gedetailleerde beschrijving over hoe je dat doet:

## Initialiseren van de verbinding
Om met apparaten te verbinden wordt gebruik gemaakt van een [DNS-based Service Discovery (DNS-SD)](https://en.wikipedia.org/wiki/Zero-configuration_networking#DNS-SD). De Vidify server registreert zichzelf op het netwerk, en iedereen daarin kan daarmee verbinden.

Dit protocol vereist dat er een service naam en service type wordt gedefineert. Deze zullen altijd respectievelijk `vidify - xxxx`, en `_vidify._tcp.` zijn. De service naam kan een korte beschrijving bevatten (`xxxx`), maar moet altijd het identificatie zoekwoord (`vidify`) hebben.

De DNS-SD registratie zal ook de volgende details bevatten over de Vidify server en de metadata daarvan:
```
id: "vidify"
version: "X.Y.Z"
os: "LINUX", "WINDOWS", "MACOS" or "BSD"
api: "MPRIS_LINUX", "SPOTIFY_WEB"...
```

Het versie nummer dient gecontroleerd te worden in de implementatie om te verifiëren dat de verbinding compatibel is. Vidify 2.3.0 hoeft bijvoorbeeld helemaal niet compatibel te zijn met de recentste versie van jouw implementatie, probeer deze verbinding dan ook niet te initialiseren.

De Vidify server kan meerder verbindingen tegelijk ondersteunen, let hierop wanneer je jouw implementatie ontwikkeld.

Het communicatie protocol is gebaseerd op JSON berichten met UTF-8 codering.

## Verbinding bevestiging
Om een verbinding op te zetten tussen de Vidify server en de app, dient er eerst bevestiging plaats te vinden. De app stuurt zijn eigen ID en andere data, om ervoor te zorgen dat deze beiden compatibel zijn. Dit wordt op het moment niet gebruikt in Vidify, maar is wel vereist met het oog op toekomstige functies.

Deze velden zijn gedefinieerd voor het eerste bericht:

```
{
    'id': 'com.glowapps.vidify',
    'version': '0.3.2'  # optional
}
```

Het ID dient uniek te zijn om conflicten te voorkomen met andere implementaties. De server antwoord als volgt:

```
{
    'success': false,
    'error_msg': 'The version 0.2.3 is incompatible ...'  # optional
}
```

## Communicatie
Wanneer er succesvol verbinding is gemaakt hoeft de client geen verdere berichten te versturen. De Vidify server voorziet alle verbonden clients van updates in de metadata van de afspelende muziek in het volgende formaat:

```
{
    'url': 'https://youtube.com/...',
    'relative_pos': -1200,  # optional
    'absolute_pos': 4000,  # optional
    'is_playing': true  # optional
}
```

`url` is een verplicht veld dat de representeert bij welke video de updates horen. De client vergelijkt deze met de video die op dit moment afspeelt. Is deze hetzelfde, dan wordt allen de metadata aangepast. Anders wordt er ook een nieuwe video gestart met de aangegeven eigenschappen.

Het positie veld kan verwijzen naar een absolute of relatieve positie in de video. Als deze beide zijn gespecificeerd dan heeft het de absolute prioriteit over de relatieve positie.
