#!/usr/bin/env node

/*
 * Demonstration für break & continue:
 * Continue: Springt direkt zum nächsten Durchlauf der Schleife.
 * Break: Verlässt die Schleife.
 * 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

console.log();

let x = 0;
while (true) {
    x++;

    if (x === 3) { continue; }
    if (x === 5) { break; }

    console.log(x);
}

console.log();
