//string - text value or combination of characters

/*
1.Single quote ->String literal -> ' '
2.Double quote ->String literal -> " "
3.Backtick ->String template -> ` `

index start with 0

All string methods are 'CASE-SENSITIVE'

*/

//Declartion of strings

let str1: string = 'This is a string with single quote'
let str2: string = "This is a string with double quote"
let str3: string = `This is a string with backtick`

console.log(str1)
console.log(str2)
console.log(str3)

//When to use back tick
let num: number = 10

console.log("Number is : ", num)//10 - valid
console.log("Number is ${num}")//invalid to print the num value
console.log('Number is ${num}')//invalid to print the num value
console.log(`Number is ${num}`)//10 valid

//String methods

let str: string = "Hello, Typescript!"

//1.length-find the length - how many number of characters

console.log("Length of the string: ", str.length)//18

//2.toUpperCase() and toLowerCase()
console.log("Conver str into upper case: ", str.toUpperCase())//HELLO, TYPESCRIPT!
console.log("Conver str into lower case: ", str.toLowerCase())//hello, typescript!
console.log("original string: ", str)//Hello, Typescript!

//3.charAt and indexOf

console.log("Print character of specified index: ", str.charAt(7))//T
console.log("Print index of specfied character: ", str.indexOf('s'))//11
console.log(str.indexOf('q'))//-1 bcoz this data is not available in that string

//4.subString(startIndex,endIndex)->endIndex = endIndex-1
console.log("Substring: ", str.substring(2, 4))//ll

//5.includes() -> it return true/false 
console.log("Includes method: ", str.includes('abc'))//false
console.log("Includes method: ", str.includes('Typescript'))//true
console.log("Includes method: ", str.includes('!'))//true

//6.startsWith() and endswith() -> it return true/false

console.log("Starts with: ", str.startsWith('Hello'))//true
console.log("Starts with: ", str.startsWith('he'))//false -> bcoz here string is case-sensitive
console.log("Ends with: ", str.endsWith('script'))//false
console.log("Ends with: ", str.endsWith('!'))//true

//7.replace()

console.log("Replaced string: ", str.replace('Typescript', 'World'))//Hello, World!

//8.split() -> breaks the string into multiple parts based on delimiter and returns an array
console.log(str.split(" "))//[ 'Hello,', ' Typescript!' ]
let words: string[] = str.split(" ")
console.log(words[0])//Hello,
console.log(words[1])//Typescript!

//Ex2: 
let mystring: string = "abc@gmail.com,xyzabc"
let splittedwords = mystring.split(",")
console.log(splittedwords[0])
console.log(splittedwords[1])

//9.trim(),trimStart(),trimEnd()

mystring = "     welcome to typescript ! hello                   ";
console.log("Orignal String: ", mystring)//"       welcome to typescript ! hello                   "
console.log("trim(): ", mystring.trim())//"welcome to typescript ! hello"
console.log("trimStart(): ", mystring.trimStart())//"welcome to typescript ! hello                   "
console.log("trimEnd(): ", mystring.trimEnd())//"       welcome to typescript ! hello"


//10.concat()
str1 = 'welcome'
str2 = 'to typescript'
console.log("After concat: ", str1.concat(str2))//welcometo typescript
console.log(str1 + str2)//welcometo typescript -> Not recommened to concat to use in realtime   

console.log('welcome'.concat('to typescript'))//welcometo typescript
console.log('welcome'.concat('to typescript').concat('!'))//welcometo typescript!