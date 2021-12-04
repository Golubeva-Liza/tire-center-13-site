const getSelect = (placeholder = 'Выберите элемент', data, selectedId) => {
   const selectItems = data.map(item => {
      let cls = '';
      if (item.id === selectedId){
         placeholder = item.value;
         cls = 'selected';
      }
      return `
         <li class="select__item ${cls}" data-type="select-item" data-id="${item.id}">${item.value}</li>
      `
   })
   //возвращает массив, будет выводиться с запятыми

   return `
      <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input">
         <span data-type="value">${placeholder}</span>
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.72499L3.54236 7L8 9.91976L12.4576 7L13 7.72499L8 11L3 7.72499Z" fill="#1A1E29"/>
         </svg>
      </div>
      <div class="select__dropdown">
         <ul class="select__list">
            ${selectItems.join('')}
         </ul>
      </div>
   `
}

export class Select{
   constructor(selector, options){ 
      this.select = document.querySelector(selector);
      this.options = options;
      this.selectedId = options.selectedId;
      this.disabled = options.disabled;

      this.#render();//настройка выводимого шаблона
      this.#setup();//настройка работы
   }

   //приватный метод
   #render(){
      const {placeholder, data} = this.options;
      this.select.classList.add('select');
      if (this.disabled){
         this.select.classList.add('select_disabled');
      }
      this.select.innerHTML = getSelect(placeholder, data, this.selectedId);
   }

   #setup(){
      if (this.disabled){
         return;
      }
      this.clickSelect = this.clickSelect.bind(this);//иначе теряется контекст вызова
      this.select.addEventListener('click', this.clickSelect);
      this.value = this.select.querySelector('[data-type="value"]');
   }

   clickSelect(e){
      const {type} = e.target.dataset;
      
      if (type === 'input'){
         this.select.classList.toggle('select_open');
      } else if (type === 'select-item'){
         const id = e.target.dataset.id;
         this.changeValue(e.target, id);
      } else if (type === 'backdrop'){
         this.select.classList.remove('select_open');
      }
   }

   changeValue(elem, id){
      // const current = this.options.data.find(item => item.id === id);
      this.value.textContent = elem.textContent;
      this.select.classList.remove('select_open');

      this.select.querySelectorAll('[data-type="select-item"]').forEach(elem => {
         elem.classList.remove('selected');
      });
      this.select.querySelector(`[data-id="${id}"]`).classList.add('selected');
   }

   destoy(){
      this.select.removeEventListener('click', this.clickSelect)
   }

}