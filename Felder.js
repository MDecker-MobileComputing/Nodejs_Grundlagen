
console.log();

const meinArray = [ "Duale", "Hochschule", "BW"];

meinArray[2] = "Baden-Württemberg"; // geht, obwohl "meinArray" mit "const" deklariert ist
meinArray.push("Karlsruhe"); // am Ende des Arrays anhängen

meinArray.forEach(element => {
    console.log(element);
})

console.log();
