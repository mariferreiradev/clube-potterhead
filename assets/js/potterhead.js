const btnMenu = document.querySelector('.btn-menu')
const menuMobile = document.querySelector('.menu-mobile')

let isMenuOpen = false

function toggleMenu(){
    if (isMenuOpen) {
        btnMenu.setAttribute('src', '/clube-potterhead/assets/img/icon-menu.png')
        isMenuOpen = false
    } else {
        btnMenu.setAttribute('src', '/clube-potterhead/assets/img/icon-x.png')
        isMenuOpen = true
    }
     
}

btnMenu.addEventListener('click', toggleMenu)