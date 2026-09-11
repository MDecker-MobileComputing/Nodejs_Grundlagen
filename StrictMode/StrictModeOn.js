"use strict";

// In strict mode the execution of the whole file is prevented, so
// the lines before the line with the syntax error won't be shown.
console.log( "\nProgram executed in strict mode." );

// Creating an implicit global variable (not declared with var/let/const)
implicitGlobal = 123; // Execution is aborted here with a ReferenceError.

console.log( `\nValue of implicitGlobal:${implicitGlobal}` );
