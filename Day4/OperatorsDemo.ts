//Arithmetic operators:
let a: number = 10, b: number = 20

/* console.log(`*********************ARITHMETIC OPERATORS********************`)


console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(5 ** 2) */

/* console.log(`*********************ASSIGNMENT OPERATORS********************`)

a= 10, b=20

console.log(a += b)
console.log(a -= b)
console.log(a *= b)
console.log(a /= b)
console.log(a %= b)
console.log(a **= 2)  */


//console.log(`*********************RELATIONAL OPERATORS********************`)

//return boolean response
//> < >= <= == != ===(Strict equality)

/* a = 10, b = 20
let c: any = "20"

console.log(a > b)//false
console.log(a < b)//true
console.log(a >= b)//false
console.log(a <= b)//true
console.log(a == b)//false
console.log(a != 2) //true

console.log(a === b)//false(VALUE is false bcoz data is not same)
console.log(typeof a === typeof b)//true(Datatypes are same that's why it returned true)

console.log(`****************************Difference bw == vs ===**********************`)

console.log(b == c)//true
console.log(b === c)//false(it checks value and data types) */


//Logical operators - && || !
//return boolean values
//works between boolean variables

/*

b1    b2     &&     ||     !b1
-------------------------------
true  true  true   true   false
true  false false  true
false true  false  true   true
false false false  false
*/


/* console.log(`********************* LOGICAL OPERATORS *******************`)

let b1: boolean = true
let b2: boolean = false

console.log(b1 && b2)//false
console.log(b1 || b2)//true
console.log(!b1)//false
console.log(!b2)//true */

//Mixing of Logical and Relational operators

console.log(`***************Mixing of Logical and Relational operators************`)
console.log(a < b ? true : false)//true
console.log(a > b ? true : false)//false
console.log(a < b && 30 < 40 ? true : false)//true
export { }