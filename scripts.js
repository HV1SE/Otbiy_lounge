const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];
const Drinks = document.querySelector('#drinks');
const Alcohol = document.querySelector('.alcohol');
const Food = document.querySelector('#food');
const Dishes = document.querySelector('.dishes');
const Anima = document.querySelector('#anima');
const Mana = document.querySelector('.mana');

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})

  let toggle = document.querySelector('section1-menu-toggle');
  let menu = document.querySelector("section1-menu-items");
    toggle.onclick = function (){
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
      wrapMenu();
    }


Drinks.addEventListener('click', () => {
  drinksOnOff();
})
Food.addEventListener('click', () => {
  foodOnOff();
})

Anima.addEventListener('click', () => {
  animaOnOff();
})

function wrapMenu() {
  Alcohol.classList.remove('active');
  Dishes.classList.remove('active');
  Mana.classList.remove('active');
  Drinks.classList.remove('active');
  Anima.classList.remove('active');
  Food.classList.remove('active');
}

function animaOnOff() {
  Dishes.classList.remove('active');
  Alcohol.classList.remove('active');
  Mana.classList.toggle('active');
  Drinks.classList.remove('active');
  Food.classList.remove('active');
  Anima.classList.toggle('active');
}

function foodOnOff()  {
  Mana.classList.remove('active');
  Alcohol.classList.remove('active');
  Dishes.classList.toggle('active');
  Drinks.classList.remove('active');
  Anima.classList.remove('active');
  Food.classList.toggle('active');
}

function drinksOnOff() {
  Mana.classList.remove('active');
  Dishes.classList.remove('active');
  Alcohol.classList.toggle('active');
  Anima.classList.remove('active');
  Food.classList.remove('active');
  Drinks.classList.toggle('active');
}

