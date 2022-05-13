const page = document.getElementById("page");
const themeButton = document.getElementById("light");
const cards_github = document.getElementsByClassName('cards__githab')
const projects_button = document.querySelector('.projects-button');

themeButton.addEventListener('click', () => {
  // page.classList.toggle("dark-theme");
  // page.classList.toggle("black-theme");
  let class_list = page.classList
  if (class_list.contains('white-theme'))
  {
    class_list.replace('white-theme', 'dark-theme');

    themeButton.style.boxShadow = "0 -6px 9px white, 0 6px 9px white, 6px 0 9px white, -6px 0 9px white"
    themeButton.style.backgroundColor = 'white';

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

    if (projects_button) {
      projects_button.style.backgroundColor = 'black';
      projects_button.style.color = 'white';
      projects_button.style.boxShadow = '0 0 10px 3px black';
    }

    for (let i = 0; i<cards_github.length; i++)
    {
     cards_github.style.backgroundColor = 'black';
    }
  }
})

