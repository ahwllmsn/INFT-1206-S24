console.log("Script is running...");

// ---------------- Objects ----------------

// let car = {
//     type: "Supercar", // type => KEY, Supercar => VALUE
//     brand: "Porsche",
//     model: "Spyder",
//     year: 2023,
//     colour: "yellow",
//     subCar: {
//         brand: "Rimac",
//         colour: "blue"
//     },
//     numArray: [1, 2, 3],
//     startEngine: function() {
//         console.log("Engine started");
//     }

// }
// car.brand = car // This is an example of a circular reference when an Object references itself.

// console.log(car.brand) // Porsche
// console.log(car["brand"]) // Porsche
// console.log(car.subCar.brand) // Rimac

// console.log(Object.keys(car)); // Array of keys
// console.log(Object.values(car)); // Array of values
// console.log(Object.entries(car)); // Returns both keys AND values


// ---------------- Arrays ----------------

// let num = 5; // number
// let classSubject = 'javascript'; // string
// let isCodingFun = true // boolean

// let mixArray = [5, 'javascript', true];
// // console.log(mixArray);

// let numArray = [1, 2, 3];
// numArray.push(5) // Append 5 to the end of the array

// console.log(numArray);

// console.log(mixArray.concat(numArray));


let testArray = ['a', 'b', 'c', 'd', 'e'];

let newArray = testArray.splice(0, 'hello', 'world');

console.log(testArray)

console.log(newArray);


let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
