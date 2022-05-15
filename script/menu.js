let menu_btn_hide = document.querySelector('.menu__button');
let menu = document.querySelector('.menu');
let show_menu= document.querySelector('.menu__image_abs');

menu_btn_hide.addEventListener('click', () => {
  menu.style.display = 'none';
  show_menu.style.display = 'inline';
})

show_menu.addEventListener('click', () => {
  menu.style.display = 'inline';
  show_menu.style.display = 'none';
})
