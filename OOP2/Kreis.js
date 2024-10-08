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

// Example usage
const kreis1 = new Kreis(5);

console.log(`Radius von Kreis: ${kreis1.radius}`);
console.log(`Umfang von Kreis: ${kreis1.getUmfang()}`);
console.log(`Fläche von Kreis: ${kreis1.getFlaeche()}`);
