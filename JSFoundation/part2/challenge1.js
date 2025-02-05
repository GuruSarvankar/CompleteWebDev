// checking if a number is greater than another number

let num1 = 5;
let num2 = 8;

if (num1 >= num2) {
  console.log("Num1 is greater than num2");
} else {
  console.log("Num1 is less than num2");
}

// checking if a string is equal to another string
let name1 = 1;
let name2 = "1";

if (name1 == name2) {
  console.log("String are equal");
} else {
  console.log("string are not equal");
}

// check if a variable is a number or not

let score = 44;

if (typeof score === "number") {
  console.log("Score is number");
} else {
  console.log("Score is not number");
}

// check if a boolean is true or false

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is not ready");
}

// check if any array is empty or not

let items = ["table", "chair"];

if (items.length == 0) {
  console.log("Array is empty = " + items.length);
} else {
  console.log("Array is not empty = " + items.length);
}
