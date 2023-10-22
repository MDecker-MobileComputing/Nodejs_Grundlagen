
console.log();

const normiereString1 = (eingabeString) => {

    return eingabeString.trim().toLowerCase();
}

/**
 * Wenn die Funktion nur aus einer Anweisung besteht, und diese Anweisung
 * ein Wert zurück gibt, dann können wir die Schweifenklammer und das
 * "return" weglassen.
 */ 
const normiereString2 = (eingabeString) => eingabeString.trim().toLowerCase();


const einString = " aBcDEF    ";

const stringNormiert1 = normiereString1(einString);
console.log(`Normierter String: \"${stringNormiert1}\"`);

const stringNormiert2 = normiereString2(einString);
console.log(`Normierter String: \"${stringNormiert2}\"`);

console.log();