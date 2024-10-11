/**
 * Beispiel für Verwendung Schlüsselwörter "get" und "set" in einer Klasse.
 *
 * Für die Matrikelnummer gibt es nur einen Getter, aber keinen Setter.
 */
class Student {

    constructor(matrikelnummer, vorname, nachname) {

        this._matrikelnummer = matrikelnummer;
        this._vorname        = vorname;
        this._nachname       = nachname;
    }


    get matrikelnummer() {

        return this._matrikelnummer;
    }


    get vorname() {

        return this._vorname;
    }

    set vorname(vorname) {

        this._vorname = vorname;
    }


    get nachname() {

        return this._nachname;
    }

    set nachname(nachname) {

        this._nachname = nachname;
    }


    getVollerName() {

        return `${this._vorname} ${this._nachname}`;
    }

    toString() {

            return `Matrikelnr: ${this._matrikelnummer}, Vorname: ${this._vorname}, Nachname: ${this._nachname}`;
    }

}

console.log();

const student1 = new Student( 123456, "Max", "Mustermann" );

console.log( student1.toString() );

console.log( `Vorname Student vor Änderung: ${student1.vorname}` );
student1.vorname = "Maximilian";

console.log( student1.toString() );
