#!/usr/bin/env node

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

// Variable "meinObjekt" als Konstante deklarieren
const meinObjekt = { vorname: "Hans",
                     nachname: "Meier" };

// Änderung einer Eigenschaft in von Konstante referenzierten
// Objekt ist KEIN Fehler!
meinObjekt.vorname = "Peter";

console.log(`\nVorname:  ${meinObjekt.vorname}`);
console.log( `Nachname: ${meinObjekt.nachname}\n`);


// Der Konstante darf kein neues/anderes Objekt zugewiesen
// werden; das Programm wird deshalb in der nächsten Zeile
// abbrechen.
meinObjekt = { vorname: "Alice" };
console.log(`\nVorname: ${meinObjekt.vorname}`);
console.log( `Nachname: ${meinObjekt.nachname}`);


console.log();
