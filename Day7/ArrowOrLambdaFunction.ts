/*

Arrow function also called Lambda function
It concise mechanism to represent anonymous function


3 parameters to a Lambda function

1.Parameters - A function may optionaly have parameters
2.The fat arrow notion/lambda notation (=>) - It is also called as goes to operator
3.Statements- represent the function instruction set

Syntax:

let variable=(parameters) =>
{
//block of code
}

variable()

*/


// Exmaple 1: Arrow function with no parameters and no return type

/* let msg = (): void => {
    console.log("Hello Typescript")
}

msg() */


// Exmaple 2: Arrow function with parameters and return type

/* let add = (a: number, b: number): number => {
    return a + b
}

console.log(add(5, 8)) */

//Example 3: Arrow function with implicit return

/* let add = (a: number, b: number): number => a + b

console.log(add(5, 8)) */

//Example 4: Arrow function with optional parameter

/* let displayDetails = (id: number, name: string, mailId?: string): void => {
    console.log("User ID is " + id)
    console.log("Username is " + name)
    if (typeof mailId != 'undefined') {
        console.log("Email id is " + mailId)
    }
}

displayDetails(123, "scott", "scott@gmail.com")
displayDetails(123, "scott") */


//Example 5: Arrow function with default parameter
//Required parameter can not follow optional parameter. so always keep required parameter 1st and leave optional parameter next to it.

/* let calculateDiscount = (price: number, rate: number = 0.50): void => {
    let discount: number = price * rate
    console.log("Discount amount = ", discount)
}

calculateDiscount(5, 2)
calculateDiscount(5)  */


//Example 6: Arrow function with REST parameter

let findElements = (...elements: (number | string)[]): number => {
    return elements.length
}

console.log(findElements(2, 4, "PP0", 5)) //4 