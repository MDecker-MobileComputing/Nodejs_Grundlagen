/*
 * Erklärung zu Promises (Callbacks, Executor): https://javascript.info/promise-basics
 * <br>
 *
 * This file is licensed under the terms of the BSD 3-Clause License.
 */



// Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Lufttemperatur
// am Ort des Nutzers zurückgibt. Diese Temperatur könnte z.B. von einem Sensor oder
// einer Web-API zurückgeliefert werden.
async function getTemperatur() {

    const temperaturObjekt = 5;

    const promise = new Promise(function(resolveCallback, rejectCallback) {
        setTimeout(function() { resolveCallback(temperaturObjekt); }, 1000);
    });

    return promise;
}


// Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Windgeschwindigkeit
// am Ort des Nutzers zurückgibt.
async function getWindgeschwindigkeit() {

    const geschwindigkeitsObjekt = 15;

    const promise = new Promise(function(resolveCallback, rejectCallback) {
        setTimeout(function() { resolveCallback(geschwindigkeitsObjekt); }, 1000);
    });

    return promise;
}


// Eigentliche Berechnung der gefühlten Temperatur.
// Quelle Formel: https://www.bergfreunde.de/windchill-effekt-rechner/
function berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit) {

    const v_a = temperatur;
    const v = Math.pow(windgeschwindigkeit, 0.16);

    const gefuehlteTemperatur = 13.12 + 0.6215 * v_a + (0.3965 * v_a - 11.37) * v;
    const gefuehlteTempraturGerundet = Math.round(gefuehlteTemperatur * 10) / 10;

    return gefuehlteTempraturGerundet;
}


// Berechnung der gefühlten Temperatur _ohne_ `await`
async function gefuehlteTemperatur_1() {

      const temperatur = getTemperatur();
      console.log(`\nTemperatur: ${temperatur} Grad Celsius`);

      const windgeschwindigkeit = getWindgeschwindigkeit();
      console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h\n`);

      //const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
      //console.log(`=> Gefühlte Temperatur: ${temperatur} ° Celsius\n`);
}


// Berechnung der gefühlten Temperatur _mit_ `await` hintereinander.
async function gefuehlteTemperatur_2() {

    const temperatur = await getTemperatur();
    console.log(`\nTemperatur: ${temperatur} Grad Celsius`);

    const windgeschwindigkeit = await getWindgeschwindigkeit();
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    const gefuehlteTemp = berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    console.log(`=> Gefühlte Temperatur: ${gefuehlteTemp} Grad Celsius\n`);
}


// Berechnung der gefühlten Temperatur _mit_ `await` und `Promise.all()`
async function gefuehlteTemperatur_3() {

    const promise1 = getTemperatur();
    const promise2 = getWindgeschwindigkeit();

    const [temperatur, windgeschwindigkeit] = await Promise.all([promise1, promise2]);

    console.log(`\nTemperatur: ${temperatur} Grad Celsius`);
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    const gefuehlteTemp = berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    console.log(`=> Gefühlte Temperatur: ${gefuehlteTemp} Grad Celsius\n`);
}


// In dieser Methode wird nur die tatsächliche Temperatur abgefragt und angezeigt.
async function anzeigeTemperatur() {

    const temperaturPromise = getTemperatur();

    temperaturPromise.then(function(temperaturResolved) {

        console.log(`\nTemperatur: ${temperaturResolved} Grad Celsius\n`);
    });
}


// Beispiele für verkettete (chained) Aufrufe der in der Klasse `Promise` definierten `then()`-Methode.
async function anzeigeTemperaturUndWindgeschwindigkeit() {

    const temperaturPromise = getTemperatur();

    temperaturPromise.then((temperaturResolved) => {

        console.log(`\nTemperatur: ${temperaturResolved} Grad Celsius\n`);

        const windgeschwindigkeitPromise = getWindgeschwindigkeit();
        return windgeschwindigkeitPromise;

    }).then((windgeschwindigkeitResolved) => {

        console.log(`Windgeschwindigkeit: ${windgeschwindigkeitResolved} km/h\n`);
    });
}

//gefuehlteTemperatur_1();
//gefuehlteTemperatur_2();
//gefuehlteTemperatur_3();
//anzeigeTemperatur();
anzeigeTemperaturUndWindgeschwindigkeit();
