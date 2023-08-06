let accardionOpen = false
const overlay = document.getElementById('overlay')
const setting = document.getElementById('left')
const templates = document.getElementById('right')
const showElement = element => {
  element.classList.remove('max-md:hidden')
}
const hideElement = element => {
  element.classList.add('max-md:hidden')
}
const openAccardion = element => {
  showElement(element)
  overlay.classList.add('max-md:animate-slideIn')
  overlay.classList.remove('max-md:animate-slideOut')
  accardionOpen = true
}
const closeAcardion = () => {
  overlay.classList.add('max-md:animate-slideOut')
  overlay.classList.remove('max-md:animate-slide')
  const hider = () => {
    hideElement(setting)
    hideElement(templates)
    overlay.removeEventListener('animationend', hider)
  }
  overlay.addEventListener('animationend', hider)
  accardionOpen = false
}
document.getElementById('arrow').addEventListener('click', () => {
  if (!accardionOpen) {
    openAccardion(templates)
  } else {
    closeAcardion()
  }
})
Array.from(document.getElementsByClassName('template-type')).forEach(
  element => {
    element.addEventListener('click', () => {
      closeAcardion()
      const clone = document
        .getElementById('button-template')
        .content.cloneNode(true)
      const button = clone.getElementById('button')
      button.addEventListener('click', () => {
        openAccardion(setting)
      })
      button.removeAttribute('id')
      document.getElementById('main-layout').prepend(clone)
    })
  }
)
document.getElementById('add-new-element').addEventListener('click', () => {
  openAccardion(templates)
})
