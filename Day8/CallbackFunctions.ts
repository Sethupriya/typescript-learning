// Callback function: a function passed as an arugument to another function and executed later.

//Example 1:

//callback function
/* function showMessage(message: string) {
    console.log(message);
}

greet("John", showMessage);

function greet(name: string, callback: (message: string) => void) {
    const message = `Hello, ${name}!`;
    callback(message); //executing the callback function
} */


// Example 2:


//Callback function
function displayResult(result: number): void {
    console.log(result)
}


function sum(a: number, b: number, callback: (result: number) => void) {
    callback(a + b) //executing callback function(i.e called displayResult)
}

sum(2, 3, displayResult)

export { }