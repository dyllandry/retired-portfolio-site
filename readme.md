# Final Portfolio Site
A webpack static site builder for Dylan Landry's portfolio site.

[Github Repository](https://github.com/dyllandry/final-portfolio-site)

## Scripts
- Begin webpack dev server: `npm start`
- Build to `dist/` dir: `npm run build`

## Adding Post Pages
1. Create a new directory for your post in `./src/posts/`, e.g. `./src/posts/first-post/`
1. In this directory, place a thumbnail image named `thumbnail` with any image extension, e.g. `./src/posts/first-post/thumbnail.png`
1. In this directory, create a markdown file, e.g. `./src/posts/first-post/markdown.md`. 
1. Follow this  format for writing the markdown file's contents. Replace <> with your values (remove the <> characers after).
    ```
    ---
    <attribute>: <value>
    <another attribute>: <another value>
    ---
    Write your markdown here.
    ```

### Attributes and Values
Attributes shape how the post is described on the home page.

<small>\* *Some attributes are only applicable to a specific category of post, e.g. featured or blog.*</small>

attribute | value | meaning | category
--- | --- | --- | ---
category | string | Determines whether to list the post in the featured list or the blog list. | any
title | string | Title to appear in lists. | featured, blog
description | string | Description to appear in lists. | featured
date | string | Date of the post. | blog
subCategory | string | Subcategory of post, e.g. tutorial, opinion, etc. | blog