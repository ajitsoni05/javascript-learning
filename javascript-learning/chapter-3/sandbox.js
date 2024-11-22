// Control Flow
console.log("abc");

// For Loops
for (let i = 0; i < 5; i++) {
  console.log("in loop", i);
}
console.log("loop finished");

const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);

  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// While Loops
let count = 0;
while (count < 5) {
  console.log("in while loop", count);
  count++;
}
console.log("while loop finished");

// Do- while loops
let i = 5;

do {
  console.log("do-while loop", i);
  i++;
} while (i < 5);

// conditional statements

// if statements

const age = 20;

if (age > 20) {
  console.log("You are above 20");
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if (ninjas.length > 3) {
  console.log("that's a lot of ninjas");
}

const password = "p@ssw";

if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("that password is strong enough");
} else {
  console.log("password is not strong enough");
}

// logical not
let user = false;
if (!user) {
  console.log("you must be logged to continue");
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 24, 0, 30, 100, 20, 40];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    console.log("you got a zero, you need to study harder!");
    continue;
  }
  console.log("your score is " + scores[i]);

  if (scores[i] === 100) {
    console.log("Congratulations, you got a perfect score!");
    break;
  }
}

// switch statements and strict equality

const grade = "50";

switch (grade) {
  case 50:
    console.log("Excellent job!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You can do better!");
    break;
  default:
    console.log("Invalid grade");
}
