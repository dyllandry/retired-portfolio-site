const d = document

module.exports = function (images) {
  d.addEventListener(`DOMContentLoaded`, () => {
    const imgs = d.querySelectorAll(`.post-image`)
    imgs.forEach(img => {
      const imgSrcName = img.dataset.src.slice(0, img.dataset.src.lastIndexOf(`.`))
      const rightImage = images.filter(image =>
        image.src.slice(0, image.src.lastIndexOf(`-`)) === imgSrcName)[0]
      img.setAttribute('src', rightImage.src)
    })
  })
}
