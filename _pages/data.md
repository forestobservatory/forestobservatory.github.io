---
title: High Resolution Forest Data
hero-image: hero-strix.jpg
page-class: data
custom-css: thumbnail-list
permalink: data
---

Our regularly-updated, high resolution data is designed to be used by researchers, landowners & policymakers. The data are freely available for non-commercial use by scientists, government agencies, and non-profits. [Sign up for an account](https://forestobservatory.com/signup) to get started.

[Contact us](mailto:info@forestobservatory.com) if you’re interested in licensing the data for commercial use.

You can download portions of data from the [web map](https://forestobservatory.com/download), and the full data catalog is available through the [Forest Observatory API](https://github.com/forestobservatory/cfo-api).

# Vegetation datasets

<section class="thumbnail-list">
{% for metric in site.data.datasets.vegetation %}
<a href="{{ metric.url | relative_url }}" class="no-decoration">
    <div class="image-container">
        <img src="{{ metric.icon | relative_url }}" />
    </div>
    <div>
        <p>{{- metric.name -}}</p>
        <p>{{- metric.description -}}</p>
    </div>
</a>
{% endfor %}
</section>

# Wildfire datasets

<section class="thumbnail-list">
{% for metric in site.data.datasets.wildfire %}
<a href="{{ metric.url | relative_url }}" class="no-decoration">
    <div class="image-container">
        <img src="{{ metric.icon | relative_url }}" />
    </div>
    <div>
        <p>{{- metric.name -}}</p>
        <p>{{- metric.description -}}</p>
    </div>
</a>
{% endfor %}
</section>
