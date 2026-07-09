//Anonymous function also called unnamed function/Nameless function

/*

1.It doesn't have any name
2.It is assigned to a variable, which acts it as a name 

Syntax:

let variable_name=function(parameters){
//function body
}

variable_name()


*/



// Example 1: Anonymous Function

/* let message = function (): string {
    return "Welcome to Anonymous function class"
}

console.log(message()) */


// Example 2: Anonymous function with parameter

let mul = function (a: number, b: number): number {
    return a * b
}

console.log(mul(2, 5))

export { }