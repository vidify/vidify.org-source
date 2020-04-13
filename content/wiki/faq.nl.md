---
title: "FAQ"
description: "Frequently Asked Questions"
author: "Mario Ortiz Manero"
date: 2020-04-05
---

### Vidify werkt niet goed met Python 3.8 en PySide2
PySide2 heeft pas Python 3.8 ondersteuning vanaf versie 5.14. Zorg er dus voor dat je minimaal deze versie gebruikt en probeer het nog een keer. `TypeError: 'Shiboken.ObjectType' object is not iterable` is de foutmelding die je anders zult zien.

### `ModuleNotFoundError: No module named 'gi'` when using a virtual environment
`python-gobject` is niet altijd beschikbaar in een virtuele omgeving. Om hier omheen te werken kun je een symlink maken met:

```bash
ln -s "/usr/lib/python3.8/site-packages/gi" "$venv_dir/lib/python3.8/site-packages"
```

of installeer dit met pip volgens [deze handleiding](https://pygobject.readthedocs.io/en/latest/getting_started.html).

### Vidify herkent sommige gedownloade nummers niet
Als het nummer geen metadata veld heeft met titel en artiest (waarvan artiest optioneel is), dan kan Vidify niet weten welk nummer er afspeelt. Probeer de relevante metadata aan deze gedownloade nummers toe te voegen met VLC of een ander programma.

### `FileNotFoundError: Could not find module 'libvlc.dll'.`
Zorg ervoor dat zowel Python als VLC beide 32 bits of 64 bits zijn, en dus niet verschillend. Als het goed is heb je een map genaamd `C:\Program Files (x86)\VideoLAN\VLC` (32b), of `C:\Program Files\VideoLAN\VLC` (64b).
