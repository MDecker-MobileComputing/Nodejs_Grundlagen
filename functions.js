

console.log();

// Function for addition
function add( firstNumber, secondNumber ) {

    return firstNumber + secondNumber;
}

const sum = add( 2, 3 );
console.log( `Sum: ${sum}\n` );


// Function with a default value for the second parameter
function subtract( firstNumber, secondNumber = 1 ) {

    return firstNumber - secondNumber;
}

const difference1 = subtract( 5, 2 );
console.log( `difference1: ${difference1}` );

const difference2 = subtract( 5 );
console.log( `difference2: ${difference2}\n` );


// A function can also be assigned to a variable

const multiply =
      function( firstNumber, secondNumber ) { // anonymous function

          return firstNumber * secondNumber;
      }

const product = multiply( 2, 3 );
console.log( `Product: ${product}\n` );


// A named function can also be referenced by a variable or a constant
const functionReference = add;
const sum2 = functionReference( 3, 4 );
console.log( `Sum2:  ${sum2}\n` );

