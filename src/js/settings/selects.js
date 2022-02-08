import {Select} from '../components/select';
function selectSettings(){
   if (document.querySelector('.search-parameters')){
      new Select('#select-maker', {
         placeholder: 'Производитель',
         data: [
            {id: '1', value: 'пункт1'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт4'}
         ]
      });
      new Select('#select-model', {
         placeholder: 'Модель',
         data: [
            {id: '1', value: 'пункт1'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт3'}
         ],
         disabled: false
      });
      new Select('#select-generation', {
         placeholder: 'Поколение',
         data: [
            {id: '1', value: 'пункт1'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт3'}
         ],
         disabled: true
      });
      new Select('#select-modification', {
         placeholder: 'Модификация',
         data: [
            {id: '1', value: 'пункт1'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт3'}
         ],
         disabled: true
      });
      new Select('#select-car-body', {
         placeholder: 'Кузов',
         data: [
            {id: '1', value: 'пункт1'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт3'}
         ],
         disabled: true
         // selectedId: '3'
      });
   }

   if (document.querySelector('.catalog-content')){
      new Select('#select-width', {
         placeholder: 'Все',
         data: [
            {id: '1', value: 'Все'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт4'}
         ]
      });
      new Select('#select-profile', {
         placeholder: 'Все',
         data: [
            {id: '1', value: 'Все'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт4'}
         ]
      });
      new Select('#select-diameter', {
         placeholder: 'Все',
         data: [
            {id: '1', value: 'Все'},
            {id: '2', value: 'пункт2'},
            {id: '3', value: 'пункт4'}
         ]
      });
      new Select('#select-sort', {
         placeholder: 'Сначала дорогие',
         data: [
            {id: '1', value: 'Сначала дорогие'},
            {id: '2', value: 'Сначала дешевые'},
            {id: '3', value: 'Популярные'}
         ]
      });
   }
   
}
export default selectSettings;