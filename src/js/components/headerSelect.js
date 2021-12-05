function headerSelect(){
   const header = document.querySelector('.header');
   const menuBtns= header.querySelectorAll('[data-menu-item]');
   const submenu= header.querySelectorAll('[data-submenu-item]');

   menuBtns.forEach(item => {
      item.addEventListener('click', () => {
         const currentMenuName = item.getAttribute('data-menu-item');
         const currentDrop = header.querySelector(`[data-submenu-item = "${currentMenuName}"]`);

         menuBtns.forEach(el => {
            if (el !== item){
               el.classList.remove('active');
            }
         });

         submenu.forEach(el => {
            if (el !== currentDrop){
               el.classList.remove('sub-menu_active');
            }
         });

         currentDrop.classList.toggle('sub-menu_active');
         item.classList.toggle('active');

         document.addEventListener('click', closeSubMenu);
      })
   })

   function closeSubMenu (e){

      if (!e.target.closest('.header__menu-item') && !e.target.closest('.header__mobile-btn') && !e.target.closest('.authorization')){
         // console.log('закрыть');

         menuBtns.forEach(el => {
            el.classList.remove('active');
         });

         submenu.forEach(el => {
            el.classList.remove('sub-menu_active');
         });

         document.removeEventListener('click', closeSubMenu);
      }
   }
}
export default headerSelect;