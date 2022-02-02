function nestedMenu(selector){
   const section = document.querySelector(selector);
   const menuBtns= section.querySelectorAll('[data-menu-item]');
   const submenu= section.querySelectorAll('[data-submenu-item]');

   menuBtns.forEach(item => {
      item.addEventListener('click', () => {
         const currentMenuName = item.getAttribute('data-menu-item');
         const currentDrop = section.querySelector(`[data-submenu-item = "${currentMenuName}"]`);

         if (!section.querySelector('[data-menu-item="menu"]') || !section.querySelector('[data-menu-item="menu"]').classList.contains('active')){
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
         }

         currentDrop.classList.toggle('sub-menu_active');
         item.classList.toggle('active');

         document.addEventListener('click', closeSubMenu);
      })
   })

   function closeSubMenu (e){
      if (!e.target.closest('.header__menu') && !e.target.closest('.header__mobile-btn') && !e.target.closest('.authorization') && !e.target.closest('.footer')){
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
export default nestedMenu;