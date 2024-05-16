const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const bars = document.querySelector('.icon-bars');
const close = document.querySelector('.icon-close');

hamburger.addEventListener('click',displayMenu);
menu.addEventListener('click',displayMenu);

function displayMenu(){
    if(menu.classList.contains('tampil')){
        menu.classList.remove('tampil');
        bars.style.display='inline';
        close.style.display='none';
    } else{
        menu.classList.add('tampil');
        bars.style.display='none';
        close.style.display='inline';
    }
}