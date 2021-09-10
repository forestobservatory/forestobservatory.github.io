---
layout: post
author: cba
title:  An intro to doing blogs
date:   2018-08-26
categories: operations
tags: salo blogs posts yatta
---

This is our intro to blog doing. The .md file under `_drafts` will be your guide to how this stuff works.

I am realizing now that this layout is maybe kind of ugly? I think that is because it uses a lot of block quotes and there are few lines per paragraph. Or so it seems.

## We have multiple subtitles we can use

Specify them with #s. Two ## means heading 2, Three ### means heading 3, &c. These should have slightly different fonts.

### A lot of important metadata

is in the very beginning of this file. This metadata is enclosed within the `---` lines. Each item relates to a metadata property that we can access as variables throughout the site. Don't worry about this.

The `layout` tag describes how the content is laid out. This is described by the file under `_layouts/post.html`. This file defines how our posts look in final form.

## Authors

The `author` tag can be set to specify who wrote the dang post. There are profiles for each of us under `_data/humans.yml`. The current options are `dcm` and `cba`. You can see at the top of the post that you wrote this. This is a *lie*. The data under `humans.yml` is also used in the [salo personnel page]({{ site.url }}/contact). I'll eventually get around to making pages for each of us that we can link to and aggregate all the posts we each write.

### Categories and tags

We'll want to come up with a coherent set of tags to assign to different posts. I don't really know the difference between them. I think we'll want to be more liberal with our use of `tags` than we are of the use of `categories`. We came up with a few tags on Friday, including:

```
deep-learning
remote-sensing
science
policy
climate
conservation
```

And for `categories`

```
operations
announcements
```

We can probably come up with a few more for salo-specific stuff, too. We should just figure out how to consistently mark and use these tags.

Ok, I'm done with this. Will touch base later.
