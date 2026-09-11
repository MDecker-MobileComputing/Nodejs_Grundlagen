

// Function for addition, has two (mandatory) parameters
function add( firstNumber, secondNumber ) {

    return firstNumber + secondNumber;
}


// second parameter missing, "undefined" is used as default value
const sum1 = add( 1 );
console.log(`\nSum1: ${sum1}`);


// one parameter too many,
const sum2 = add( 1, 2, 3 );
console.log( `\nSum2: ${sum2}` );

console.log();
