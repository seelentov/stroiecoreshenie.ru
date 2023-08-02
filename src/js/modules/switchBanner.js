const bannerBlock = document.querySelector('.banners__images')
const banners = Array.from(bannerBlock.children)

const scrollCenter = bannerBlock.scrollWidth / 2 - (window.innerWidth / 2)
const firstPoint = scrollCenter - banners[0].clientWidth * 3
const switchPoints = []

for (let i = 0; i < banners.length - 2; i++) {
  switchPoints.push(firstPoint + (banners[0].clientWidth * i))
}

bannerBlock.scrollTo({
  left: switchPoints[3]
})

let thisPos = 3

bannerBlock.addEventListener('scroll', () => {
  if (bannerBlock.scrollLeft <= switchPoints[0] || bannerBlock.scrollLeft >= switchPoints[6]) {
    bannerBlock.scrollTo({
      left: switchPoints[3]
    })
    thisPos = 3
  }
})

let startPoint
let endPoint

let scrollStatus = 1

if (scrollStatus === 1) {
  scrollStatus = 0
  bannerBlock.addEventListener('mousedown', (e) => {
    startPoint = bannerBlock.scrollLeft
  })

  bannerBlock.addEventListener('mouseup', () => {
    endPoint = bannerBlock.scrollLeft
    if (startPoint > endPoint) thisPos -= 1
    else thisPos += 1
    bannerBlock.scrollTo({
      left: switchPoints[thisPos],
      behavior: 'smooth'
    })
  })

  bannerBlock.addEventListener('mouseleave', () => {
    endPoint = bannerBlock.scrollLeft
    if (startPoint > endPoint) thisPos -= 1
    else thisPos += 1
    bannerBlock.scrollTo({
      left: switchPoints[thisPos],
      behavior: 'smooth'
    })
  })
  setTimeout(() => {
    scrollStatus = 1
  }, 500)
}
