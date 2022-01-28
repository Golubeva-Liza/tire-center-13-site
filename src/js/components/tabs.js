function tabs(selector){
   const tabs = document.querySelector(selector);

   if (tabs){
      const tabsContents = tabs.querySelectorAll('.tabs__content');
      const tabsBtns = tabs.querySelectorAll('.tabs__btn');

      tabs.addEventListener('click', (e) => {
         if (e.target.classList.contains('tabs__btn')){
            const tabName = e.target.getAttribute('data-tabs-btn');

            //скрываем все элементы каталога и класс активности у кнопок
            tabsContents.forEach((el) => {
               el.classList.remove('tabs__content_active');
            });
            tabsBtns.forEach((el) => {
               el.classList.remove('tabs__btn_active');
            });

            //показываем выбранный контент и делаем кнопку активной
            const activeTab = tabs.querySelector(`[data-tabs-target="${tabName}"]`);
            activeTab.classList.add('tabs__content_active');
            e.target.classList.add('tabs__btn_active')
         }
      })
   }
}
export default tabs;