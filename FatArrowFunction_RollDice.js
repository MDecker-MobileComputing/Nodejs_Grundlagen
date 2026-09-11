

const getRandomDiceNumber1 = () => {

    return Math.floor( Math.random() * 6 ) + 1;
}


/**
 * If the function consists of only one statement, and that statement
 * returns a value, we can omit the curly braces and
 * "return".
 */
const getRandomDiceNumber2 = () => Math.floor( Math.random() * 5 ) + 1;

console.log( "\nTen dice numbers from function 1:" )
for ( let i = 1; i <= 10; i++ ) {

    let diceNumber = getRandomDiceNumber1();
    console.log( "  " + diceNumber );
}


console.log( "\nTen dice numbers from function 2:" )
for ( let i = 1; i <= 10; i++ ) {

    let diceNumber = getRandomDiceNumber2();
    console.log( "  " + diceNumber );
}
