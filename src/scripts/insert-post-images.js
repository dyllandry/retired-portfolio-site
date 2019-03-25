const d = document

module.exports = function (images) {
  const imgs = d.querySelectorAll(`.post-image`)
  imgs.forEach(img => {
    const imgSrcName = img.dataset.src.slice(0, img.dataset.src.lastIndexOf(`.`))
    const rightImage = images.filter(image =>
      image.src.slice(0, image.src.lastIndexOf(`-`)) === imgSrcName)[0]
    img.setAttribute('src', rightImage.placeholder)
    img.dataset.srcset = rightImage.srcSet
    img.dataset.src = rightImage.src
    img.classList.add('lazy')
  })
}
