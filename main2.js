//  86 >> 93

// التكليف الاول
let one = document.querySelector("#elzero");
let two = document.querySelector(".element");
let three = document.querySelector("[name = 'js']");
let four = document.querySelector("div");
let five = document.querySelectorAll("#elzero")[0];
let six = document.querySelectorAll(".element")[0];
let seven = document.querySelectorAll("[name = 'js']")[0];
let eight = document.querySelectorAll("div")[0];
let nine = document.getElementById("elzero");
let ten = document.getElementsByClassName("element")[0];
let eleven = document.getElementsByTagName("div")[0];
let twelve = document.getElementsByName("js")[0];
let thirteen = document.body.firstElementChild;
let fourteen = document.body.children[0];
let fifteen = document.body.childNodes[1];

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(nine);
console.log(ten);
console.log(eleven);
console.log(twelve);
console.log(thirteen);
console.log(fourteen);
console.log(fifteen);

console.log("*".repeat(50));

// التكليف التاني
// let mytest = document.images;

// for (i = 0; i < mytest.length; i++){
//     mytest[i].src ="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     mytest[i].alt = "Elzero Logo";
//     mytest[i].style = "background-color:black";
// }

console.log("*".repeat(50));

// التكليف التالت

// let inputt = document.querySelector("input");
// let result = document.getElementsByClassName("result")[0];

// inputt.oninput = function () {
//   result.innerHTML = `${inputt.value} USD Dollar = ${(
//     inputt.value * 15.6
//   ).toFixed(2)} Egyption Pound`;
// };

console.log("*".repeat(50));

// التكليف الرابع
let onee = document.querySelector(".one");
let twoo = document.querySelector(".two");

onee.title = onee.className;
twoo.title = twoo.className;

onee.textContent = onee.className;
twoo.textContent = `${twoo.className} ${twoo.attributes.length}`;

console.log("*".repeat(50));

// التكليف الخامس
let image = document.querySelectorAll("img");
for (i = 0; i < image.length; i++) {
  if (image[i].hasAttribute("alt")) {
    image[i].alt = "old";
  } else {
    image[i].alt = "Elzero New";
  }
}

console.log("*".repeat(50));

// التكليف السادس
let elNum = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
res = document.querySelector(".results");

form[0].onsubmit = function (el) {
  el.preventDefault();
  document.querySelectorAll(".box").forEach((el) => el.remove());

  for (let i = 1; i <= elNum.value; i++) {
    let myEl = document.createElement(type.value);
    let myText = document.createTextNode(text.value);

    myEl.className = "box";
    myEl.title = "Element";
    myEl.id = `id-${i}`;

    myEl.style.display = "inline-block";
    myEl.style.width = "200px";
    myEl.style.margin = "20px";
    myEl.style.padding = "10px";
    myEl.style.color = "white";
    myEl.style.backgroundColor = "blue";
    myEl.style.textAlign = "center";
    myEl.style.borderRadius = ".5rem";

    myEl.appendChild(myText);
    res.appendChild(myEl);
  }
};

let input = document.querySelectorAll(".input");
submit = document.querySelector("[type= 'submit']");
box = document.querySelectorAll(".box");

for (let i = 0; i < input.length; i++) {
  input[i].style.display = "block";
  input[i].style.boxSizing = "border-box";
  input[i].style.width = "250px";
  input[i].style.padding = "10px";
  input[i].style.margin = "15px auto";
  input[i].style.borderRadius = ".5rem";
  input[i].style.border = "1px solid black";
}

submit.style.backgroundColor = "gray";
submit.style.display = "block";
submit.style.width = "250px";
submit.style.padding = "10px";
submit.style.borderRadius = ".5rem";
submit.style.border = "none";
submit.style.margin = "15px auto";
submit.style.color = "white";
submit.style.cursor = "pointer";
