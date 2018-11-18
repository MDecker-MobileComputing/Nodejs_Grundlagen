#!/usr/bin/env node

/*jshint esversion: 6 */

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


console.log();

// Konstruktor-Funktion, muss mit vorangestelltem "new" aufgerufen werden.
// Beispiel: new Rechteck(2, 4)
function Rechteck(laenge, breite) {

    this.laenge = laenge;
    this.breite = breite;

    /*
    this.getFlaeche = function(){ return   this.laenge *   this.breite; };
    this.getUmfang  = function(){ return 2*this.laenge + 2*this.breite; };
    */
}


// Methoden für Klasse Rechteck definieren
Rechteck.prototype.getFlaeche = function(){ return   this.laenge *   this.breite; };
Rechteck.prototype.getUmfang  = function(){ return 2*this.laenge + 2*this.breite; };



// Zwei Rechteck-Objekte erzeugen
const rechteck1 = new Rechteck(2, 3);
const rechteck2 = new Rechteck(1, 2);


// Eigenschaften der Rechteck-Objekte ausgeben
console.log(`Rechteck 1: Länge=${rechteck1.laenge}, Breite=${rechteck1.breite}.`);
console.log(`Rechteck 2: Länge=${rechteck2.laenge}, Breite=${rechteck2.breite}.\n`);


// Flächen der Rechteck-Objekte ausgeben
const flaeche1 = rechteck1.getFlaeche();
const flaeche2 = rechteck2.getFlaeche();
console.log(`Fläche von Rechteck 1: ${flaeche1}.`);
console.log(`Fläche von Rechteck 2: ${flaeche2}.\n`);


// Umfänge der Rechteck-Objekte ausgeben
const umfang1 = rechteck1.getUmfang();
const umfang2 = rechteck2.getUmfang();
console.log(`Umfang von Rechteck 1: ${umfang1}.`);
console.log(`Umfang von Rechteck 2: ${umfang2}.\n`);


if (rechteck1.getFlaeche === rechteck2.getFlaeche) {
    console.log("Selbe getFlaeche()-Methoden.");
} else {
    console.log("Unterschiedliche getFlaeche()-Methoden.");
}

if (rechteck1.getUmfang === rechteck2.getUmfang) {
    console.log("Selbe getUmfang()-Methoden.\n");
} else {
    console.log("Unterschiedliche getUmfang()-Methoden.\n");
}


// *** Ab hier: Unterklasse "Quader" ("erbt" von Klasse "Rechteck") ***

function Quader(laenge, breite, hoehe) {
	Rechteck.call(this, laenge, breite);
	this.hoehe = hoehe;
}

Quader.prototype = Object.create(Rechteck.prototype);
Quader.prototype.getVolumen = function() { return this.getFlaeche()*this.hoehe; };

const quader1 = new Quader(2, 3, 10);

const volumenQuader = quader1.getVolumen();
console.log(`\nVolumen von Quader: ${volumenQuader}.\n`);
