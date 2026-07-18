// forEach(), map(), filter(), reduce(), some(), every() --> common behaviour is - it accepts function as a parameter

// 1. forEach() = Executes a function once, for each array element
// It takes function as a parameter

//syntax - array.forEach(function(currentValue, index,array){})

//currentValue = the current element being processed in the array
//index(optional) - index of the current element being processed in the array
//array(optional) - array of the current element belongs to.

//Ex:1 Get index of all the fruits along with value

let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi']
fruits.forEach(function (element, i) { console.log("Fruits: ", element + " " + "Index: ", i) })

//using arrow function
console.log("************** Using Arrow Function **************")
fruits.forEach((element, index) => {
    console.log(`${index}`, ` ${element}`);
})


//Ex2: 

console.log("************** Convert to Upper case **************")

fruits.forEach(function (element) {
    console.log(element.toUpperCase())
})


// 2. map() - Creates a new array with the result of calling the function on every element of the array
//It takes function as a parameter
//returns same number of elements that we have original array.

//syntax - array.map(function(currentValue, index,array){})

//Ex1: Get square of all arrays of number ex:[1,2,3] and o/p is [1,4,9]

let numbers: number[] = [1, 2, 3, 4, 5]
numbers.map(function (num) {
    console.log("Squared value of " + `${num}` + " is", num * num);
})

let squaredNumber = numbers.map(function (num) {
    return num * num
})

console.log("Squared numbers are : ", squaredNumber);
console.log("Numbers are : ", numbers)

//Ex2: Double each number [1,2,3,4,5] => [1,4,6,8,10]

let doubledNumber = numbers.map(function (num) {
    return num * 2
})

console.log("Doubled numbers are : ", doubledNumber);
console.log("Numbers are : ", numbers)

//Using arrow function

let doubledNumberUsingArrow = numbers.map((num) => num * 2)

console.log("Doubled numbers are : ", doubledNumberUsingArrow);
console.log("Numbers are : ", numbers)


//3. Filter - creates a new array with all elements that pass/satisfy the function
//it takes function as a parameter
//returns same/fewer number of elements compared to the original array

//syntax - array.filter(function(currentValue, index,array){})

//Ex1: Print even numbers from an array
let evenNumbers = numbers.filter((num) => num % 2 == 0) //it return divisble by 2 number

console.log("Even Numbers : ", evenNumbers)

//Ex2: Get only numbers greater than 3

let greaterThanThree = numbers.filter((num) => num > 3)
console.log("Greater than 3 = ", greaterThanThree)


//Reduce() - Applies a function on every element of an array and return a 'SINGLE' value
//syntax - array.filter(function(accumulator,currentValue, index,array){})

//accumulator - accumulated value from previous iteration
//current value - current value being progressed

/* let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}

console.log("Sum of number : ", total) */

let totalNumber = numbers.reduce((total, num) => {
    return total + num
}, 0) //here 0 represent assigning some intial value as zero(0) to the total field

console.log("Sum of number using reduce() method: ", totalNumber)


//5. some() - checks if any element satisfies the condition
//return true if 'ATLEAST' one element get passed otherwise false
//syntax - array.some(function(currentValue, index,array){})

//EX1: check array contains negative values

let hasNegativeValues = numbers.some(function (element) {
    return element < 0
})

console.log("does number array contains negative value? ", hasNegativeValues)

let hasPositiveValue = numbers.some((num) => num > 0)
console.log("does number array contains positive value? ", hasPositiveValue)


//6. every() - check if all elements satisfy a condition
//returns true if all elements pass the condition, else false

//syntax - array.every(function(currentValue, index,array){})

//Ex1: Are all numbers are even?

let allEven = numbers.every((num) => num % 2 == 0)
console.log("Are all numbers are even?", allEven)

//Ex2: element greater than 1

let allGreaterThanOne = numbers.every((num) => num >= 1)
console.log("All elements greater than one? ", allGreaterThanOne)

//Ex3: element greater than 1

let allNumbersPositive = numbers.every((num) => num > 0)
console.log("All elements positive? ", allNumbersPositive)