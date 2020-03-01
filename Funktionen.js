
/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

console.log();

// Funktion zum Addieren
function addieren(zahl1, zahl2) {

    return zahl1 + zahl2;
}

const summe = addieren(2, 3);
console.log(`Summe: ${summe}\n`);


// Funktion mit Default-Wert für zweiten Parameter
function subtrahieren(zahl1, zahl2 = 1) {

    return zahl1 - zahl2;
}

const differenz1 = subtrahieren(5, 2);
console.log(`differenz1: ${differenz1}`);

const differenz2 = subtrahieren(5);
console.log(`differenz2: ${differenz2}\n`);


// Eine Funktion kann auch einer Variablen zugewiesen werden

const multiplizieren =
      function(zahl1, zahl2) { // anonyme Funktion

          return zahl1*zahl2;
      }

const produkt = multiplizieren(2, 3);
console.log(`Produkt: ${produkt}\n`);


// Auch eine nicht-anonyme Funktion kann mit einer Variablen oder einer
// Konstante referenziert werden:
const funktion = addieren;
const summe2 = funktion(3, 4);
console.log(`Summe2:  ${summe2}\n`);

