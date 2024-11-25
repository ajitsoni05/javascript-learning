let user = {
  name: "crystal",
  age: 30,
  email: "crystal@netninja.co.uk",
  location: "berlin",
  blogs: ["why mac and cheese", "10 things to make with marmite"],
};

console.log(user);

// accessing properties with dot notation
console.log(user.name);

// accessing properties with square brackets notation
console.log(user["email"]);

// updating properties with square brackets notation
user["location"] = "london";
console.log(user.location);

// change properties
user.age = 31;
console.log(user.age);

// using square bracket notation with a variable
const key = "location";

console.log(user[key]);

// typeof
console.log(typeof user); // object

console.log(typeof user["name"]); // string

console.log(typeof user.location); // string

user = {
  name: "crystal",
  age: 30,
  email: "crystal@netninja.co.uk",
  location: "berlin",
  blogs: ["why mac and cheese", "10 things to make with marmite"],
  // methods are function defined inside the object
  login: function () {
    console.log("user is logged in");
  },
  logout: function () {
    console.log("user is logged out");
  },
  logBlogs: function () {
    console.log(this.blogs);
  },
};

user.login();
user.logout();
user.logBlogs();

// window object
// console.log(this);

/*
 using arrow function as a method inside object literal 
 would make the usage of this keyword as window object instead of 
*/

// regular function method with shorthand notation
user = {
  name: "crystal",
  age: 30,
  email: "crystal@netninja.co.uk",
  location: "berlin",
  blogs: ["why mac and cheese", "10 things to make with marmite"],
  login() {
    console.log("user is logged in");
  },
  logout() {
    console.log("user is logged out");
  },
  logBlogs() {
    console.log(this.blogs);
  },
  logLocation() {
    console.log(`User's location is ${this.location}`);
  },
};

user.logLocation();

// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

// generates a random number between 0 and 100
console.log(Math.round(random * 100));
