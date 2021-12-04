function headerSelect(){
   const header = document.querySelector('.header');
   const menuItems = header.querySelectorAll('[data-menu-item]');

   menuItems.forEach(item => {
      item.addEventListener('click', () => {
         const menuName = item.getAttribute('data-menu-item');
         header.querySelector(`[data-submenu-item = "${menuName}"]`).classList.toggle('sub-menu_active');
         item.classList.toggle('active');

         // document.addEventListener('click', closeSubMenu);
      })
   })

   function closeSubMenu (e){
      console.log(e.target);

      const openedSubMenu = header.querySelector('.sub-menu_active');
      const openedMenu = header.querySelector('.header__menu-item_active');
      if (openedSubMenu){
         const openedSubMenuVal = openedSubMenu.getAttribute('data-submenu-item');

         if (!e.target.classList.contains('sub-menu') && !e.target.closest('.sub-menu') && e.target.getAttribute('data-menu-item') != openedSubMenuVal){
            console.log('закрыть');
            header.querySelector(`[data-submenu-item = "${openedSubMenuVal}"]`).classList.remove('sub-menu_active');
            openedMenu.classList.remove('header__menu-item_active');
            // if (openedSubMenuVal != "account"){
            //    openedMenu.classList.remove('header__menu-item_active');
            // } else {
            //    openedMenu.classList.remove('header__account_active');
            // }
            document.removeEventListener('click', closeSubMenu);
         } 
      }
   }
}
export default headerSelect;