// import Swiper from './swiper-bundle.min';
import Ellipsis from './ellipsis.min';
import headerSelect from './components/headerSelect';
import headerSearch from './components/headerSearch';
import tabs from './components/tabs';

import selectSettings from './settings/selects';




document.addEventListener('DOMContentLoaded', () => {
   // const swiper = new Swiper('.swiper', {
   //    // Navigation arrows
   //    navigation: {
   //      nextEl: '.swiper-button-next',
   //      prevEl: '.swiper-button-prev',
   //    }
   //  });

   //settings
   selectSettings();
   Ellipsis(
      {
         ellipsis: '…', 
         debounce: 0,
         responsive: true,
         className: '.clamp-2', 
         lines: 2, 
         break_word: false //!!default the ellipsis can truncate words
       }
   );
   Ellipsis(
      {
         ellipsis: '…', 
         debounce: 0,
         responsive: true,
         className: '.clamp-3', 
         lines: 3, 
         break_word: false //!!default the ellipsis can truncate words
       }
   );


   //functions
   headerSelect();
   headerSearch();
   tabs('#popular-tires-tabs');
});


