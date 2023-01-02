const btnMenu = document.querySelector('.btn-menu')
const menuMobile = document.querySelector('.menu-mobile')
const iconMenu = document.querySelector('.icon-menu')
const topicosMenu = document.querySelectorAll('.topicos-menu')
const nomeVisitante = document.querySelector('.visitante')
const nomeAmigo = document.querySelector('.amigo')
const numeroTelefone = document.querySelector('.telefone')
const btnEnviar = document.querySelector('.btn-cv')

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

function enviarMenssagem() {
    let visitante = nomeVisitante.value
    let amigo = nomeAmigo.value
    let telefone = numeroTelefone.value
    let menssagem = encodeURIComponent(`Olá ${amigo}! ${visitante} nos contou que você é super fã da maior escola de bruxaria do mundo e por isso nossa corujinha trouxe esse link até você. Conheça nossa pagina e participe do nosso quiz para decobrir a qual casa você pertênce.
    https://mariferreiradev.github.io/clube-potterhead`)
    let url = (`https://api.whatsapp.com/send?phone=55${telefone}&text=${menssagem}`)
    window.open(url)
    
}

btnMenu.addEventListener('click', toggleMenu)
btnEnviar.addEventListener('click', enviarMenssagem)
