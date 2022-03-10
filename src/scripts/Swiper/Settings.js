import Swiper from 'swiper/bundle';


new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
  },
  speed: 400,
  spaceBetween: 100,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


new Swiper('.header-swiper', {
  autoplay: {
    delay: 4000,
  },
  speed: 400,
  spaceBetween: 500,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination',
    clickable: false,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'
      + '<button class="' + 'w-[181px] h-[64px] bg-white text-black rounded-full font-bold relative z-20 hover:bg-gray-100 left-[50%]"' + '>Odkryj wyprawę</button>'
      + '<div class="h-[1px] bg-white absolute top-[30px] w-screen opacity-[0.16] left-[-136px]"></div>'
      + '</span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



export default Swiper;