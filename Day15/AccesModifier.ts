//Parent class
class Person {
    public name: string //public modifier - accessible anywhere
    protected age: number //protected modifier - accessible within or child class
    private ssn: number //private modifier - accessible only within the class

    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, SSN: ${this.ssn}`)
    }
}

class Employee extends Person {
    private employeeId: number;
    constructor(name: string, age: number, ssn: number, employeeId: number) {
        super(name, age, ssn);
        this.employeeId = employeeId;
    }
    showEmployeeDetails() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        //console.log(`SSN: ${this.ssn}`) //Property 'ssn' is private and only accessible within class 'Person'.
        console.log("Employee Id: ", this.employeeId)
    }
}

let emp = new Employee("John", 25, 3453334, 101)
emp.displayInfo()//Name: John, Age: 25, SSN: 3453334
emp.showEmployeeDetails()

console.log(emp.name)//accessible
//console.log(emp.age)//not accessible - Property 'age' is protected and only accessible within class 'Person' and its subclasses.
//console.log(emp.ssn)//not accessible - Property 'ssn' is private and only accessible within class 'Person'.