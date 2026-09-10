
console.log();

let oneValue = 1;
//let oneValue = 3;
//let oneValue = 99;
//let oneValue = "1"; // is not recognized because case compares with "==="!

switch ( oneValue ) {

    case 1:
        console.log( "One" );
        break;

    case 2:
    case 3:
    case 4:
        console.log( "Value between 2 and 4." );
        break;

    default:
        console.log( "Other value." );
}

console.log();


let oneString = "KA";
//let oneString = "HH";

switch ( oneString ) {

    case "KA": console.log( "Karlsruhe"  ); break;
    case "MA": console.log( "Mannheim"   ); break;
    case "HD": console.log( "Heidelberg" ); break;

    default:
        console.log( "Unknown license plate abbreviation." );
}

console.log();

