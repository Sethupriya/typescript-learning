//Varibale is a container to hold or contain some data or value

//syntax: keyword variableName :data type(optional)= value;
//Ex: Var a:number=10
//Ex: var a=10


/*

VAR   vs   LET   vs   CONST
----------------------------

1.Scope
2.Declaration/Value Assignment
3.Re-Declaration
4.Re-initialization/Re-assignment
5.Hoisting


var - We dont use var this in  Modern JS/TS. Avoid var because it has function scope and can be re-declared and re-initialized.
      It is hoisted to the top of the function or global scope.

let - Use let when you need variable that can be change.

const - Use const when you need variable that should not be change.

*/

//-----------------------------------------------------------------//

//1.Scope - Accessible area(Functional scope and Block Scope)

/* function functionalScope() {
    if (true) {
        var a = 10;
        console.log("Inside if block: " + a); //10
    }
}

functionalScope(); */

/* function blockScope() {
    if (true) {
        let a = 10;
        console.log("Inside if block: " + a); //10
        const b = 20;
        console.log("Inside if block: " + b); //20
    }
}

blockScope(); */

/* function accessibleTest() {
    if (true) {
        var x = 10;
        console.log("Inside if block: " + x); //10
        let a = 10;
        console.log("Inside if block: " + a); //10
        const b = 20;
        console.log("Inside if block: " + b); //20
    }
    console.log("Outside if block: " + x); //10
    console.log("Outside if block: " + a); //Error: Cannot find name 'a'.
    console.log("Outside if block: " + b); //Error: Cannot find name 'b'.
}

accessibleTest(); */

//-----------------------------------------------------------------//

//2.Declaration/Value Assignment

//Example 1: var can be declared without initialization.

/* var x;//declaration
console.log("Value of x: " + x); //undefined
x = 40;//initialization
console.log("Value of x: " + x); //40
x = "sethu";
console.log("Value of x: " + x); //sethu */

//Typescript is statically typed language.
//So, if we declare a variable without initialization, it will be of type 'any' by default.
//We can assign any value to it later.

//Example 2: let can be declared without initialization.

/* let y;//declaration
console.log("Value of y: " + y); //undefined
y = 50;//initialization
console.log("Value of y: " + y); //50
y = "sethu";
console.log("Value of y: " + y); //sethu  */


//Example 3: const must be declared with initialization.

/* const z = 60;//declaration and initialization
console.log("Value of z: " + z);  */
/*z = 60; //initialization
console.log("Value of z: " + z); //Error: const declarations must be initialized
z = "sethu";
console.log("Value of z: " + z); //Error: const declarations must be initialized */

//-----------------------------------------------------------------//

//3.Re-Declaration
//var allows re-declaration of the same variable in the same scope.

/* var a = 10;
var a = 20;
console.log("Value of a: " + a); //20 */

//let and const do not allow re-declaration of the same variable in the same scope.

/* let b = 30;
let b = 40; //Error: Cannot redeclare block-scoped variable 'b'.
console.log("Value of b: " + b); */

/* const c = 50;
const c = 60; //Error: Cannot redeclare block-scoped variable 'c'.
console.log("Value of c: " + c);  */


//-----------------------------------------------------------------//

//4.Re-initialization/Re-assignment

//var allows re-initialization of the same variable in the same scope.

/* var a = 10;
a = 20;
console.log("Value of a: " + a); //20 */

//let allows re-initialization of the same variable in the same scope.

/* let b = 30;
b = 40;
console.log("Value of b: " + b); //40 */

//const does not allow re-initialization of the same variable in the same scope.

/* const c = 50;
c = 60; //Error: Assignment to constant variable.
console.log("Value of c: " + c); */


//-----------------------------------------------------------------//

//5.Hoisting
//var declarations are hoisted to the top of their scope and initialized with undefined.

/* console.log("Value of a: " + a); //undefined
var a = 10; */

//let and const declarations are hoisted to the top of their scope but are not initialized.

/* console.log("Value of b: " + b); //Error: Cannot access 'b' before initialization
let b = 20; */

/* console.log("Value of c: " + c); //Error: Cannot access 'c' before initialization
const c = 30; */