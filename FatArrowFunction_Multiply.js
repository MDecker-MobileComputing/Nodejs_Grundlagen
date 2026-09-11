
console.log();

const multiply1 = (a, b) => { return a*b; }

/**
 * If the function consists of only one statement, and that statement
 * returns a value, we can omit the curly braces and
 * "return".
 */
const multiply2 = (a, b) => a*b;

const number1 = 2;
const number2 = 3;

console.log("Product 1: " + multiply1( 2, 3 ));
console.log("Product 2: " + multiply2( 2, 3 ));

console.log();