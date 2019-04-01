const template = require(`../partials/blog-list-item.pug`)

let html = ''

const postContext = require.context('../posts', true, /\.md$/)
postContext.keys().forEach(postPath => {
  const postFm = postContext(postPath)
  if (postFm.attributes.category !== `blog`) return
  let fileName =
    postPath.slice(postPath.lastIndexOf('/') + 1, postPath.lastIndexOf('.'))

  html += template({ ...postFm.attributes, link: `/${fileName}.html` })
})

document.addEventListener(`DOMContentLoaded`, () => {
  const blogLists = document.querySelectorAll('.blog-tile--list')
  if (html === '') {
    const blogTiles = document.querySelectorAll('.blog-tile--parent')
    blogTiles.forEach(blogTile => blogTile.remove())
    return
  }

  blogLists.forEach(blogList => {
    blogList.innerHTML = html
  })
})
