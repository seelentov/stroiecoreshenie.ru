/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const owlReviews = $('.reviews__owl-carousel')

$(document).ready(function () {
  owlReviews.owlCarousel({
    margin: 250,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    nav: false,
    responsive: {
      1441: {
        margin: 250,
        dots: false
      },
      0: {
        dots: true,
        margin: 0
      }
    }
  })
})
