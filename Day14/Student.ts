/*

1.Class
2.Read only properties
3.Optional property

4.Static variables and methods:
    1. Common across all the objects
    2. Can be accesc directly thru class name
    3. can be modified by using any objects
    4. we can't use 'this' keyword for static properties, instead we can use class name.

*/

class Student {
    readonly studentId: number; //Read only - can only be assigned once, inside contructor
    name: string; //Regular property
    email?: string; //Optional property -> need to mention '?' before colon (can be undefined)
    static schoolName: string = "Greenwood High"; //static variable shared among all instances/objects

    //Constructor
    constructor(studentId: number, name: string, email?: string) {
        this.studentId = studentId;
        this.name = name;
        this.email = email; //If u dont pass email then it is undefined
    }

    //Methods
    displayInfo(): void {
        console.log("Student ID: ", this.studentId)
        console.log("Student Name: " + this.name)
        if (this.email !== undefined) {
            console.log("Student email: ", this.email)
        } else {
            console.log("Email not provided")
        }

        console.log("Student school Name: ", Student.schoolName)
    }

    changeSchoolName(newName: string): void {
        Student.schoolName = newName;
    }

    static changeSchoolNameUsingStatic(newName: string): void {
        Student.schoolName = newName;
    }

}

//Usage

let s1 = new Student(101, "Smith")
s1.displayInfo()

let s2 = new Student(102, "Bob", "bob@gmail.com")
s2.displayInfo()

//Try to modify the student id of s1 object:
//s1.studentId=103 //This is expected compile error message => Cannot assign to 'studentId' because it is a read-only property.

//Change school name using static method
s1.changeSchoolName("Moon Academy")
s1.displayInfo()
s2.displayInfo()

Student.changeSchoolNameUsingStatic("Sunrise Academy")

console.log("Displaying info after change school name: ")
s1.displayInfo()
s2.displayInfo()

