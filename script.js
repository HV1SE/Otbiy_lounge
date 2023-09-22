const menu = document.querySelector('.section1-menu');
const toggle = document.querySelector('.section1-menu-toggle');
  toggle.onclick = function (){
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
  }