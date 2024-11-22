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


