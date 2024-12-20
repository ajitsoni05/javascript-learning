// Document Object Modelling
// querying the dom
const para = document.querySelector("p");

console.log(para);

const errorEle = document.querySelector(".error");

console.log(errorEle);

const divError = document.querySelector("div.error");

console.log(divError);

const element = document.querySelector(
  "body > div:nth-child(2) > p:nth-child(1)"
);

// getting all the para tags
console.log("Getting all the para tags...");
const paraTags = document.querySelectorAll("p");

paraTags.forEach((para) => {
  console.log(para);
});

// getting all the class error tags
console.log("Getting all the class error tags...");
const errorTags = document.querySelectorAll(".error");

// logging one of the error tags
console.log(errorTags[1]);

// get element by ID

// get elements by their class name

// get elements by their tag name

const paras = document.querySelectorAll("p");

console.log("Printing all the inner text of all tha para tags...");
paras.forEach((para) => {
  console.log(para.innerText);
});

const content = document.querySelector(".content");

const people = ["mario", "luigi", "yoshi"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
