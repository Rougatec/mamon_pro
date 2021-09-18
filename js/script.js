"use strict"

// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (
//             isMobile.Android() ||
//             isMobile.BlackBerry() ||
//             isMobile.iOS() ||
//             isMobile.Opera() ||
//             isMobile.Windows());

//     }
// }

// Меню бургер 
const iconMenu = document.querySelector('.menu__icon'); //наш бургер
const menuBody = document.querySelector('.menu'); //наш див со списком из хэдера
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock'); //чтобы при открытом меню не скроллилась страница
        iconMenu.classList.toggle('_active'); //при клике появляется/убирается класс _active
        menuBody.classList.toggle('_active');
    });
}
