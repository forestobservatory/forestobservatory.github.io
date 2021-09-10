---
title: Open Source Software
hero-image: hero-strix.jpg
page-class: projects
custom-css: thumbnail-list
---

We do open source software, too.

<section class="thumbnail-list">
{% for repo in site.data.software %}
<a href="{{ repo.url | relative_url }}" class="no-decoration">
    <div class="image-container">
        <img src="{{ repo.icon | relative_url }}" />
    </div>
    <div>
        <p>{{- repo.name -}}</p>
        <p>{{- repo.description -}}</p>
    </div>
</a>
{% endfor %}
</section>
