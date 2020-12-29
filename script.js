// BURGER

const burgerButton = document.querySelector('.burger-button');
const wrapperBG = document.querySelector('.header-wrapper');
const mainNavigationBG = document.querySelector('.header-navigation__row');
const logo = document.querySelector('.header__logo');
const navigationItem = document.querySelectorAll('.header-navigation__item');
const navigation = document.querySelector('.header-navigation');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-button-active');
    wrapperBG.classList.toggle('header-wrapper-bg');
    mainNavigationBG.classList.toggle('header-navigation__row-bg');
    logo.classList.toggle('logo-bg');
    for (let index = 0; index < navigationItem.length; index++) {
        navigationItem[index].classList.toggle('header-navigation__item-bg');
};

    navigation.classList.toggle('header-navigation-bg');
});



// SLIIDER

let slideIndex = 1;

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName('slider__photo');

    if (n > slides.length) {
        slideIndex = 1
}
    if (n < 1) {
        slideIndex = slides.length
}

    for (let slide of slides) {
        slide.style.display = 'none';
}   
    slides[slideIndex - 1].style.display = 'block'; 
    slides[slideIndex - 1].style.animation = 'fade 2s';
}

showSlides(slideIndex);

const nextSlide = () => {
    showSlides(slideIndex += 1);
}

const previousSlide = () => {
    showSlides(slideIndex -= 1);  
}


// PORTFOLIO

const portfolioImg = document.querySelector('.grid-portfolio');

const buttonList = document.querySelector('.tab');
buttonList.addEventListener('click', (e) => {
    const activeButton = document.querySelector('.active');
    activeButton.classList.remove('active');
    const newActiveButton = e.target;
    newActiveButton.classList.add('active');
        for (let i = portfolioImg.children.length; i >= 0; i--) {
            portfolioImg.appendChild(portfolioImg.children[Math.floor(Math.random() * i)]);
        }
})

portfolioImg.addEventListener('click', (e) => {
    const activeImage = document.querySelector('.grid-portfolio > img');
        if (portfolioImg.contains(activeImage)) {
            activeImage.classList.remove('.grid-portfolio > img');
        }
        e.target.parentNode.classList.add('.grid-portfolio > img');
});
