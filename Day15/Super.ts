//super() - used to invoke immediate parent class constructor
//super - used to invoke parent class method
//super - cannot be used to invoke the parent class property(In Java, it is possible)

class Parent {
    num: number = 10;
    constructor() {
        console.log("This is parent class constructor...")
    }
    display() {
        console.log("This is display() method from parent class")
    }
}

class Child extends Parent {
    num: number = 20; //property overriding or variable hiding
    constructor() {
        super()
        console.log("This is child class constructor...")
    }
    show() {
        //console.log(super.num)//parents num - TS doesn't support super.num to access parent class properties directly like Java does.
        console.log("Number is : ", this.num)
        console.log("This is show() method from child class")
    }
    //overriden method
    display() {
        super.display(); //This will invoke parent class method
        console.log("This is display() method from child class")
    }
}

let c1 = new Child();

c1.show()
c1.display()
