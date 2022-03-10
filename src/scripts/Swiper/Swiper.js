import Swiper from './Settings'

import 'swiper/css/bundle';


class MySwiper {
  constructor() {
    this.buttonRight = document.querySelector('.button-right')
    this.buttonLeft = document.querySelector('.button-left')
    this.swiperInstance = document.querySelector('.swiper').swiper;
    this.events()
  }

  events() {
    this.buttonRight.addEventListener('click', () => {
      this.nextSlide()
    })

    this.buttonLeft.addEventListener('click', () => {
      this.prevSlide()
    })
  }

  nextSlide() {
    this.swiperInstance.slideNext();
  }

  prevSlide() {
    this.swiperInstance.slidePrev();
  }
}

export default MySwiper;