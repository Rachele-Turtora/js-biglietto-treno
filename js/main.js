"use strict"

const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

let standardPrice = km * 0.21;
let finalPrice;

if (age < 18) {
    finalPrice = (standardPrice * (100 - 20)) / 100;
} else if (age > 65) {
    finalPrice = (standardPrice * (100 - 40)) / 100;
} else {
    finalPrice = standardPrice;
}

finalPrice = finalPrice.toFixed(2);

console.log(finalPrice);
