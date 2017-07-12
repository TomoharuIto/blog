---
# YAMl Front Matter
layout: default
title: Blog
---
# Hello,World!
Hello, hello Jekyll !

こんにちは、こんにちは、jekyll !
{% for post in site.posts %}
- [{{ post.date | date_to_long_string }}・{{ post.title }}](/blog{{ post.url }})
{% endfor %}
![Jekyll](/blog/common/images/jekyll.png)  
{{ site }}
server_port: {{ site.server_port }}  
markdown: {{ site.markdoen }}  
permalink: {{ site.permalink }}
