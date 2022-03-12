"use strict"

// Меню Бургер

const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__nav');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Закривання меню

const menuLinks = document.querySelectorAll('.header__list-item');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkCLick);
    });
    
    function onMenuLinkCLick(e) {
        const menuLink = e.target;
        if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }
    }
}
