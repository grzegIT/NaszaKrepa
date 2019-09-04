window.addEventListener('load', () => {

    let menuBtn = document.getElementById('nav__btn');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('btn--open');
        document.querySelector('.navigation__elements').classList.toggle('open');
    });

    let intro = document.querySelector('.intro');
    let header = document.querySelector('.header').clientHeight;

});