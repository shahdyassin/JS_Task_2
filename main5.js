//  94 >> 101

// التكليف التالت

// let para = document.getElementsByTagName("p")[0];
// let divv = document.querySelector(".our-element");
// let startdiv = divv.cloneNode();
// let lastdiv = divv.cloneNode();

// para.remove();

// function addattr(el,index){
//     el.className = index.toLowerCase();
//     el.title = `${index} element`;
//     el.setAttribute("data-value" ,index);
//     el.textContent = index;
// }

// addattr(startdiv, "Start");
// addattr(lastdiv, "End");

// divv.before(startdiv);
// divv.after(lastdiv);


console.log("*".repeat(50));

// التكليف الرابع

let mydiv = document.getElementsByTagName("div")[0];
console.log(mydiv.lastChild.nodeValue.trim());

console.log("*".repeat(50));

// التكليف الخامس
[...document.body.children].forEach(
    el => (el.onclick = _ => console.log(`This is ${el.localName}`))
);