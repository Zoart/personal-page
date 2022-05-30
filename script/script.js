let item_show = document.getElementsByClassName('item__show');
let iframe = document.getElementsByClassName('cards_iframe');

const projects_id = ['Notes', 'Calculator', 'How to learn',
"How to learn (BEM)", "Russian travel", "Download/crop(PHP)",
]

let git_btn = document.getElementsByClassName('cards__github');

let close_project = document.getElementsByClassName('project-card__close')
let projec_card = document.getElementsByClassName('project-card');
let cards_btn = document.getElementsByClassName('cards__btn')
let sheet = document.querySelector('.sheet')

// close project card
for (let i = 0; i < close_project.length; i++)
{
  close_project[i].addEventListener('click', () =>
  {
    projec_card[i].style.display = 'none';
    sheet.style.display = 'block';
    menu.style.display = 'inline';

  })
}

for (let i = 0; i < projects_id.length; i++)
{
    let project_card_id = document.getElementById(projects_id[i]);
    cards_btn[i].addEventListener('click', () =>
    {
      menu.style.display = 'none';
      project_card_id.style.display = 'flex';
      sheet.style.display = 'none';
    })
}


