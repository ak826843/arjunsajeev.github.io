# Jekyll Blog Hosted Using Github Pages




## Description

This is a [Jekyll](http://jekyllrb.com/) blog project hosted using [Github Pages](https://pages.github.com/).


## Options

###Theme

This project uses a theme called [Lanyon](http://lanyon.getpoole.com/).Lanyon is an unassuming [Jekyll](http://jekyllrb.com) theme that places content first by tucking away navigation in a hidden drawer. It's based on [Poole](http://getpoole.com), the Jekyll butler.See [the Poole usage guidelines](https://github.com/poole/poole#usage) for how to install and use Jekyll.


### Sidebar menu

Create a list of nav links in the sidebar by assigning each Jekyll page the correct layout in the page's [front-matter](http://jekyllrb.com/docs/frontmatter/).

```
---
layout: page
title: About
---

```

###Adding Archive Page

Create a file archive.md with the following content.

```
---
layout: page
title: Archive
---

## Blog Posts

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

```
The syntax `{% for post in site.posts %}` is from the Liquid templating system.

##License

The following directories and their contents are Copyright Arjun Sajeev. You may not reuse anything therein without my permission:

*_posts/

All other directories and files are MIT Licensed.
