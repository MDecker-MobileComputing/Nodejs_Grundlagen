class Kreis {

    constructor(radius) {

        this.radius = radius;
    }

    getUmfang() {

        const umfang = 2 * Math.PI * this.radius;
        return this._runden(umfang);
    }

    getFlaeche() {

        const flaeche = Math.PI * Math.pow(this.radius, 2);
        return this._runden(flaeche);
    }

    _runden(wert)  {

        return Math.trunc(wert * 100) / 100;
    }
}

console.log();

const kreis1 = new Kreis(5);

console.log(`Radius von Kreis: ${kreis1.radius}`      );
console.log(`Umfang von Kreis: ${kreis1.getUmfang()}` );
console.log(`Fläche von Kreis: ${kreis1.getFlaeche()}`);

console.log();


/* ********************* Ab hier: Vererbung ********************* */

class Zylinder extends Kreis {

    constructor(radius, hoehe) {

        super(radius);
        this.hoehe = hoehe;
    }

    getVolumen() {

        const volumen = this.getFlaeche() * this.hoehe;
        return this._runden(volumen);
    }

    getOberflaeche() {

        const oberflaeche = 2 * this.getFlaeche() + this.getUmfang() * this.hoehe;
        return this._runden(oberflaeche);
    }
}

const zylinder1 = new Zylinder(5, 10);
console.log(`Volumen von Zylinder   : ${zylinder1.getVolumen()}`);
console.log(`Oberfläche von Zylinder: ${zylinder1.getOberflaeche()}`);
