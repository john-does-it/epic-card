const productContainer = document.getElementById('product-container')
const cardContainer = productContainer.querySelector('.card-container')
const slides = cardContainer.querySelectorAll('[data-role="slide"]')
const effectContainer = cardContainer.querySelector('.effect-container')
const switchContainer = cardContainer.querySelector('[data-role="switch-container"]')
const arrowsInswitchContainer = switchContainer.querySelectorAll('button')
const transitionContainer = effectContainer.querySelectorAll('.transition-container')
const slideNumber = cardContainer.querySelector('.slidenumber')

arrowsInswitchContainer.forEach(arrow => {
  arrow.addEventListener('click', event => handleSlide(arrow))
})

let index = 0

function handleSlide (arrow) {
  if (arrow.id === "next-slide") {
    index++
  }

  if (arrow.id === "previous-slide") {
    index--
  }

  if (index >= slides.length) {
    index = 0
  }

  if (index < 0) {
    index = slides.length - 1
  }

  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      transitionContainer[i].classList.add('-active')
      slides[i].classList.add('-active')
    } else {
      transitionContainer[i].classList.remove('-active')
      slides[i].classList.remove('-active')
    }
  }

  /* once the transition is complete, we update the background color of the container with the color of the current filling color */
  setTimeout(() => {
    const activeFillingColor = transitionContainer[index].querySelector('.fillingcolor')
    const backgroundColor = window.getComputedStyle(activeFillingColor).backgroundColor
    cardContainer.style.backgroundColor = backgroundColor
  }, 500)

  slideNumber.innerText = `${index + 1}`
}





