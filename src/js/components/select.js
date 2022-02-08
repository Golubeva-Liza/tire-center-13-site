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
      <div class="select__input" data-type="input">
         <span data-type="value">${placeholder}</span>
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
      }

      if (type === 'input' && e.target.closest('.select').classList.contains('select_open')){
         this.closeSelect = this.closeSelect.bind(this);
         document.addEventListener('click', this.closeSelect);
      }
   }

   changeValue(elem, id){
      // const current = this.options.data.find(item => item.id === id);
      this.value.textContent = elem.textContent;
      this.select.classList.remove('select_open');
      document.removeEventListener('click', this.closeSelect);//чтобы не создавалось много обработчиков

      this.select.querySelectorAll('[data-type="select-item"]').forEach(elem => {
         elem.classList.remove('selected');
      });
      this.select.querySelector(`[data-id="${id}"]`).classList.add('selected');
   }

   destroy(){
      this.select.removeEventListener('click', this.clickSelect)
   }

   closeSelect(e){
      // console.log('открыто');
      //если был нажат не селект или если открытый селект не совпадает с нажатым
      if (!e.target.closest('.select') || e.target.closest('.select').id != this.select.id){
         this.select.classList.remove('select_open');
         // console.log('закрыто');
         document.removeEventListener('click', this.closeSelect);
      }
   }
}