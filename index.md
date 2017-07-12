---
# YAMl Front Matter
layout: default
title: Blog
---
# Hello,World!
Hello, hello Jekyll !

こんにちは、こんにちは、jekyll !  

<!-- <ul>
  {% for post in site.posts %}
    <li>
      <a href="/blog{{ post.url }}">{{post.title}}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul> -->

{% for post in site.posts %}
- [{{ post.date | date_to_long_string }}・{{ post.title }}](/blog{{ post.url }})  
  {{ post.excerpt }}
{% endfor %}

![Jekyll](/blog/common/images/jekyll.png)
