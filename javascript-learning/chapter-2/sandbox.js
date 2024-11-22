// Console to print statements

// console.log(1);
// console.log(2);


// let keyword to initialize variables which can be overwritten to some other value

let age = 24;
let year = 2024;

console.log(age,year);


// const keyword to initialize variables that cannot be changed
const points =50;
// Below line will give uncaught type error - Assignment to a constant
// points = 30;
console.log(points);

// An older way of initializing the variables is var keyword
var score = 75;
console.log(score);



// Data types

// Strings
 console.log('Hello, World!')

let firstname = 'Ajit'
let lastname = 'Soni'

let fullname = firstname +' ' +lastname 

console.log(fullname)

// getting characters
console.log(fullname[0])

// getting length of the string
console.log(fullname.length)

// string methods
// methods which dont alter the string
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())

// getting the first index of a certain character
console.log(fullname.indexOf('i'))

// getting all the indices of a certain character



// getting last index of a certain character
console.log(fullname.lastIndexOf('i'))


// slice and substr
let email = "ajitsoni000005@gmail.com"

// slice the name
let result = email.slice(0,8)
console.log(result)

// substr the email provider
result = email.substr(15,5)
console.log(result)



// replace function

// only replaces the first occurrence of the character
result = email.replace('0','1')
console.log(result)

function sum(...args){
    let total =0
    for (let num of args){
        total += num
    }
    return total
}
console.log(sum(1,2,4,8));

// Numbers

let radius = 10
let pi = 3.14;

let area = pi * radius**2


console.log(area)

// Nan - Not a number
console.log(5/'hello')


// Strings | Template strings
let message = `Hello, my name is ${fullname}. I am ${age} years old and I was born in the year ${year}.`
console.log(message)

// Usecase of template string | creating html template
let html = `
<html>
<body>
    <h1>${message}</h1>
</body>
</html>
`
console.log(html)


// Arrays 
let ninjas = ['ajit','ayush', 'anurag']

// JavaScript is a zero based language | so answer to below would be ayush
console.log(ninjas[1])


// Arrays storing different types 

let random = ['ajit','ayush',10,30]

console.log(random)

// array methods | joining the elements

 result = random.join('-')

 console.log(result)
 // ajit-ayush-10-30

// joining two arrays

let array1 = ['a','b','c']
let array2 = ['d','e','f']

result = array1.concat(array2)

console.log(result)

// Aliter | using spread operator

 result = [...array1,...array2]
 console.log(result)

 // Aliter 
 result = array1.concat(['d','e','f'])

 console.log(result)

 // Aliter
 result = array1.push(...array2)


//  console.l og(array1)

// popping off the last element 
// 'f'
result = array1.pop()

console.log(result)

// undefined

let Age;

console.log(Age,Age+3,`The age of the person is ${Age}`)


// booleans and comparisons
// first two elments are booleans and latter two elments are strings
console.log(true,false,"true","false")


// includes operator for array
email = 'ajjitsoni05@gmail.com'
 console.log(email.includes('@'))
 // true 

 console.log(email.includes('!'))
// false 

let name = 'shaun';

// true, it compares lexogrphical orders of the string 
console.log(name > 'shaum')


let summation = 25;
// loose comparison
// true
console.log('Comparing summation losely : ',summation == '25')

// false
console.log('Comparing summation not equal losely : ',summation != '25')

// strict comparison 
// fakse
console.log('Comparing summation strictly : ',summation === '25')

// true
console.log('Comparing summation not equal strictly : ',summation!=='25')
