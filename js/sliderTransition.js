const productContainer = document.getElementById('product-container')
const cardContainer = document.getElementById('card-container')
const slideContainer = cardContainer.querySelector('[data-role="slider-container"]')
const arrowsInSlideContainer = slideContainer.querySelectorAll('button')
const effectContainer = productContainer.querySelector('.effect-container')
const transitionContainer = effectContainer.querySelectorAll('.transition-container')
const buyButton = document.getElementById('buy-button')

arrowsInSlideContainer.forEach(arrow => {
  arrow.addEventListener('click', handleRoundedTransition)
})

let index = 0

function handleRoundedTransition() {
  index++

  if (index >= transitionContainer.length) {
    index = 0
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





