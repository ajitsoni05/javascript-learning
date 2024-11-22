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

console.log(sum+10);
