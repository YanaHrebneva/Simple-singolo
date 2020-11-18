// BURGER

const burgerButton = document.querySelector(".burger-button");
const wrapperBG = document.querySelector(".header-wrapper");
const mainNavigationBG = document.querySelector(".header-navigation__row");
const logo = document.querySelector(".header__logo");
const navigationItem = document.querySelectorAll(".header-navigation__item");
const navigation = document.querySelector(".header-navigation");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-button-active");
  wrapperBG.classList.toggle("header-wrapper-bg");
  mainNavigationBG.classList.toggle(".header-navigation__row-bg");
  logo.classList.toggle("logo-bg");
  // for (let index = 0; index < navigationItem.length; index++) {
  //   navigationItem[index].classList.toggle("header-navigation__item-bg");
  // };
  
  navigation.classList.toggle("header-navigation-bg");
});




// SLIIDER

const arrowLeft = document.querySelector('.slider__arrow--left');
const arrowRight = document.querySelector('.slider__arrow--right');
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__photo');

let counter = 0;
images[counter].style.display = 'block';

arrowRight.addEventListener('click', () => {
  let nextIndex = counter + 1;

  if (nextIndex >= images.length) {
    nextIndex = 0;
  }

  const next = images[nextIndex];
  sliderLine.append(next);
  next.style.display = 'block';
  next.style.animation = 'moveRight 1s';

  counter += 1;
  if (counter >= images.length) {
    counter = 0;
  }
});

arrowLeft.addEventListener('click', () => {
  let prevIndex = counter - 1;

  if (prevIndex < 0) {
    prevIndex = images.length - 1;
  }

  const prev = images[prevIndex];
  sliderLine.append(prev);
  prev.style.display = 'block';
  prev.style.animation = 'moveLeft 1s';

  counter -= 1;
  if (counter < 0) {
    counter = images.length - 1;
  }
});



// PORTFOLIO

const portfoliotabs = document.getElementById('portfolio-tabs');
const portfoliorandom = document.getElementById('portfolio-random');
let arr1 = portfoliorandom.querySelectorAll('img');
let a = 0;
let arr2 = [];

for(var i = arr1.length - 1; i >= 0; i--){
        arr2[i] = a;
}
portfoliotabs.querySelectorAll('li').forEach(el => {
el.addEventListener('click', (event) =>{
    portfoliotabs.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    portfoliorandom.querySelectorAll('img').forEach(el => el.remove());
    for (var i = arr1.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    while (i < arr1.length) {
        var j = Math.floor(Math.random() * (arr1.length));
        if (arr2[j] == a){
            arr2[j] = a + 1;
            portfoliorandom.prepend(arr1[j]);
            ++i;
        }
    }
    ++a;   
});
});
