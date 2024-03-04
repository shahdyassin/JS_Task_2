//  94 >> 101

// التكليف التاني
let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title='Current']");
let clsss = document.querySelector(".classes-list div");

function addrematstart() {
  document.querySelectorAll("span").forEach((el) => el.remove());

  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (add.value) {
      current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
    }
    if (remove.value) {
      current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
  }
  this.value = "";
  if (current.classList.length) {
    [...current.classList].sort().forEach((el) => {
      let spannn = document.createElement("span");
      spannn.textContent = el;
      clsss.append(spannn);
    });
  } else {
    clsss.textContent = "No Classes To Show";
  }
}
add.onblur = addrematstart;
remove.onblur = addrematstart;
