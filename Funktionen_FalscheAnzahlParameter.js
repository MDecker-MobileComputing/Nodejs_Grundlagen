#!/usr/bin/env node

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

 
function addieren(zahl1, zahl2) { 
    return zahl1 + zahl2;
}

const summe1 = addieren(1);
console.log(`\nSumme1: ${summe1}`);

const summe2 = addieren(1, 2, 3);
console.log(`\nSumme2: ${summe2}`);

console.log();
