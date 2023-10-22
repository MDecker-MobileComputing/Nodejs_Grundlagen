
console.log();

const multipliziere1 = (a, b) => { return a*b; }

/**
 * Wenn die Funktion nur aus einer Anweisung besteht, und diese Anweisung
 * ein Wert zurück gibt, dann können wir die Schweifenklammer und das
 * "return" weglassen.
 */ 
const multipliziere2 = (a, b) => a*b;

const zahl1 = 2;
const zahl2 = 3;

console.log("Produkt 1: " + multipliziere1(2, 3));
console.log("Produkt 2: " + multipliziere2(2, 3));


console.log();