//if condition

/*

if(condition){
//statement or block of code
}

*/

//EXAMPLE 1:

/* let age: number = 20;

if (age >= 18) {
    console.log("Eligible for vote")
} */


//if else condition

/*

if(condition){
//statements
}else{
    //statements
    }


*/

//Example 2: even or odd

/* let num: number = 10

if (num % 2 == 0) {
    console.log(`${num} is even`)
} else {
    console.log(`${num} is odd`)
} */


//Nested If else

//Example 3: Depending on marks display grade

/* let marks: number = 60

if (marks >= 91 && marks <= 100) {
    console.log("Grade A")
} else if (marks >= 81 && marks <= 90) {
    console.log("Grade B")
} else if (marks >= 71 && marks <= 80) {
    console.log("Grade C")
} else if (marks >= 61 && marks <= 70) {
    console.log("Grade D")
} else if (marks >= 51 && marks <= 60) {
    console.log("Grade E")
}
else {
    console.log("Grade F")
} */


//Switch statement

//Example 4: Print week based on number

let week: number = 10

switch (week) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Option is incorrect to select the day")
}