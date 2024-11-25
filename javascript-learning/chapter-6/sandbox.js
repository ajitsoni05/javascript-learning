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
