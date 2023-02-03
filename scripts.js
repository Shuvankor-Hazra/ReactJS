// // (1) var, let, const
// var example
var firstName = "Shuvankor";
console.log(firstName);
firstName = "Hazra";
console.log(firstName);

// let example
let lastName = "Sagar";
console.log(lastName);
lastName = "Hazra";
console.log(lastName);

// const example
const firstName1 = "Shuvankor Hazra";
console.log(firstName1);

// // (2) Arrow Function
// Example 1
function showText(text) {
  console.log(text);
}
showText("JavaScript text!");

// Example 2
const showText2 = (text) => {
  console.log(text);
};
showText2("Arrow function text!");

// Example 3
const showText3 = () => {
  console.log("Normal text");
};
showText3("");

// Example 4
const showResult = (number) => {
  return number * 2;
};
console.log(showResult(2));

// Example 4
const showResult1 = (number) => number * 2;
console.log(showResult1(2));

// // (3) Spread Operator
// Array Example
const num1 = [1, 2, 3, 4];
console.log(num1);

const num2 = [...num1, 5, 6];
console.log(num2);

// Object Example (1)
const user1 = {
  fName: "Shuvankor",
  lName: "Hazra",
};
console.log(user1);

const user2 = {
  ...user1,
  age: 31,
};
console.log(user2);

// Object Example (2)
const getNumbers = (...number) => {
  console.log(number[0]);
  console.log(number[1]);
  console.log(number[2]);
  console.log(number[3]);
};
getNumbers(2, 4, 6, 8);

// // (4) Destructuring
// array Example (1)
const num3 = [1, 2, 3];
const n1 = num3[0];
const n2 = num3[1];
const n3 = num3[2];
console.log(n1);
console.log(n2);
console.log(n3);
// array Example (2)
const [n4, n5, n6] = num3;
console.log(n4);
console.log(n5);
console.log(n6);

// Object Example (1)
const user3 = {
  fName1: "Shuvankor",
  lName1: "Hazra",
  age1: 30,
};
const firstNameOne = user3.fName1;
const lastNameOne = user3.lName1;
console.log(firstNameOne);
console.log(lastNameOne);
// Object Example (1)
const { age1, fName1, lName1 } = user3;
console.log(age1);
console.log(fName1);
console.log(lName1);

// // (5) Map
const numb = [2, 4, 6, 8];
numb.map((numm) => {
  console.log(numm * 5);
});

// // (6) JavaScript Classes
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  carAge() {
    return 2023 - this.year;
  }
}
const myCar = new Car("BMW", 2017);
const yourCar = new Car("FORD", 2023);
console.log(myCar);
console.log(yourCar);
console.log(myCar.carAge());

// // (7) Array Filter()
const age2 = [14, 37, 18, 25, 32, 44, 17, 50, 12, 40];
function isVoter(vAge) {
  return vAge >= 18;
}
const voterList = age2.filter(isVoter);
console.log(voterList);

// // (8) Array Reduce()
const age3 = [14, 37, 18, 25, 32, 44, 17, 50, 12, 40];
function getTotal(first, secend) {
  return first + secend;
}
const total = age3.reduce(getTotal);
console.log(total);


// // (9) Export & Import