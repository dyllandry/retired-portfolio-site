# Final Portfolio Site
A webpack static site builder for Dylan Landry's portfolio site.

[Github Repository](https://github.com/dyllandry/final-portfolio-site)

## Scripts
- Begin webpack dev server: `npm start`
- Build to `dist/` dir: `npm run build`

## Adding Post Pages
1. Create a new directory for your post in `./src/posts/`, e.g. `./src/posts/first-post/`
1. In this directory, place a thumbnail image named `thumbnail` with any image extension, e.g. `./src/posts/first-post/thumbmnail.png`
1. In this directory, create a markdown file with the following format, e.g `./src/posts/first-post/markdown.md`. Replace <> with your values (remove the <> characers after).
    ```
    ---
    title: <title to appear in lists>
    description: <Description to appear in lists>
    featured: <true or false to appear in featured list>
    ---
    Write your markdown here.
    ```
