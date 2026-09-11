
const numbersArray = [ 2, 5, -12, 44 ];


/*
 * Function that takes another function as parameter.
 */
function processArray( callback ) {

    for ( let i = 0; i < numbersArray.length; i++ ) {

        let value = numbersArray[i];
        callback( value );
    }
}


/*
 * Function to be passed to processArray(): Check if a number is even or odd.
 */
const function1 = number => { 

    if ( number % 2 == 0 ) {

        console.log( `The number ${number} is even.` );

    } else {

        console.log( `The number ${number} is odd.` );
    }
}


/*
 * Function to be passed to processArray(): Calculate the square of a number.
 */
const function2 = number => { 

    console.log( `The square of ${number} is ${number*number}.` );
}


console.log();

processArray( function1 );
console.log();
processArray( function2 );

console.log();