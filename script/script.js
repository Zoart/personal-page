const page = document.getElementById("page");
const themeButton = document.getElementById("light");
const cards_github = document.getElementsByClassName('cards__githab')

themeButton.addEventListener('click', () => {
  // page.classList.toggle("dark-theme");
  // page.classList.toggle("black-theme");
  let class_list = page.classList
  if (class_list.contains('white-theme'))
  {
    class_list.replace('white-theme', 'dark-theme');
    themeButton.style.boxShadow = "0 -6px 9px white, 0 6px 9px white, 6px 0 9px white, -6px 0 9px white"
    themeButton.style.backgroundColor = 'white';
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
    for (let i = 0; i<cards_github.length; i++)
    {
     cards_github.style.backgroundColor = 'black';
    }
  }
})

