
console.log();

let myVariable;

// myVariable is declared but not initialized
let description = typeof( myVariable );
console.log( myVariable + ": " + description );

myVariable = 42;
description = typeof( myVariable );
console.log( myVariable + ": " + description );

myVariable = 3.14;
description = typeof( myVariable );
console.log( myVariable + ": " + description );

myVariable = "DHBW KA";
description = typeof( myVariable );
console.log( myVariable + ": " + description );

myVariable = [ 1, 2, 3 ]; // Array
description = typeof( myVariable );
console.log( myVariable + ": " + description );

myVariable = { firstName: "Hans", lastName: "Wiwi" }; // JSON!
description = typeof( myVariable );
console.log( myVariable + ": " + description );

myVariable = null;
description = typeof( myVariable );  // also "object" for backward compatibility, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
console.log( myVariable + ": " + description );
