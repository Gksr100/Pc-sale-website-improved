new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 20, // Reduced from 30 for mobile
  slidesPerView: 1, // Default for mobile
  
  // Touch settings for mobile
  touchRatio: 1,
  grabCursor: true,
  
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});