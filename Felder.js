
console.log();

const meinArray = [ "Duale", "Hochschule", "BW" ];

meinArray[2] = "Baden-Württemberg"; // geht, obwohl "meinArray" mit "const" deklariert ist

meinArray.push("Karlsruhe"); // am Ende des Arrays anhängen

console.log("\nAnzahl Elemente im Array: " + meinArray.length + "\n");

meinArray.forEach(element => {
    console.log(element);
});

console.log();

const includesDuale = meinArray.includes( "Duale");
console.log("Array enthält \"Duale\" als Element: " + includesDuale);

const includesHeidelberg = meinArray.includes( "Heidelberg");
console.log("Array enthält \"Heidelberg\" als Element: " + includesHeidelberg);

console.log();
