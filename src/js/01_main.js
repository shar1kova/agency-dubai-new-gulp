
function burgerMenuFunction(){

  const burgerButton = document.querySelector('.header__navigation-button');
  const modal = document.querySelector('.header-modal');
  const body = document.querySelector('body');
   burgerButton.addEventListener('click', function(){
      modal.classList.toggle('active')
      burgerButton.classList.toggle('header__navigation-button--open')
      burgerButton.classList.toggle('header__navigation-button--close')
      burgerButton.classList.toggle('--svg__burger')
      burgerButton.classList.toggle('--svg__cancel')
      body.classList.toggle('no_scroll')
  })

}

burgerMenuFunction()

new Swiper('.testimonial__stories-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.testimonial__swiper-button-next',
    prevEl: '.testimonial__swiper-button-prev',
  },
});

new Swiper('.projects__slider', {
  slidesPerView: 'auto',
  slideClass: 'projects__swiper-slide',
  spaceBetween: 10,
  breakpoints: {
    800: {
      spaceBetween: 20
    },
  },
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
});

new Swiper('.districts__slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  slideClass: 'districts__swiper-slide',
  navigation: {
    nextEl: '.districts__swiper-button-next',
    prevEl: '.districts__swiper-button-prev',
  },
});


