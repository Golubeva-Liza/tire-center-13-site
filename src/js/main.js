import Ellipsis from './ellipsis.min';
import headerSelect from './components/headerSelect';
import headerSearch from './components/headerSearch';
import tabs from './components/tabs';
import mainSlider from './components/mainSlider';

import selectSettings from './settings/selects';




document.addEventListener('DOMContentLoaded', () => {

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
         // debounce: 0,
         responsive: true,
         className: '.clamp-3', 
         lines: 3, 
         break_word: false //!!default the ellipsis can truncate words
       }
   );
   mainSlider();


   //functions
   headerSelect();
   headerSearch();
   tabs('#popular-tires-tabs');
});


