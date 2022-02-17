(function changePageColor() {
  const page = document.querySelector(".page");
  const themeButton = document.querySelector(".light");

  themeButton.onclick = function() {
    page.classList.toggle("dark-theme");
    page.classList.toggle("white-theme");
  }
})();

