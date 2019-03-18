let burgerActive = false
let burger
let header
let mobileMenu
let mobileMenuItems

document.addEventListener('DOMContentLoaded', function () {
  burger = document.querySelector(`.burger`)
  header = document.querySelector(`nav.navbar[aria-label="main navigation"`)
  mobileMenu = document.querySelector(`#mobile-nav-menu`)
  mobileMenuItems = mobileMenu.querySelectorAll('[role="menuitem"]')

  window.addEventListener(`resize`, headerResized)
  burger.addEventListener(`keydown`, pressBurger)
  burger.addEventListener(`click`, pressBurger)
  mobileMenu.addEventListener(`focusout`, focusOutMobileMenu)
  mobileMenuItems.forEach(function (menuItem) {
    menuItem.addEventListener(`keydown`, pressMobileMenuItem)
    menuItem.addEventListener(`click`, pressMobileMenuItem)
  })
})

function headerResized (event) {
  if (window.innerWidth > 1087) {
    if (burgerActive) close()
  } else {
    if (burgerActive) open()
  }
}

function pressBurger (event) {
  // prevent upon enter on focused element a second fake click event that fires
  if (event.type === `click` && event.x === 0 && event.y === 0) return

  switch (event.code) {
    case 'Enter':
    case 'Space':
      toggleMobileMenu()
      break

    case 'ArrowDown':
      open()
      mobileMenuItems[0].focus()
      break

    case 'ArrowUp':
      open()
      mobileMenuItems[mobileMenuItems.length - 1].focus()
      break

    case undefined:
      if (burgerActive) close()
      else open()
      break
  }
}

function focusOutMobileMenu (event) {
  if (!nodeIsMobileMenuItem(event.relatedTarget)) close()
}

function pressMobileMenuItem (event) {
  event.stopPropagation()
  switch (event.code) {
    case 'Enter':
    case undefined:
      close()
      burger.focus()
      location = event.target.dataset.href
      break

    case 'ArrowDown':
      if (event.target.nextSibling != null) event.target.nextSibling.focus()
      else mobileMenuItems[0].focus()
      break

    case 'ArrowUp':
      if (event.target.previousSibling != null) event.target.previousSibling.focus()
      else mobileMenuItems[mobileMenuItems.length - 1].focus()
      break

    case 'Escape':
      close()
      burger.focus()
      break

    case 'Home':
      mobileMenuItems[0].focus()
      break

    case 'End':
      mobileMenuItems[mobileMenuItems.length - 1].focus()
      break

    default:
      if (!isLetter(event.key)) break
      selectMenuItemByLetter(event.key)
      break
  }
}

function nodeIsMobileMenuItem (node) {
  const matches = Array.prototype.find.call(
    mobileMenuItems,
    menuItem => menuItem.isSameNode(node))
  return matches !== undefined
}

function selectMenuItemByLetter (enteredLetter) {
  enteredLetter = enteredLetter.toLowerCase()
  const alphabeticalMenuItemMatches = Array.prototype.filter.call(
    mobileMenuItems,
    function (menuItem) {
      const menuItemLetter = menuItem.dataset.string[0]
      return menuItemLetter === enteredLetter
    }
  )
  if (alphabeticalMenuItemMatches.length === 0) return

  // Sort list as it appears on webpage (low data-index first & high data-index last)
  const sortLowestIndexFirst = function (a, b) { return a.dataset.index - b.dataset.index }
  alphabeticalMenuItemMatches.sort(sortLowestIndexFirst)

  // Try to find next match down the list (a higher data-index)
  const higherIndexMatch = alphabeticalMenuItemMatches.filter(menuItem =>
    menuItem.dataset.index > event.target.dataset.index)

  // focus next match down the list, or first match from the bottom
  if (higherIndexMatch.length > 0) higherIndexMatch[0].focus()
  else alphabeticalMenuItemMatches[0].focus()
}

function isLetter (string) {
  if (/^([a-z]|[A-Z])$/.test(string)) return true
  else return false
}

function toggleMobileMenu () {
  if (burgerActive) {
    close()
    burger.focus()
  } else {
    open()
    mobileMenuItems[0].focus()
  }
}

function open () {
  burgerActive = true
  burger.classList.add('is-active')
  burger.setAttribute('aria-expanded', true)
  mobileMenu.style.display = `block`
  mobileMenu.style.height = `${window.innerHeight - header.offsetHeight}px`
  mobileMenu.style.top = `${header.offsetHeight}`
}

function close () {
  burgerActive = false
  burger.classList.remove('is-active')
  burger.setAttribute('aria-expanded', false)
  mobileMenu.style.display = `none`
}
