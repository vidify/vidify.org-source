# Vidify

这个项目包含了 [vidify.org](https://vidify.org/) 的所有源码

它是一个由 [Hugo](https://gohugo.io/) 生成的静态网页，并且基于 [Navigator Hugo theme](https://themes.gohugo.io/navigator-hugo/) 主题，你可以在 [vidify/vidify.org](https://github.com/vidify/vidify.org) 中寻找到构建文件

欢迎任何的贡献！如果你想帮助这个网站翻译更多的语言，你将必须遵循现有的语言结构:

* 在 `config.yaml` 中创建一个包含 `params.langsList` 和 `languages` 的条目
* 在 `i18n/LANG.toml` 中翻译网站的菜单
* 在 `data/LANG/*.yaml` 中翻译网站的内容
* 在 `content/LANG/*/*.md` 中翻译网站的某些部分

## 构建项目

你可以通过  `hugo` 来构建项目，所有的静态文件将会保存在 `public/` 的目录中。如果你想使用 live-reload，你可以使用 `hugo server -D` 并且打开 [http://localhost:1313/](http://localhost:1313/)

`deploy.sh` 脚本通常是用来发布新的变化到网站上，因为它将修改 [vidify.org](https://github.com/vidify/vidify.org)
