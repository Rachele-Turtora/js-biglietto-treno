"use strict"

const userChoice = prompt("scegli pari o dispari")
const userNum = Number(prompt("scegli un numero da 1 a 9"))
const computerNum = Math.floor(Math.random() * 9) + 1

console.log("Hai scelto", userChoice)
console.log("Il tuo numero è: ", userNum)
console.log("Il mio numero è: ", computerNum)

let final

if (((userNum + computerNum) % 2) === 0) {
    final = "pari"
} else {
    final = "dispari"
}

console.log("La somma è", final)

if (final === userChoice) {
    console.log("Bravo, hai vinto!")
} else {
    console.log("Ho vinto io")
}

