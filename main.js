// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

// Funções
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão
    const inputNumber = document.querySelector("#inputNumber")
    
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick () {
    toggleScreen()
    xAttempts = 1
    generateNumber()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterKey(event) {
    if ((event.key == 'Enter') && (screen1.classList.contains('hide'))) {
        handleResetClick()
    }
}

function generateNumber() {
    randomNumber = Math.round(Math.random() * 10)
    return randomNumber
}

/* ==========> Antes de refatorar

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// função callback
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão
    const inputNumber = document.querySelector("#inputNumber")
    
    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)`
    }

    inputNumber.value = ""
    xAttempts++
}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
})

*/

/* ==========> Opcão enter em tentar novamente

document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        handleResetClick()
    }
})

*/

/* ==========> Solução para a opção enter em tentar novamente

document.addEventListener('keydown', enterKey)

function enterKey(event) {
    if ((event.key == 'Enter') && (screen1.classList.contains('hide'))) {
        handleResetClick()
    }
}

*/

/* ==========> Solução para gerar um novo número aleatório

function handleResetClick () {
    toggleScreen()
    xAttempts = 1
    generateNumber()
}

function generateNumber() {
    randomNumber = Math.round(Math.random() * 10)
    return randomNumber
}

*/