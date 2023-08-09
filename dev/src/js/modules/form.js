const formDiv = document.querySelector('.form__container')
let status = 0

document.addEventListener('click', (event) => {
  const parent = event.target.parentNode
  console.log(status)
  if (status === 0 && (event.target.classList.contains('show-form-btn') || parent.classList.contains('show-form-btn'))) {
    formDiv.style.display = 'flex'
    status = 1
    console.log('open')
  } else if (status === 1 && event.target.classList.contains('form__container')) {
    formDiv.style.display = 'none'
    status = 0
    console.log('close')
  }
})
