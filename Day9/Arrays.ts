/*
Arrays in Typescript:
====================
    -Special type of variable that store multiple values.
    -Values can be same type or different types.
    -Arrays are declared using square brackets [] or the Array<T> generic type.
    -Index starts from 0(zero).
    -Arrays are ordered collection of elements.
*/

//Approach 1: using literal

/* let names: string[] = [] //declaration

//Initialization/assigning values
names[0] = "John"
names[1] = "Scott"
names[2] = "Smith"
names[3] = "David"

console.log(names) //output: [ 'John', 'Scott', 'Smith', 'David' ] */

let names: string[] = ["John", "Scott", "Smith", "David"] //declaration and initialization

console.log(names) //output: [ 'John', 'Scott', 'Smith', 'David' ]


//Approach 2: using Array<T> generic type

let empNames: Array<string> = ["John", "Scott", "Smith", "David"] //declaration and initialization

console.log(empNames) //output: [ 'John', 'Scott', 'Smith', 'David' ]  

let empIds: Array<number> = [101, 102, 103, 104] //declaration and initialization

console.log(empIds) //output: [ 101, 102, 103, 104 ]

let empDetails: Array<number | string> = [101, "John", 102, "Scott", 103, "Smith", 104, "David"] //declaration and initialization

console.log(empDetails) //output: [ 101, 'John', 102, 'Scott', 103, 'Smith', 104, 'David' ]

let mixedData: Array<any> = [1, "John", null, true]
console.log(mixedData) //output: [ 1, 'John', null, true ]

//Example 1: Iterating over an array using for loop - traditional way

console.log("Employee Names....")

console.log("Employee names length:" + empNames.length) //output: Employee names length:4

for (let i = 0; i < empNames.length; i++) {
    console.log("Employee Name: " + empNames[i]);
}


//Example 2: Iterating over an array using for loop - for..in loop --> it uses "index" of the array
console.log("Employee Ids....")

for (let i in empIds) {
    console.log("Employee Id: " + empIds[i]);
}

//Example 3: Iterating over an array using for loop - for..of loop --> it uses "value" of the array
console.log("Employee Details....")
for (let i of empDetails) {
    console.log(i);
}

//Example 4: Passing an array to the function

//Search an element in a n array using function
function searchElement(ele: number, arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true
        }
    }
    return false
}

searchElement(102, empIds) ? console.log("Element found") : console.log("Element not found") //output: Element found
searchElement(110, empIds) ? console.log("Element found") : console.log("Element not found") //output: Element not found

//Example 5: A function takes an array and returns an array
console.log(convertToUpperCase(empNames)) //output: [ 'JOHN', 'SCOTT', 'SMITH', 'DAVID' ]

function convertToUpperCase(arr: string[]): string[] {
    let convertedUpperCaseArr: string[] = []
    for (let i = 0; i < arr.length; i++) {
        convertedUpperCaseArr[i] = arr[i].toUpperCase()
    }
    return convertedUpperCaseArr
}

console.log(empNames) //output: [ 'John', 'Scott', 'Smith', 'David' ] --> original array is not modified


export { } //to make this file a module and avoid the error: Cannot redeclare block-scoped variable 'names'.ts(2451)