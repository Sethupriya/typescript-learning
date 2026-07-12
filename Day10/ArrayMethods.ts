
let numbers: number[] = [1, 2, 3, 4, 5]
let fruits: string[] = ['apple', 'banana', 'orange', 'mango']

console.log("Numbers Array:", numbers) //[ 1, 2, 3, 4, 5 ]
console.log("Fruits Array:", fruits) //[ 'apple', 'banana', 'orange', 'mango' ]

//length -> it is array attribute.

console.log("Size of numbers array :", numbers.length) //5
console.log("Size of fruits array :", fruits.length) //4

//PUSH - Add single/multiple elements at the end of the array.
//Syntax: arrayName.push(element1, element2, ..., elementN)

numbers.push(6, 7)
console.log("After push() : ", numbers) //[ 1, 2, 3, 4, 5, 6, 7 ]

//POP - Remove the last element from the array and return that element.
//Syntax: arrayName.pop()

let popedElement = fruits.pop()
console.log("After pop() : ", fruits) //[ 'apple', 'banana', 'orange' ]
console.log("Poped Element : ", popedElement) // 'mango'


//SHIFT - Remove the first element from the array and return that element.
//Syntax: arrayName.shift()

let firstElement = numbers.shift()
console.log("After shift() : ", numbers) //[ 2, 3, 4, 5, 6, 7 ]
console.log("First Element : ", firstElement) // 1

//UNSHIFT - Add single/multiple elements at the beginning of the array.
//Syntax: arrayName.unshift(element1, element2, ..., elementN)

fruits.unshift('kiwi', 'pear')
console.log("After unshift() : ", fruits) //[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]



//CONCAT - Merge two or more arrays and return a new array.
//Syntax: arrayName1.concat(arrayName2, arrayName3, ..., arrayNameN)

let concatenatedArray = numbers.concat([8, 9], [10])
console.log("Array: " + numbers) // [ 2, 3, 4, 5, 6, 7 ] -here numbers array is not changed after concat() method.
console.log("Concatenated Array: " + concatenatedArray) // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//SLICE - Extracts a section of an array
// Starting Index from zero
// Ending index will be exclusive Ex. if 3 is ending index then it will extract till 2nd index only.
//Syntax: arrayName.slice(startIndex, endIndex)

console.log(fruits.slice(1, 3)) // ['pear', 'apple']


//SPLICE - Adds/Removes elements from an array (From everywhere in the array)
//Syntax: arrayName.splice(startIndex, deleteCount, item1, item2, ..., itemN)

console.log("Current fruits array: ", fruits) // [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

//Ex1: only remove elements from the array

let removedElements = fruits.splice(1, 2) //it will remove 2 elements from index 1
console.log("After splice(1,2) : ", fruits) // [ 'kiwi', 'banana', 'orange' ]
console.log("Removed Elements : ", removedElements) // [ 'pear', 'apple' ]

//Ex2: not removed but added elements in the array

fruits.splice(1, 0, 'pineapple', 'grape') //it will add 2 elements at index 1
console.log("After splice(1,0,'pineapple','grape') : ", fruits) // [ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ]


//Ex3: both remove and add elements in the array

let removedElements3 = fruits.splice(1, 2, "mango", "cherry") //it will remove 2 elements from index 1 and add 2 elements at index 1
console.log("After splice(1,2,'mango','cherry') : ", fruits) // [ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]
console.log("Removed Elements : ", removedElements3) // [ 'pineapple', 'grape' ]

//INDEXOF - Finds the index of the first occurrence of an element in the array. If the element is not found, it returns -1.
//Syntax: arrayName.indexOf(searchElement, fromIndex) or arrayName.lastIndexOf(searchElement, fromIndex) 

//Ex1:

let bananaIndex = fruits.indexOf('banana') //3
console.log("Index of 'banana' in fruits array: ", bananaIndex) //3

//Ex2:

let papayaIndex = fruits.indexOf('papaya')
console.log("Index of 'papaya' in fruits array: ", papayaIndex) //-1

//Ex3:
bananaIndex = fruits.indexOf('banana', 2) //it will search for 'banana' from index 2
console.log("Index of 'banana' in fruits array: ", bananaIndex) //3


//Includes - Checks if an element exist
//return true or false
//Syntax: arrayName.includes(searchElement, fromIndex)

let isAppleExist = fruits.includes('apple')
console.log("Is 'apple' exist in fruits array: ", isAppleExist) //false

let isMangoExist = fruits.includes('mango')
console.log("Is 'mango' exist in fruits array: ", isMangoExist) //true

//toString() - Converts an array to a string and returns the result.
let fruitsString = fruits.toString()
console.log("Fruits Array as String: ", fruitsString) //kiwi,mango,cherry,banana,orange

let numbersString = numbers.toString()
console.log("Numbers Array as String: ", numbersString) //2,3,4,5,6,7

let myarray: string[] = ['w', 'e', 'l', 'c', 'o', 'm', 'e']
console.log(myarray.toString())

export { }