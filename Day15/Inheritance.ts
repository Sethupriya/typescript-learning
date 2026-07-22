//Inheritance

// A class can reuse the properties and methods of another class
//Inheritance is a mechanism where one class(child) can inherit the properties and methods of another class(parent)
//Inheritance allow you to reuse the functionality of an existing class without rewriting it.


//Method overriding
//A child class can provide specific implementation of a method that is already defined in its superclass
//A method must have 'same' -> name,return type and parameter

class Car {
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start() {
        console.log("Car started...")
    }

    stop() {
        console.log("Car stopped...")
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`)
    }

}

//Child class
class Honda extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    //Method overriding
    start() {
        console.log("Honda started...")
    }

    yom() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`)
    }
}

//Child class - Maruthi

class Maruthi extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    //Method overriding
    start() {
        console.log("Maruthi started...")
    }

    yom() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`)
    }

}

//Usage

//Create honda object

let honda = new Honda("Honda", "Red", "Honda city", 2019)
honda.start() //Called child class //Honda started...
honda.displayInfo() //Name: Honda, Color: red, Model: Honda city
honda.yom() //Name: Honda, Color: Red, Model: Honda city, YOM: 2019
honda.stop() //Car stopped...

//Create Maruthi object

let maruthi = new Maruthi("Maruthi", "White", "Suzuki", 2020);
maruthi.start(); //Maruthi started...
maruthi.displayInfo(); //Name: Maruthi, Color: White, Model: Suzuki
maruthi.yom(); //Name: Maruthi, Color: White, Model: Suzuki, YOM: 2020
maruthi.stop(); //Car stopped...    

//Parent class variable holding child class object

let car: Car = new Honda("Honda", "Red", "Honda city", 2019)
car.start() //Overrided method invoked means child class method //Honda started...
car.displayInfo() //Name: Honda, Color: Red, Model: Honda city
//car.yom() //Compile time error: Property 'yom' does not exist on type 'Car'.
car.stop() //Car stopped...