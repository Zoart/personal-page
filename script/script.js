const page = document.getElementById("page");
const themeButton = document.getElementById("light");
let cards_github = document.getElementsByClassName('cards__githab');
const projects_button = document.querySelector('.projects-button');
const menu_image = document.querySelector('.menu__image');
let menu_link = document.getElementsByClassName('menu__link');



themeButton.addEventListener('click', () => {
  let class_list = page.classList
  if (class_list.contains('white-theme'))
  {
    class_list.replace('white-theme', 'dark-theme');

    themeButton.style.boxShadow = "0 -6px 9px white, 0 6px 9px white, 6px 0 9px white, -6px 0 9px white"
    themeButton.style.backgroundColor = 'white';

    // menu
    menu_image.style.color = 'white';
    menu_image.style.backgroundColor = 'rgb(34, 31, 31)';
    for (let i = 0; i < menu_link.length; i++)
    {
      menu_link[i].style.color = 'white';
    }

    // project button
    if (projects_button) {
      projects_button.style.backgroundColor = 'white';
      projects_button.style.color = 'black';
      projects_button.style.boxShadow = '0 0 10px 3px white';
    }
    for (let i = 0; i<cards_github.length; i++)
    {
     cards_github.style.backgroundColor = 'white';
    }
  }
  else
  {
    class_list.replace('dark-theme', 'white-theme');

    themeButton.style.boxShadow = "0 -6px 9px black, 0 6px 9px black, 6px 0 9px black, -6px 0 9px black"
    themeButton.style.backgroundColor = 'black';

    // menu
    menu_image.style.color = 'black';
    menu_image.style.backgroundColor = 'white';
    for (let i = 0; i < menu_link.length; i++)
    {
      menu_link[i].style.color = 'black';
    }

    // project button
    if (projects_button) {
      projects_button.style.backgroundColor = 'black';
      projects_button.style.color = 'white';
      projects_button.style.boxShadow = '0 0 10px 3px black';
    }

    for (let i = 0; i<cards_github.length; i++)
    {
     cards_github[i].style.backgroundColor = 'black';
    }
  }
})

