import Swiper from './Settings'

import 'swiper/css/bundle';


class HeaderSwiper {
  constructor() {
    this.swiperInstance = document.querySelector('.header-swiper').swiper;
    this.events()
  }

  events() {
    this.swiperInstance.on('slideChange', (handler) => this.changeBackground(handler)) 
  }

  changeBackground(handler) {
      handler.el.closest(".header").classList.remove('header--background-1', 'header--background-2', 'header--background-3','header--background-4', 'header--background-5')
      const slideIndex = this.swiperInstance.activeIndex
      handler.el.closest(".header").classList.add('header--background-' + slideIndex)
  }
}

export default HeaderSwiper;