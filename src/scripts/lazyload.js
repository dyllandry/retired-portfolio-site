const useObserver = `IntersectionObserver` in window
let lazyImages = []
let masonry
let observer
let rectIntervalId
let findMoreIntervalId
let findMoreSearches = 0
let findMoreMaxSearches = 3

export default {
  init: init
}

function init (options) {
  setTimeout(() => {
    lazyImages = [].slice.call(document.querySelectorAll(`img.lazy, .lazy-background-image`))
    findMoreIntervalId = setInterval(findMore, 300) // time between searches
    masonry = (options !== undefined && options.masonry !== undefined) ? options.masonry : undefined
    if (useObserver) {
      observer = makeObserver()
      lazyImages.forEach(img => observer.observe(img))
    } else {
      startRectInterval()
    }
  }, 50) // delay until first search
}

function findMore () {
  findMoreSearches++
  lazyImages = [].slice.call(document.querySelectorAll(`img.lazy, .lazy-background-image`))
  if (useObserver) lazyImages.forEach(img => observer.observe(img))
  console.log(`Looking fore more: ${lazyImages}`)
  if (findMoreSearches >= findMoreMaxSearches) clearInterval(findMoreIntervalId)
}

function startRectInterval () {
  if (rectIntervalId !== undefined) return
  rectIntervalId = setInterval(() => {
    lazyImages.forEach(image => {
      if (image.getBoundingClientRect().top <= window.innerHeight) {
        if (image.getBoundingClientRect().bottom >= 0) {
          if (getComputedStyle(image).display !== 'none') {
            if (image.classList.contains('lazy')) {
              image.srcset = image.dataset.srcset
              image.classList.remove('lazy')
            } else if (image.classList.contains('lazy-background-image')) {
              image.style.backgroundImage = `url("${image.dataset.src}")`
              image.classList.remove('lazy-background-image')
            }
            lazyImages = lazyImages.filter(imageInArray => {
              return imageInArray !== image
            })

            if (masonry !== undefined && image.classList.contains(masonry.selector)) {
              masonry.object.layout()
            }
          }
        }
      }
    })

    if (lazyImages.length === 0 && findMoreSearches >= findMoreMaxSearches) {
      clearInterval(rectIntervalId)
      rectIntervalId = undefined
    }
  }, 500)
}

function makeObserver () {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const image = entry.target
      if (image.classList.contains('lazy')) {
        image.srcset = image.dataset.srcset
        image.classList.remove('lazy')
      } else if (image.classList.contains('lazy-background-image')) {
        image.style.backgroundImage = `url("${image.dataset.src}")`
        image.classList.remove('lazy-background-image')
      }
      observer.unobserve(image)
      if (masonry !== undefined && image.classList.contains(masonry.selector)) {
        masonry.object.layout()
      }
    })
  })
}
