//objects - object contains group of properties(variable) and behaviour(method)
//object is a collection of key and value pairs.(only in JS and TS)

//ex:
//emp -name, designation,salary,department
//     -getDetails(),setDetails(),bonus()

//Different ways to create an object in JS/TS

/*

1. using 'object' type-Directly we define values for variable(JS/TS)
2. Inline type object - we also define the datatype of the keys(TS)
3. using 'type' aliases(JS/TS)
4. using the classes (JS ES16/TS)

*/


//1. using 'object' type-Directly we define values for variable(JS/TS)

//the typescript 'object' type represents all values that are not in primitive types

let employee1: object = { "name": "John", age: 30, salary: 50000, job: "Engineer" }
//limitation:
// if u specify "object" keyword it only allows to add properties and not method.
// if u dont sepcify "object" keyword it allow to add properties and method

let employee = {
    name: "John",
    salary: 50000,
    job: "Engineer",
    getDetails: function (): string {
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
}

console.log(typeof employee)

//accessing the object - approach 1: (using .(dot notation))
console.log(employee.job)
console.log(employee.name)
console.log(employee.salary)
console.log(employee.getDetails())

//accessing the object - approach 2: (using bracket notation))
console.log(employee["job"])
console.log(employee["name"])
console.log(employee["salary"])
console.log(employee["getDetails"]())

//Modify the value
employee.job = "Manager" // or employee[job]="Manager"
console.log("Modified job is: ", employee.job)

console.log("===============================================================")

// 2. Inline type object - we also define the datatype of the keys(TS)

let student: { name: string, age: number, grade: string, getSummary(): string } = {
    name: "Scott",
    age: 15,
    grade: 'A',
    getSummary() {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    }
}

console.log(student.age, student.grade, student.name)
console.log(student.getSummary())

//array of objects

let students: { name: string, age: number, grade: string, getSummary(): string }[] = [{
    name: "Scott",
    age: 15,
    grade: 'A',
    getSummary() {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    }
}, {
    name: "Smith",
    age: 15,
    grade: 'A',
    getSummary() {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    }
}]

console.log(students[1].age, students[1].grade, students[1].name)
console.log(students[1].getSummary())
console.log(typeof students)

console.log("===============================================================")

//3. using 'type' aliases(JS/TS) -> allows creating a new name for an existing type

type Product = {
    name: string
    price: number
    getInfo(): string
}

let book1: Product = {
    name: "Learn Typescript",
    price: 300,
    getInfo() {
        return `${this.name} costs ${this.price}`
    }
}

let book2: Product = {
    name: "Learn Java",
    price: 300,
    getInfo: function () {
        return `${this.name} costs ${this.price}`
    }
}

console.log("Book 1: ", book1.getInfo())
console.log("Book 2: ", book2.getInfo())

for (let i in book2) {
    console.log(i)
}


//Example 2: Intersection types
type Personal = {
    name: string,
    age: number
}
type Contact = {
    email: string,
    phone: number
}

type Candidate = Personal & Contact & {
    getContactInfo(): string
}

let candidate: Candidate = {
    name: "Mice",
    age: 30,
    email: "mice@gmail.com",
    phone: 98923847,
    getContactInfo() {
        return `${this.name} is ${this.age} year old and contact details are: email: ${this.email} and phone: ${this.phone}`
    }
}

console.log(candidate.getContactInfo())


console.log("===============================================================")


//4. using the classes (JS ES16/TS)

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    getDetails(): string {
        return `SSN: ${this.ssn} and Name: ${this.getFullName()}`
    }
}

let person1 = new Person("234243222", "Smith", "S")
console.log(person1.getDetails())

let person2 = new Person("353353535", "Marry", "S")
console.log(person2.getDetails())