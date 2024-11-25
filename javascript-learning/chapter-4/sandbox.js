// functions
function greet() {
  console.log("Hello there!");
}

// function invokation
greet();
greet();
greet();

// function expression
const speak = function () {
  console.log("Goodday!");
};

speak();
speak();
speak();

// NOTE: function declarations are  hoisted while the function expression isn't hoisted

// arguments and parameters

// here name is parameter
const greeting = function (name) {
  console.log(`Hello, ${name}!`);
};

// argument
greeting("John");

// default parameters
const greetAgain = function (name = "Guest", time = "morning") {
  console.log(`Good ${time}, ${name}!`);
};

greetAgain();
greetAgain("Jane");
greetAgain("Jane", "afternoon");

// return keyword

const addNumbers = function (a, b) {
  return a + b;
};

const sum = addNumbers(5, 10);

console.log(sum);

console.log(sum + 10);

// arrow functions
const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};

console.log(calcArea(5));

// when there is only one parameter
const greetPerson = (name) => `Hello, ${name}!`;

console.log(greetPerson("John"));

// converting a simple function into arrow function

const bill = function (products, tax) {
  let total = 0;
  for (let product of products) {
    total += product;
  }
  return total + total * tax;
};

// arrow version
const calculateBill = (products, tax) => {
  let total = 0;
  for (let product of products) {
    total += product;
  }
  return total + total * tax;
};

products = [10, 20, 13, 30, 31];

result = calculateBill(products, 20);

console.log(result);

// callback functions | we can pass a function as an argument
// and this function is called callback function

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

people.forEach((person, index) => {
  console.log(index, person);
});

// Alternatively we can create an arrow function and call forEach method with that arrow function

const logPerson = (person, index) => {
  console.log(index, person);
};

people.forEach(logPerson);
