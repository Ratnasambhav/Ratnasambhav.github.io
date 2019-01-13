---
path: "/blog/why"
date: "2019-01-13"
title: "Why? What? When? How? Yes."
---

The `gatsby-source-filesystem` plugin we configured earlier expects our content to be in `src/pages`, so that’s exactly where we’ll put it!

Gatsby is not at all prescriptive in naming conventions, but a typical practice for blog posts is to name the folder something like `MM-DD-YYYY-title`, e.g. `07-12-2017-hello-worl`d. Let’s do just that, and create the folder `src/pages/07-12-2017-getting-started`, and place an `index.md` inside!

The content of this Markdown file will be our blog post, authored in Markdown (of course!). Here’s what it’ll look like:
```
---
path: "/hello-world"
date: "2017-07-12T17:12:33.962Z"
title: "My First Gatsby Post"
---

Oooooh-weeee, my first blog post!
```