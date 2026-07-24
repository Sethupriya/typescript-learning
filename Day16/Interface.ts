/*

1. An Interface in typescript is a way to define the structure of the object.
2. It tells the compiler what properties and types an object should have.
3. It's like a blueprint for the object.

Abstract method - only have signature of the method(there is no implementation)

interface InterfaceName
{
properties
abstract methods
}

1.Regular properties
2.Optional properties
3.Readonly properties and function types
4.Extending interfaces
5.class implements interfaces

*/


//Example 1: Basic interface

interface Person {
    //Regular properties
    name: string;
    age: number;
}

let student: Person = { name: "john", age: 20 }

console.log(student.name)//john
console.log(student.age)//20
console.log(student)//{ name: "john", age: 20 }

//Example 2.Optional properties

interface Employee {
    id: number
    name: string
    dept?: string
}

let emp1: Employee = { id: 1, name: "Smith" }
console.log(emp1.id)
console.log(emp1.name)

let emp2: Employee = { id: 2, name: "Bob", dept: "IT" }
console.log(emp2.id)
console.log(emp2.name)
console.log(emp2.dept)

//Example 3: Readonly properties (readonly prevent modification) and function types

interface Book {
    title: string;
    readonly isbn: string;

    display(): void;
}

let b1: Book = {
    title: "Learn Playwright", isbn: "123-ABC", display() {
        console.log("***** From display using this keyword in function ******")
        console.log(this.title)
        console.log(this.isbn)
        console.log("***** From display using reference in function ******")
        console.log(b1.title)
        console.log(b1.isbn)
    }
}

console.log(b1.title)
console.log(b1.isbn)
b1.display()
//b1.isbn="123-CVB"// while trying to update read only property -> Cannot assign to 'isbn' because it is a read-only property.

//Example 4: Extending Interface (Inheritance is applicable)

//Parent interface
/*interface Animal {
    name: string;
}

//child interface
interface Dog extends Animal {
    color: string;
}

let mydog: Dog = { name: "dog", color: "black" }
console.log(mydog.color)
console.log(mydog.name)*/

//Example 5:
//class can extends another class
//interface can extend another interface

//class can implement another interface

interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;
    //static color: string = "black";
    color: string;
    constructor(name: string, color: string) {
        this.name = name; //inherited from interface 'Animal
        this.color = color; //property of Dog class
    }
    sound(): void {
        console.log("bark...");
    }

}

let dog = new Dog("Dog1", "black")
console.log(dog.name)
console.log(dog.color)
dog.sound()//Dog1

let dog1 = new Dog("Dog2", "white")
console.log(dog1.name)
console.log(dog1.color)
dog1.sound()//Dog1

let dog2: Animal = {
    name: "Dog3", sound() {
        console.log("Dog3 bark...")
    }
}

dog2.sound();

let dog3: Animal = new Dog("Dog4", "Grey")
console.log(dog3.name)
dog3.sound()
