const btnMenu = document.querySelector('.btn-menu')
const menuMobile = document.querySelector('.menu-mobile')
const iconMenu = document.querySelector('.icon-menu')
const topicosMenu = document.querySelectorAll('.topicos-menu')

let isMenuOpen = false

function toggleMenu(){
    if (isMenuOpen === true) {
        iconMenu.setAttribute('src', './assets/img/icon-menu.webp')
        isMenuOpen = false
        menuMobile.classList.add('hidden')
    } else {
        iconMenu.setAttribute('src', './assets/img/icon-x.webp')
        isMenuOpen = true
        menuMobile.classList.remove('hidden')
    }  
}

topicosMenu.forEach((topicosMenu) => {
    topicosMenu.addEventListener('click', toggleMenu)
});

btnMenu.addEventListener('click', toggleMenu)
