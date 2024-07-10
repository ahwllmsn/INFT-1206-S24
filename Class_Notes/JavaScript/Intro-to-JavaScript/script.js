// console.log("Script is running...");

// // Variables -> Containers for data
// var introString = "Intro to JavaScript";
// let number = 5;
// const isJavaScriptFun = true;
// secondNumber = 10;


// console.log(number);

// String Methods
// let food = "Tacos";

// console.log(food.toUpperCase()); // TACOS
// console.log(food.toLowerCase()); // tacos
// console.log(food[0] + food[1]); // Ta -> Two first letters of Tacos
// console.log(food.concat(food)); // TacosTacos
// console.log(food.charAt(3)); // o -> Returns letter at index 3
// console.log(food.includes("c")); // true -> Does food include c
// console.log(food.replace("c", "k")) // Takos
// console.log(food.slice(0, 2)); // Ta -> Slicing string from index 0 to index 2 (not inclusive)
// console.log(food.split("")); // ['T', 'a', 'c', 'o', 's'] -> Split into array
// console.log(food.split("c")); // ['Ta', 'os'] -> Split into array at given argument

// Numbers & Operators
// Arithmetic Operators
let a = 5;
let b = 10;

// console.log(a + b); // 15
// console.log(b - a); // 5
// console.log(b / a); // 2
// console.log(a * b); // 50
// console.log(b % a); // 0 -> % represents the remainder after division
// // Math is a built-in JavaScript object.
// console.log(Math.sqrt(a + b)); // 3.87... -> Square root of 15
// console.log(Math.max(a, b)); // 10 -> b is larger

// Comparison Operators
let c = 7;
let d = 12;
let e = '12';

// console.log(c == d); // false
// console.log(d == e); // true -> Type coercion
// console.log(d === e); // false -> Strict comparison operator
// console.log(c > d); // false
// console.log(c < d); // true
// console.log(c != d); // true

// Logical Operators
// console.log(a < b || c > d); // true -> || OR operator
// console.log(a < b && c > d); // false -> && AND operator

// IF.. Else Conditions

let firstNumber = prompt("Please choose your first number:");

let operand = prompt("Please choose your opeator from the following choices: '+', '-', '*', '/'");

let secondNumber = prompt("Please choose your second number:");

// Use the result from the input via prompt to build a mini calculator.

let result;

if (operand == "+") {
    result = firstNumber + secondNumber;
} else if (operand == "-") {
    result = firstNumber - secondNumber;
} else if (operand == "*") {
    result = firstNumber * secondNumber;
} else {
    result = firstNumber / secondNumber;
}

console.log("The result of the calculator is: " + result);