// 71 >> 78

// التكليف الاول
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mm = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(mm);

console.log("*".repeat(30));

// التكليف التاني
let myString = "EElllzzzzzzzeroo";

let aa = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(aa);

console.log("*".repeat(30));

// التكليف التالت
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray
  .reduce(function (acc, current) {
    return acc + current;
  })
  .split("")
  .filter(function (ele) {
    return ele !== ",";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(newArray);

console.log("*".repeat(30));

// التكليف الرابع
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newnumsandstrings = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return -ele;
  });
console.log(newnumsandstrings);
console.log("*".repeat(30));

// التكليف الخامس

let nums = [2, 12, 11, 5, 10, 1, 99];
let newnums = nums.reduce(function (acc, current) {
  return current % 2 !== 0 ? acc + current : acc * current;
}, 1);

console.log(newnums);

console.log("*".repeat(50));

// 79 >> 85

// التكليف الاول
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log(member.fullDetails());

console.log("*".repeat(50));

// التكليف التاني
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property);

let objMethodTwo = new Object({
  property: "Method Two",
});
console.log(objMethodTwo.property);

let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";
console.log(objMethodThree.property);

let objMethodFour = Object.assign({}, { property: "Method Four" });
console.log(objMethodFour.property);

console.log("*".repeat(50));

// التكليف التالت
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({}, { a }, threeNums, twoNums);

console.log(finalObject);

console.log("*".repeat(50));

// التكليف الرابع

let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;

let game = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${game[i]}`);
  console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[game[i]]["price"]}`);

  if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}
