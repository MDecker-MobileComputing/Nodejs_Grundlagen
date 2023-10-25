
const zahlenArray = [ 2, 5, -12, 44 ];

function prozessiereArray( funktion ) {

    for (let i = 0; i < zahlenArray.length; i++) {

        let wert = zahlenArray[i];
        funktion(wert);
    }
}

/*
 * Funktion, die an prozessiereArray() übergeben werden soll.
 */
const funktion1 = zahl => { 

    if (zahl % 2 == 0) {

        console.log(`Die Zahl ${zahl} ist gerade.`);

    } else {

        console.log(`Die Zahl ${zahl} ist ungerade.`);
    }
}

/*
 * Funktion, die an prozessiereArray() übergeben werden soll.
 */
const funktion2 = zahl => { 

    console.log(`Das Quadrat von ${zahl} ist ${zahl*zahl}.`);
}


console.log();

prozessiereArray(funktion1);
console.log();
prozessiereArray(funktion2);

console.log();