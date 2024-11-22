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

const password = "p@sswordings";

if (password.length >= 12) {
  console.log("that password is mighty strong");
} else if (password.length >= 8) {
  console.log("that password is long enough");
} else {
  console.log("password is not long enough");
}
