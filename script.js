let menuBtn = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.menu_close');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})
menuClose.addEventListener('click', function () {
    menu.classList.toggle('active');
})



let filterBtn = document.querySelector('.filter_menu');
let block = document.querySelector('.filter_block');
let filterClose = document.querySelector('.filter_block_heading');

filterBtn.addEventListener('click', function () {
    block.classList.toggle('active');
})
filterClose.addEventListener('click', function () {
    block.classList.toggle('active');

})