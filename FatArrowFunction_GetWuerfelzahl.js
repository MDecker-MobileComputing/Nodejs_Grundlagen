

const getWuerfelzahl1 = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const getWuerfelzahl2 = () => Math.floor(Math.random() * 5) + 1;

console.log("\nZehn Würfelzahlen von Funktion 1:")
for (let i = 1; i <= 10; i++) {
    let wuerfelzahl = getWuerfelzahl1();
    console.log("  " + wuerfelzahl);
}

console.log("\nZehn Würfelzahlen von Funktion 2:")
for (let i = 1; i <= 10; i++) {
    let wuerfelzahl = getWuerfelzahl2();
    console.log("  " + wuerfelzahl);
} 
