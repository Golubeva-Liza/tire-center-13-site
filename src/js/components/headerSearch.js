function headerSelect(){
   const searchIcon = document.querySelector('.header-search__icon');
   console.log(searchIcon);
   
   searchIcon.addEventListener('click', () => {
      searchIcon.closest('.header-search').classList.toggle('header-search_active');
   });
}
export default headerSelect;