
console.log();

const stringNormieren1 = (eingabeString) => {

    return eingabeString.trim().toLowerCase();
}

/**
 * Wenn die Funktion nur aus einer Anweisung besteht, und die Anweisung
 * ein Wert zurück gibt, dann können wir die Schweifenklammer und
 * das "return" weglassen.
 */ 
const stringNormieren2 = (eingabeString) => eingabeString.trim().toLowerCase();


const einString = " aBcDEF    ";

const stringNormiert1 = stringNormieren1(einString);
console.log(`Normierter String: \"${stringNormiert1}\"`);

const stringNormiert2 = stringNormieren2(einString);
console.log(`Normierter String: \"${stringNormiert2}\"`);

console.log();