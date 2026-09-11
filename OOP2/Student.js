/**
 * Example showing how to use the "get" and "set" keywords in a class.
 *
 * The student ID has a getter but no setter.
 */
class Student {

    constructor(studentId, firstName, lastName) {

        this._studentId = studentId;
        this._firstName = firstName;
        this._lastName  = lastName;
    }


    get studentId() {

        return this._studentId;
    }


    get firstName() {

        return this._firstName;
    }

    set firstName(firstName) {

        this._firstName = firstName;
    }


    get lastName() {

        return this._lastName;
    }

    set lastName(lastName) {

        this._lastName = lastName;
    }


    getFullName() {

        return `${this._firstName} ${this._lastName}`;
    }

    toString() {

        return `Student ID: ${this._studentId}, First name: ${this._firstName}, Last name: ${this._lastName}`;
    }

}

console.log();

const student1 = new Student( 123456, "Max", "Mustermann" );

console.log( student1.toString() ); // toString() must be called explicitly!

console.log( `Student first name before change: ${student1.firstName}` );
student1.firstName = "Maximilian";

console.log( student1.toString() );
