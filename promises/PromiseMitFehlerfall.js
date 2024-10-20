

/**
 * Funktion simuliert einen API-Zugriff (z.B. Web-API oder Auslesen lokaler Sensor), mit dem
 * der die aktuelle Lufttemperatur am Aufenthaltsort des Nutzers zurückgegeben wird.
 * Bei diesem API-Zugriff handelt es sich um eine "potenziell langlaufende Operation".
 * <br><br>
 *
 * Funktion liefert in 50% der Aufrufe einen Fehler zurück. In Abhängigkeit von einem
 * Zufallsgenerator wird entweder
 *
 * * ein Promise-Objekt zurückgeliefert, bei dem nach einer Sekunde die Callback-Methode
 *   für den Erfolgsfall aufgerufen wird (die Temperatur ist dann immer 5°).
 *
 * * oder ein Promise-Objekt zurückgeliefert, bei dem nach einer halben Sekunde die
 *   Callback-Methode für den Fehlerfall aufgerufen wird.
 */
async function getTemperatur() {

  const zufallszahl = Math.random(); // Zufallszahl (gleichverteilt) zwischen 0.0 und 1.0 erzeugen.

  let promise;

  if ( zufallszahl <= 0.5 ) {

    const temperaturObjekt = 5;

    promise = new Promise( function(resolveCallback, rejectCallback) {

      setTimeout(
        function() { resolveCallback(temperaturObjekt); },
        1000
      );
    });

  } else {

    promise = new Promise(function(resolveCallback, rejectCallback) {

      setTimeout(
        function() { rejectCallback("Verbindung zu Server mit Wetterdaten fehlgeschlagen."); },
        500
      );
    });
  }

  return promise;
}


/**
 * Naiver Aufruf der Methode `getTemperatur()`, so als würde es sich um eine
 * "normale" (nicht-asynchrone) Methode handeln.
 */
function main_naiv() {

  const temperatur = getTemperatur();

  console.log(`\nTemperatur: ${temperatur} Grad Celsius\n`);
}


/**
 * Aufruf der asynchronen Methode `getTemperatur()`, Promise-Objekt wird mit
 * `then()` und `catch()` ausgewertet.
 */
async function main_then() {

  const temperaturPromise = getTemperatur();

  temperaturPromise.then(function(temperaturResolved) {

    console.log(`\nTemperatur: ${temperaturResolved} Grad Celsius\n`);

  }).catch(function(fehlerObjekt) {

    console.log(`\nFehler aufgetreten: ${fehlerObjekt}\n`);
  });
}


/**
 * Aufruf der asynchronen Methode `getTemperatur()` mit `await`, für Fehlerbehandlung
 * wird ein `try`-`catch`-Block verwendet.
 */
async function main_await() {

  try {

    const temperaturResolved = await getTemperatur();

    console.log(`\nTemperatur: ${temperaturResolved} Grad Celsius\n`);
    
  } catch (fehlerObjekt) {

    console.log(`\nFehler aufgetreten: ${fehlerObjekt}\n`);
  }
}



// **********************************************************************************************************************************

//main_naiv();

//main_then();

main_await();