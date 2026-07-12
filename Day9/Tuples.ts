/*

Tuples in Typescript:
====================
    -Tuples are special type of array that can store multiple values of different types.
    -Tuples are declared using square brackets [] and specifying the types of elements in the tuple.
    -Index starts from 0(zero).
    -Tuples are ordered collection of elements.
    -Tuples is a fixed length array, which means the number of elements in the tuple is fixed and cannot be changed.
*/

//Example 1: tuple with 2 values

/* let person: [string, number] = ["John", 101]

console.log(person) //output: [ 'John', 101 ]
console.log("Name: " + person[0]) //output: Name: John
console.log("Id: " + person[1]) //output: Id: 101 */


//Example 2: tuple with multiple values
let user: [number, string, boolean, number, string] = [10, "John", true, 101, "welcome"]
console.log(user) //output: [ 10, 'John', true, 101, 'welcome' ]

//Example 3: Iterating over a tuple using for loop

console.log("User Details using traditional way....")

for (let i = 0; i < user.length; i++) {
    console.log("User Detail: " + user[i]);
}


//Example 4: Iterating over a tuple using for..in loop -- > it uses "index" of the tuple
console.log("User Details using for..in loop....")
for (let i in user) {
    console.log(user[i]);
}

//Example 5: Iterating over a tuple using for..of loop -- > it uses "value" of the tuple
console.log("User Details using for..of loop....")
for (let value of user) {
    console.log(value);
}

//Example 6: Tuple array - array of tuples

console.log("Student Details using tuple array....")

let students: [number, string][] = [[101, "John"], [102, "Scott"], [103, "Smith"], [104, "David"]]
console.log(students) //output: [ [ 101, 'John' ], [ 102, 'Scott' ], [ 103, 'Smith' ], [ 104, 'David' ] ]

console.log(students[0]) //output: [ 101, 'John' ]
console.log(students[0][0]) //output: 101
console.log(students[0][1]) //output: John