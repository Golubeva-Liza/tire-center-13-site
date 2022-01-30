import Swiper from '../swiper-bundle.min';

function mainSlider(){

   //инициализация слайдера
   const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      watchOverflow: true,
      spaceBetween: 24,
      breakpoints: {
         992: {
            slidesPerView: 3,
         },
         768: {
            slidesPerView: 1.76,
         },
         576: {
            slidesPerView: 1.3,
         },
         320: {
            slidesPerView: 1,
         }
      }
   });

   //функция, которая отключает работу слайдера, если ширина экрана больше, чем 992px. срабатывает также при изменении ширины экрана
   let isActive = true;
   function swiperInit() {
      const initNeeded = window.innerWidth < 992;

      if(initNeeded && !isActive) {
         swiper.forEach(slider => {
            slider.enable();
         });
         isActive = true;
      }
      if(!initNeeded && isActive) {
         // swiper.destroy(true, true);
         swiper.forEach(slider => {
            slider.disable();
         });
         isActive = false;
      }
   }
   swiperInit();
   window.onresize = swiperInit;
}

export default mainSlider;