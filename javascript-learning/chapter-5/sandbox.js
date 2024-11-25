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
  // accessing methods
};

user.login();
user.logout();

