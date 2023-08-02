document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.menu-burger__button')
  const navLinks = document.querySelector('.menu-burger__nav')
  const burgerButtonChilds = burgerButton.children
  const header = document.querySelector('.header')

  let burgerButtonState = 0

  const buttonAnim = (burgerButtonState) => {
    if (burgerButtonState === 0) {
      burgerButtonChilds[0].style.transform = 'translate(0, 12px) rotate(45deg)'
      burgerButtonChilds[1].style.transform = 'rotate(315deg)'
      burgerButtonChilds[2].style.transform = 'translate(0, 12px)'
      burgerButton.classList.add('menu-burger__button__active')
      console.log(burgerButtonChilds[0].style.transform)
    } else {
      burgerButtonChilds[0].style.transform = 'none'
      burgerButtonChilds[1].style.transform = 'none'
      burgerButtonChilds[2].style.transform = 'none'
      burgerButton.classList.remove('menu-burger__button__active')
    }
  }

  const menuAction = (burgerButtonState) => {
    if (burgerButtonState === 0) {
      navLinks.style.display = 'flex'
      setTimeout(() => {
        navLinks.style.right = '0%'
      }, 100)

      burgerButtonState = 1
      buttonAnim(0)
    } else {
      navLinks.style.right = '100%'
      setTimeout(() => {
        navLinks.style.display = 'none'
      }, 200)
      burgerButtonState = 0
      buttonAnim(1)
    }
  }

  burgerButton.addEventListener('click', () => {
    menuAction(burgerButtonState)
    buttonAnim(burgerButtonState)
    burgerButtonState = burgerButtonState === 0 ? 1 : 0
  })
  navLinks.addEventListener('click', () => {
    menuAction(1)
    buttonAnim(1)
    burgerButtonState = 0
  })
})
