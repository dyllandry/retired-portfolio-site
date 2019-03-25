# Final Portfolio Site
A webpack static site builder for Dylan Landry's portfolio site.

[Github Repository](https://github.com/dyllandry/final-portfolio-site)

## Scripts
- Begin webpack dev server: `npm start`
- Build to `dist/` dir: `npm run build`

## Adding Post Pages
1. Create a new directory for your post in `./src/posts/`
1. In this directory, place a thumbnail image named `thumbnail` with any image extension.
1. In this directory, create a markdown file with the following format. Replace <> with your values (remove the <> characers after).
    1.  ```
        ---
        title: <title to appear in lists>
        description: <Description to appear in lists>
        link: /<desired web link>.html
        thumbnail: <thumbnail img name minus extension>
        featured: <true or false to appear in featured>
        ---
        Write your markdown below the previous "---" line.
        ```
1. In this directory, create a javascript file with the following contents, replacing the <> with your information and after removing the <> characters.
    1.  ```
        require(`../post.js`).build(`<name of your md file>.md`)
        // You can write any custom js to implement on this post page after the require line.
        ```
1. Edit the `webpack.common.js` file to contain a new entry and plugin.
    1. Add a new entry, inserting your information within the <> characters, and after remove the <> characters.
        ```
        entry: {
            index: './src/index.js',
            firstPost: `./src/posts/First Post/first-post.js`,
            <entryName>: `./<path to js file>.js`
        },
        ```
    1. Add a new `HtmlWebpackPlugin` to the plugins array. Insert your information within the <> characters and after remove them.
        ```
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: `./src/index.pug`,
                filename: `index.html`,
                chunks: ['index']
            }),
            new HtmlWebpackPlugin({
                template: `./src/posts/post.pug`,
                chunks: [`firstPost`],
                filename: `first-post.html`,
                title: `First Tab`
            }),
            new HtmlWebpackPlugin({
                template: `./src/posts/post.pug`,
                chunks: [`<entryName>`],
                filename: `<file name, must match link in markdown file>.html`,
                title: `<Title to appear in webpage's tab bar>`
            }),
            ...
        ]
        ```
1. This is a terribly long process. I know. Submit an issue to this GitHub repo if you can show me a better way. 😅
