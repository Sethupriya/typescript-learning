//Named Function: A function that is declared with a name.

/*
Syntax:

function functionName(parameter):returnType{
//block of code
}

functionName() //Calling the function

*/

// Example 1: Named function with no parameter and no return type

/* function display(): void {
    console.log("Welcome to typescript")
}

display() */

//Example 2: Named function with parameters and return type

/* function addNumbers(x: number, y: number): number {
    return x + y
}

console.log(addNumbers(1, 2))//3 */
//console.log(addNumbers(1))//Compiler Error: Expected 2 arguments, but got 1.
//console.log(addNumbers(1,2,3))//Compiler Error : Expected 2 arguments, but got 3.

// Example 3: Named function with REST parameter

//REST parameters dont restrict the number of values that you can pass to a function.

/* function addNumbers(...data: number[]): number {
    let i;
    let sum: number = 0

    for (i = 0; i < data.length; i++) {
        sum += data[i]
    }
    return sum;
}

console.log(addNumbers(1, 2))
console.log(addNumbers(1))
console.log(addNumbers(1, 2, 3)) */

//Example 4: Named function with REST parameters - multiple types

/* function findElements(...elements: (number | string)[]): number {
    return elements.length
}

console.log(findElements(2, 4, "PP0", 5)) //4 */


//Example 5: Named function with optional parameter

/* function displayDetails(id: number, name: string, mailId?: string): void {
    console.log("User ID is " + id)
    console.log("Username is " + name)
    if (typeof mailId != 'undefined') {
        console.log("Email id is " + mailId)
    }
}

displayDetails(123, "scott", "scott@gmail.com")
displayDetails(123, "scott") */

// Example 6: Named function with default parameter

/* function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate
    console.log("Discount amount = ", discount)
}

calculateDiscount(5, 2)
calculateDiscount(5) */