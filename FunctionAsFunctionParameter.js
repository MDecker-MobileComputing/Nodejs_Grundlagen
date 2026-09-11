
const numbersArray = [ 2, 5, -12, 44 ];


function processArray( callback ) {

    for ( let i = 0; i < numbersArray.length; i++ ) {

        let value = numbersArray[i];
        callback( value );
    }
}



const function1 = number => { 

    if ( number % 2 == 0 ) {

        console.log( `The number ${number} is even.` );

    } else {

        console.log( `The number ${number} is odd.` );
    }
}


const function2 = number => { 

    console.log( `The square of ${number} is ${number*number}.` );
}


console.log();



processArray( function1 );

console.log();

processArray( function2 );



console.log();