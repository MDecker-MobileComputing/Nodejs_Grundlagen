#!/usr/bin/env node

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

console.log();

let meineVariable;
let beschreibung = typeof(meineVariable);
console.log( meineVariable + ": " + beschreibung );

meineVariable = 42;
beschreibung = typeof(meineVariable);
console.log( meineVariable + ": " + beschreibung );

meineVariable = 3.14;
beschreibung = typeof(meineVariable);
console.log( meineVariable + ": " + beschreibung );

meineVariable = "DHBW KA";
beschreibung = typeof(meineVariable);
console.log( meineVariable + ": " + beschreibung );

meineVariable = [ 1, 2, 3 ]; // Array
beschreibung = typeof(meineVariable);
console.log( meineVariable + ": " + beschreibung );

meineVariable = { vorname: "Hans", nachname: "Wiwi" }; // JSON!
beschreibung = typeof(meineVariable);
console.log( meineVariable + ": " + beschreibung );

meineVariable = null;
beschreibung = typeof(meineVariable);  // auch "object" wegen Abwärtskompatibilität, siehe https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
console.log( meineVariable + ": " + beschreibung );


// Es gibt seit ES6 noch den Typ Symbol, der hier aber
// nicht behandelt werden soll.
