
console.log();

const feld1 = [ "a", "b", "c" ];
const feld2 = [ "x", "y", "z" ];

const feld3 = feld1.concat(feld2);

feld1.forEach( s => { console.log("Element in feld1: " + s ); });
console.log();

feld2.forEach( s => { console.log("Element in feld2: " + s ); });
console.log();

feld3.forEach( s => { console.log("Element in feld3: " + s ); });
console.log();