document.addEventListener('mouseover', (event) => {
  const parent = event.target.parentNode
  if (event.target.closest('.arrow__right')) parent.querySelector('.l-r-arrows-hover').style.left = '50%'
  if (event.target.closest('.arrow__left')) parent.querySelector('.l-r-arrows-hover').style.left = '0%'
})

document.addEventListener('mousedown', (event) => {
  if (event.target.closest('.arrow__right')) event.target.querySelector('img').style.transform = 'scale(0.7) rotate(180deg)'
  if (event.target.closest('.arrow__left')) event.target.querySelector('img').style.transform = 'scale(0.7)'
})

document.addEventListener('mouseup', (event) => {
  if (event.target.closest('.arrow__right')) event.target.querySelector('img').style.transform = 'scale(0.9) rotate(180deg)'
  if (event.target.closest('.arrow__left')) event.target.querySelector('img').style.transform = 'scale(0.9)'
})
