const quiz = document.querySelector('.questions')
const header = document.querySelector('.title-quiz')
const casaGrifinoria = document.querySelector('.grifinoria')
const casaSonserina = document.querySelector('.sonserina')
const casaCorvinal = document.querySelector('.corvinal')
const casaLufaLufa = document.querySelector('.lufa-lufa')
const footer = document.querySelector('.footer-ph')

function resultQuiz(e) {
    e.preventDefault()
    const formData = new FormData (e.target)
    const formProps = Object.fromEntries (formData)
    const casas = Object.values(formProps)

    let grifinoria = 0
    let sonserina = 0
    let corvinal = 0
    let lufaLufa = 0 

    casas.forEach((casa) => {
        if (casa === 'grifinoria') {
            grifinoria ++
        } else if (casa === 'sonserina') {
            sonserina ++
        } else if (casa === 'corvinal') {
            corvinal ++
        } else if (casa === 'lufa-lufa') {
            lufaLufa ++
        }
    });

    if (grifinoria >= sonserina && grifinoria >= corvinal && grifinoria >= lufaLufa){
        footer.classList.add('hidden')
        header.classList.add('hidden')
        quiz.classList.add('hidden')
        casaGrifinoria.classList.remove('hidden')
    } else if (sonserina >= grifinoria && sonserina >= corvinal && sonserina >= lufaLufa) {
        footer.classList.add('hidden')
        header.classList.add('hidden')
        quiz.classList.add('hidden')
        casaSonserina.classList.remove('hidden')
    } else if (corvinal >= grifinoria && corvinal >= sonserina && corvinal >= lufaLufa) {
        footer.classList.add('hidden')
        header.classList.add('hidden')
        quiz.classList.add('hidden')
        casaCorvinal.classList.remove('hidden')
    } else if (lufaLufa >= grifinoria && lufaLufa >= sonserina && lufaLufa >= corvinal) {
        footer.classList.add('hidden')
        header.classList.add('hidden')
        quiz.classList.add('hidden')
        casaLufaLufa.classList.remove('hidden')
    }
}

quiz.addEventListener('submit', resultQuiz)