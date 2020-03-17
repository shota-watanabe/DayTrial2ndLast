var swiper = new Swiper('.swiper-container', {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  spaceBetween: 50,
  initialSlide: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets', 
    clickable: true,
  },
  slidesPerView: 1,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px (tablet)
    768: {
      slidesPerView: 3,
    }
  }
});