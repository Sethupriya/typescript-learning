//Method overloading and constructor overloading in Typescript

class Calculator {

    //Constructor overloading

    constructor(); //default constructor
    constructor(a: number, b: number); //parameterized constructor

    constructor(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log("Sum of a and b : ", a + b)
        } else {
            console.log("Default constructor called..")
        }
    }

    //Method Overloading

    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c
        }
        return a + b
    }


}

//Usage:

console.log("********************* Constructor Overloading ***********************")

let c1 = new Calculator() //Default constructor called..
let c2 = new Calculator(2, 3) //Sum of a and b :  5

console.log("********************* Method Overloading ***********************")

console.log("Adding 2 numbers: ", c1.add(2, 5)) //7
console.log("Adding 3 numbers: ", c1.add(2, 5, 3)) //10