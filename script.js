let menuBtn = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.menu_close');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})
menuClose.addEventListener('click', function () {
    menu.classList.toggle('active');
})