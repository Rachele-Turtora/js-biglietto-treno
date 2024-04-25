"use strict"

// Taking user input
const userChoice = prompt("scegli pari o dispari").toLowerCase();
if (userChoice === "pari" || userChoice === "dispari") {

    const userNum = Number(prompt("scegli un numero da 1 a 9"));
    if ((!isNaN(userNum)) && (userNum >= 1 && userNum <= 9)) {

        // Generating random number
        const computerNum = Math.ceil(Math.random() * 9);

        console.log("Hai scelto", userChoice);
        console.log("Il tuo numero è: ", userNum);
        console.log("Il mio numero è: ", computerNum);

        // Calculating the sum
        const sum = userNum + computerNum;

        let winningChoice;

        // Defining if the sum is even or odd
        if (((sum) % 2) === 0) {
            winningChoice = "pari";
        } else {
            winningChoice = "dispari";
        }

        console.log(`La somma è ${sum}, un numero ${winningChoice}`);

        // Definig who the winner is
        if (winningChoice === userChoice) {
            console.log("Bravo, hai vinto!");
        } else {
            console.log("Peccato, hai perso!");
        }

    } else {
        console.log("Scegli un numero da 1 a 9");
    }

} else {
    console.log("Scrivi 'pari' o 'dispari'");
}

