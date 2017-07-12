---
# YAMl Front Matter
layout: default
title: Blog
---

Hello, hello Jekyll !  

こんにちは、こんにちは、jekyll !  

{% for post in site.posts %}
- [{{ post.date | date_to_long_string }}<br>{{ post.title }}](/blog{{ post.url }})
{{ post.excerpt | remove: '<p>' | remove: '</p>' }}
{% endfor %}

![Jekyll](/blog/common/images/jekyll.png)
