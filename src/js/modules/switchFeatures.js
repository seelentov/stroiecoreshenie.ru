const featuresBlock = document.querySelector('.features__items')
const features = Array.from(featuresBlock.children)

const scrollWidth = features[0].clientWidth
const scrollFrame = scrollWidth * 6
const scrollCenter = (featuresBlock.scrollWidth / 2) - (scrollFrame / 2)

featuresBlock.scrollTo({
  left: scrollCenter
})

featuresBlock.addEventListener('scroll', () => {
  if (featuresBlock.scrollLeft <= scrollCenter - scrollFrame || featuresBlock.scrollLeft >= scrollCenter + scrollFrame) {
    featuresBlock.scrollTo({
      left: scrollCenter
    })
  }
})

setInterval(() => {
  featuresBlock.scrollTo({
    left: featuresBlock.scrollLeft + scrollWidth,
    behavior: 'smooth'
  })
}, 3000)
