#!/usr/bin/env node

/*
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

console.log();

let einWert = 1;
//let einWert = 3;
//let einWert = 99;
//let einWert = "1"; // wird nicht erkannt, da case mit "===" vergleicht!

switch ( einWert ) {

    case 1:
        console.log("Eins");
        break;

    case 2:
    case 3:
    case 4:
        console.log("Wert zwischen 2 und 4.");
        break;

    default:
        console.log("Sonstiger Wert.");
}

console.log();


let einString = "KA";
//let einString = "HH";

switch ( einString ) {

    case "KA": console.log( "Karlsruhe"  ); break;
    case "MA": console.log( "Mannheim"   ); break;
    case "HD": console.log( "Heidelberg" ); break;

    default: 
        console.log("Unbekanntes KFZ-Kennzeichen.");
}

console.log();

