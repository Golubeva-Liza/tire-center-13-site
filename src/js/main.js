import {Select} from './components/select';
import headerSelect from './components/headerSelect';


//settings
new Select('#select-maker', {
   placeholder: 'Производитель',
   data: [
      {id: '1', value: 'пункт1'},
      {id: '2', value: 'пункт2'},
      {id: '3', value: 'пункт3'}
   ]
});
new Select('#select-model', {
   placeholder: 'Модель',
   data: [
      {id: '1', value: 'пункт1'},
      {id: '2', value: 'пункт2'},
      {id: '3', value: 'пункт3'}
   ],
   disabled: true
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



//functions
headerSelect();

