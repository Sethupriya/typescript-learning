/*
1.Primitive datatypes (built-in):(it store single value)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void

let age:number=30

datatype-> number
annotation -> :number
type inference -> let age=30


2.Non-primitive datatype(Objects)-(it store group of variables or data)
Array
Class
Interface
Function
Tuple etc..

*/

//1.NUMBER TYPE
//Represents both Integer and Floating point values

/* let age: number = 25;
let price = 25.5
let big = 353535345336446

console.log("Age: ", age)
console.log("Price: ", price)
console.log("Big: ", big)

console.log(typeof age);
console.log(typeof price)
console.log(typeof big) */


//2.STRING TYPE
//Represents textual data

/*
Single quote('')
Double quote("")
Backtick(``)
*/

/* let firstName: string = "John"
let lastName: string = 'Kenedy'

let greet: string = `Hello ${firstName} ${lastName}`;
console.log(greet) */

//3.Boolean TYPE
//Represent true/false values

/* let isStudent: boolean = true
let hasJob: boolean = false

console.log("Is Student? ", isStudent)
console.log("Has Job? ", hasJob) */


//4.NULL & Undefined - Special type for absence of value

/* let emptyValue: null = null

let notAssigned: undefined = undefined;

console.log(emptyValue)
console.log(notAssigned)

let price: number
console.log(price)//undefined */

//5.ANY TYPE - If you using becareful bcoz it violtes Type safety.

/* let value: any = "Welcome"
value = 100;
value = true

console.log("Value type is ", typeof value, "Value data is ", value) */


//6.Union TYPE-combine multiple values

/* let id: string | number | boolean
id = "ID101"
console.log(typeof id)

id = 233
console.log(typeof id)

id = true
console.log(typeof id) */



//7.VOID TYPE - Used for function that don't return anything

/* function show(): void {
    console.log("Welcome")
}

show(); */

/* function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2)) */