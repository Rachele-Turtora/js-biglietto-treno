"use strict"

// Asking km and age
const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

// Calculating the standard price
let standardPrice = km * 0.21;

let finalPrice;

// Calculating discount
if (age < 18) {
    finalPrice = (standardPrice * (100 - 20)) / 100;
} else if (age > 65) {
    finalPrice = (standardPrice * (100 - 40)) / 100;
} else {
    finalPrice = standardPrice;
}

// Printing the final price
console.log(`Il prezzo del tuo biglietto è: ${finalPrice.toFixed(2)}€`);
