# Vidify's website

##### Languages: [English](https://github.com/vidify/vidify.org-source/blob/master/README.md) | [Español](https://github.com/vidify/vidify.org-source/tree/master/docs/README.es.md) | [简体中文](https://github.com/vidify/vidify.org-source/tree/master/docs/README.cn.md)

This website contains the source code for [vidify.org](https://vidify.org/).

It's a static site generated with [Hugo](https://gohugo.io/), and based on the [Navigator Hugo theme](https://themes.gohugo.io/navigator-hugo/). You can find the built files at [vidify/vidify.org](https://github.com/vidify/vidify.org).

## Contributing

Any contribution is welcome! If you want to help translate the site to more languages, you'll have to follow the following steps:

* Create an entry in `config.toml` inside `[[Params.langsList]]` and `[Languages]`.
* Translate the menus in `i18n/LANG.toml`.
* Translate the main page content in `data/LANG/*.yaml`.
* Translate the files at `content/contact/_index.LANG.md`, `content/wiki/LANG/*.LANG.md`, and optionally `content/blog/LANG/*.LANG.md` (the `content/blog/LANG/_index.LANG.md` file is important, but the rest are optional).

Make sure the site still [builds correctly](#building) after your changes, and make a new pull request.

## Building
You can build the website with `hugo`. All the static files will be saved into the `public/` directory. If you want to use live-reload, you can use `hugo server -D` and open [http://localhost:1313/](http://localhost:1313/).

The `deploy.sh` script is intended to be used to publish new changes to the site, as it will modify the vidify/vidify.org repo.
