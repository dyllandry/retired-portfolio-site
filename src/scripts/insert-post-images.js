const d = document
const basePath = process.env.ASSET_PATH

module.exports = function (images) {
  const imgElements = d.querySelectorAll(`.post-image`)
  imgElements.forEach(imgElement => {
    const imgSrc = imgElement.dataset.src.slice(0, imgElement.dataset.src.lastIndexOf(`.`))
    const wpImage = images.find(image => {
      const name = image.src
        .slice(0, image.src.lastIndexOf(`-`))
        .replace(`/${basePath}/`, '')
      return name === imgSrc
    })
    imgElement.setAttribute('src', wpImage.placeholder)
    imgElement.dataset.srcset = wpImage.srcSet
    imgElement.dataset.src = wpImage.src
    imgElement.classList.add('lazy')
  })
}
