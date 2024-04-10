const productContainer = document.getElementById('product-container')
const cardContainer = document.getElementById('card-container')
const switchContainer = cardContainer.querySelector('[data-role="switch-container"]')
const slides = cardContainer.querySelectorAll('[data-role="slide"]')
const arrowsInswitchContainer = switchContainer.querySelectorAll('button')
const effectContainer = productContainer.querySelector('.effect-container')
const transitionContainer = effectContainer.querySelectorAll('.transition-container')
const buyButton = document.getElementById('buy-button')

console.log(slides)

arrowsInswitchContainer.forEach(arrow => {
  arrow.addEventListener('click', event => handleSlide(event))
})

let index = 0

function handleSlide (event) {
  const parentElement = event.target.parentNode

  if (parentElement.id === "next-slide") {
    index++
  }

  if (parentElement.id === "previous-slide") {
    index--
  }

  if (index >= transitionContainer.length) {
    index = 0
  }

  if (index < 0) {
    index = transitionContainer.length - 1
  }

  for (let i = 0; i < transitionContainer.length; i++) {
    if (i === index) {
      transitionContainer[i].classList.add('-active')
    } else {
      transitionContainer[i].classList.remove('-active')
    }
  }

  for (let i = 0; i < transitionContainer.length; i++) {
    if (i === index) {
      transitionContainer[i].classList.add('-active')
    } else {
      transitionContainer[i].classList.remove('-active')
    }
  }

  setTimeout(() => {
    const activeFillingColor = transitionContainer[index].querySelector('.fillingcolor')
    const backgroundColor = window.getComputedStyle(activeFillingColor).backgroundColor
    cardContainer.style.backgroundColor = backgroundColor
  }, 500)
}





