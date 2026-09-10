
/*
 * Continue: Jumps directly to the next iteration of the loop.
 * Break   : Exits the loop.
 */

console.log();

let x = 0;
while ( true ) { // infinite loop

    x++;

    if ( x === 3 ) { continue; }
    if ( x === 5 ) { break;    }

    console.log( x );
}

console.log();
