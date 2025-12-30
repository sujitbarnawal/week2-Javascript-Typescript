// 🧩 Problem 1: Sum of Numbers (Typing Practice)

// Problem:
// Write a function that takes an array of numbers and returns the sum.

// Requirements:

// Use proper TypeScript types

// No any

function sumOfNumbers(nums:number[]):number{
     return nums.reduce((a,b)=>a+b)
}

console.log(sumOfNumbers([1,2,3,4,5]))


// 🧩 Problem 2: Find Max Value

// Problem:
// Return the largest number from an array.

function largestNumber(nums:number[]):number{
    return Math.max(...nums)
}

console.log(largestNumber([1,34,45,23,88,2,98,3,4,5,6,7,2,1]))

// 🧩 Problem 3: Count Vowels (Union + String)

// Problem:
// Count vowels in a given string.

function countVowels(data:string):number{
    const vowels ="aeiou"
    let count=0
    const lowerCaseData = data.toLowerCase()
    for (const char of lowerCaseData){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}

console.log(countVowels("sujit"))
console.log(countVowels("bbbbb"))

// 🧩 Problem 4: Union Type Handling

// Problem:
// Accept string | number and return its length.

// "hello" → 5

// 12345 → 5

function getLength(data:number | string):number{
    if(typeof data ==="string"){
        return data.length
    }
    return data.toString().length
}

console.log(getLength("sujit"))
console.log(getLength(45))


// 🧩 Problem 5: User Validator (Interface)

// Problem:
// Create a function that checks if a user is valid.

// Rules:

// id must be a number

// email is optional

// isActive must be true

interface User {
    id: number,
    name:string,
    email:string,
    isActive:boolean
}

function validateUser(user:User):string{
    if(user.id!==null && user.id>0 && user.isActive){
        return `${user.name} is a valid user and his email id is ${user.email}`
    }
    return `${user.name} is not a valid user`
}

const user1={
    id:1,
    name:"sujit",
    email:"sujit@gmail.com",
    isActive:true
}
const user2={
    id:0,
    name:"sujit2",
    email:"sujit2@gmail.com",
    isActive:true
}
const user3={
    id:2,
    name:"sujit3",
    email:"sujit3@gmail.com",
    isActive:false
}

console.log(validateUser(user1))
console.log(validateUser(user2))
console.log(validateUser(user3))