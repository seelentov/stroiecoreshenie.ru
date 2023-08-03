const promoImgBlock = document.querySelector('.promo__items')
const promoImgs = Array.from(promoImgBlock.children)

const scrollWidth = promoImgs[0].clientWidth
const scrollFrame = scrollWidth * 6
const scrollCenter = (promoImgBlock.scrollWidth / 2) - (scrollFrame / 2)

promoImgBlock.scrollTo({
  left: scrollCenter
})

promoImgBlock.addEventListener('scroll', () => {
  if (promoImgBlock.scrollLeft <= scrollCenter - scrollFrame || promoImgBlock.scrollLeft >= scrollCenter + scrollFrame) {
    promoImgBlock.scrollTo({
      left: scrollCenter
    })
  }
})

setInterval(() => {
  promoImgBlock.scrollTo({
    left: promoImgBlock.scrollLeft + scrollWidth,
    behavior: 'smooth'
  })
}, 3000)
