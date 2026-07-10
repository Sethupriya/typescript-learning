//step1: write a signature of functions
//step2: implement a function with the same name and different parameters
//step3: calling function

//Example 1: function signature with no parameters and no return type

/* function greet(): void; //function signature

function greet(): void { //function implementation
    console.log("Hello Typescript")
}

greet() //function call */


// Example 2:

/* function getInfo(id: number): string; //function signature
function getInfo(name: string): string; //function signature

//function implementation
function getInfo(param: number | string): string {

    if (typeof param === 'number') {
        return "User id is " + param
    } else {
        return "Username is " + param
    }
}

//function call
console.log(getInfo(123))
console.log(getInfo("scott")) */


//Example 3: Different parameters with different return type

/* function add(a: number, b: number): number; //function signature
function add(a: number, b: number, c: number): number; //function signature

//function implementation 
function add(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        //!== means it 'strictly' checks the type of c. It checks both value and type. If c is not undefined, 
        // it will return a + b + c. Otherwise, it will return a + b.
        return a + b + c
    } else {
        return a + b
    }
}

//function call
console.log(add(5, 8))
console.log(add(5, 8, 10)) */

// Example 4: different return types

/* //function signature
function processInput(str: string): string;
function processInput(num: number): number;

//function implementation
function processInput(param: string | number): string | number {
    if (typeof param === 'string') {
        return param.toUpperCase()
    } else {
        return param * 2
    }
}

//function call
console.log(processInput("John"))
console.log(processInput(5)) */


//Example 5: 

function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(input: string | number | boolean): string {
    if (typeof input === 'string') {
        return `Hello, ${input}!`;
    } else if (typeof input === 'number') {
        return `You are ${input} years old.`;
    } else {
        return input ? "You are married." : "You are not married.";
    }
}

//function call
console.log(greet("John")); // Output: Hello, John!
console.log(greet(25)); // Output: You are 25 years old.
console.log(greet(true)); // Output: You are married.