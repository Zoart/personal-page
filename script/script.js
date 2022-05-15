let item_show = document.getElementsByClassName('item__show');
let iframe = document.getElementsByClassName('cards_iframe');

let btn_show = document.getElementsByClassName('buttons__show');
let btn_hide = document.getElementsByClassName('buttons__hide');

let git_btn = document.getElementsByClassName('cards__github');

let aye = document.getElementsByClassName('bi-caret-down');


for (let i = 0; i < btn_show.length; i++)
{
  btn_show[i].addEventListener('click', () => {
    document.getElementById(i + 1).style.display = 'inline';
    btn_hide[i].style.display = 'inline';
    btn_show[i].style.display = 'none';
    git_btn[i].style.display = 'inline';
  });
  btn_hide[i].addEventListener('click', () => {
    document.getElementById(i + 1).style.display = 'none';
    btn_hide[i].style.display = 'none';
    btn_show[i].style.display = 'inline';
    git_btn[i].style.display = 'none';
  });
}


