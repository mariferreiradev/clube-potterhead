const btnMenu = document.querySelector('.btn-menu')
const menuMobile = document.querySelector('.menu-mobile')
const iconMenu = document.querySelector('.icon-menu')

let isMenuOpen = false

function toggleMenu(){
    if (isMenuOpen === true) {
        iconMenu.setAttribute('src', '/assets/img/icon-menu.png')
        isMenuOpen = false
        menuMobile.classList.add('hidden')
    } else {
        iconMenu.setAttribute('src', '/assets/img/icon-x.png')
        isMenuOpen = true
        menuMobile.classList.remove('hidden')
    }
     
}

btnMenu.addEventListener('click', toggleMenu)