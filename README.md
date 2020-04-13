# Vidify's website
This website contains the source code for [vidify.org](https://vidify.org/).

It's a static site generated with [Hugo](https://gohugo.io/), and based on the [Navigator Hugo theme](https://themes.gohugo.io/navigator-hugo/). You can find the built files at [vidify/vidify.org](https://github.com/vidify/vidify.org).

Any contribution is welcome! If you want to help translate the site to more languages, you'll have to follow the already existing structure for languages:

* Create an entry in `config.toml` inside `[[Params.langsList]]` and `[Languages]`.
* Translate the menus in `i18n/LANG.toml`.
* Translate the site content in `data/LANG/*.yaml`.
* Translate sections at `content/blog/*.LANG.md`, `content/contact/*.LANG.md`, `content/wiki/*.LANG.md`...

## Building
You can build the website with `hugo`. All the static files will be saved into the `public/` directory. If you want to use live-reload, you can use `hugo server -D` and open [http://localhost:1313/](http://localhost:1313/).

The `deploy.sh` script is intended to be used to publish new changes to the site, as it will modify the vidify/vidify.org repo.
