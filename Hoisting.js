#!/usr/bin/env node

/*
 * Hoisting-Beispiel: Die Variable "x1" wird erst nach der Zuweisung
 * und Verwendung mit dem Schlüsselwort "var" deklariert.
 *
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

x1 = 42; 
console.log(`\nx1=${x1}\n`);

var x1; 

