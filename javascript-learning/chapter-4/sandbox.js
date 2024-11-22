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
