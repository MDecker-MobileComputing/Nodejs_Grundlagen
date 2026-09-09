
/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

console.log();

let myVariable;
let description = typeof(myVariable);
console.log( myVariable + ": " + description );

myVariable = 42;
description = typeof(myVariable);
console.log( myVariable + ": " + description );

myVariable = 3.14;
description = typeof(myVariable);
console.log( myVariable + ": " + description );

myVariable = "DHBW KA";
description = typeof(myVariable);
console.log( myVariable + ": " + description );

myVariable = [ 1, 2, 3 ]; // Array
description = typeof(myVariable);
console.log( myVariable + ": " + description );

myVariable = { firstName: "Hans", lastName: "Wiwi" }; // JSON!
description = typeof(myVariable);
console.log( myVariable + ": " + description );

myVariable = null;
description = typeof(myVariable);  // also "object" for backward compatibility, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
console.log( myVariable + ": " + description );


// Since ES6, there is also the type "Symbol", but it
// should not be covered here.
