const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

function handleTryClick(event) {
    event.preventDefault()
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