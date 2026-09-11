class Circle {

    constructor( radius ) {

        this.radius = radius;
    }


    getCircumference() {

        const circumference = 2 * Math.PI * this.radius;
        return this._round( circumference );
    }


    getArea() {

        const area = Math.PI * Math.pow( this.radius, 2 );
        return this._round( area );
    }


    _round( value )  {

        return Math.trunc( value * 100 ) / 100;
    }
}


console.log();

const circle1 = new Circle( 5 );

console.log( `Circle radius       : ${circle1.radius}`             );
console.log( `Circle circumference: ${circle1.getCircumference()}` );
console.log( `Circle area         : ${circle1.getArea()}`          );

console.log();


/* ********************* Inheritance from here ********************* */

class Cylinder extends Circle {

    constructor( radius, height ) {

        super( radius );
        this.height = height;
    }


    getVolume() {

        const volume = this.getArea() * this.height;
        return this._round( volume );
    }


    getSurfaceArea() {

        const surfaceArea = 2 * this.getArea() + this.getCircumference() * this.height;
        return this._round( surfaceArea );
    }
}


console.log();

const cylinder1 = new Cylinder( 6, 10 );

console.log( `Cylinder volume      : ${cylinder1.getVolume()}`      );
console.log( `Cylinder surface area: ${cylinder1.getSurfaceArea()}` );
console.log( `Cylinder base area   : ${cylinder1.getArea()}`        );

console.log();
