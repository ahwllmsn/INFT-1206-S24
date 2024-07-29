// console.log("Script is running...")

// JS Classes

// let calculator = {
//     firstNumber: 0,
//     operand: '+',
//     secondNumber: 0,
//     result: 0,
//     calculate() {
//         let result;
//         let firstNumber = this.firstNumber;
//         let secondNumber = this.secondNumber;
//         let operand = this.operand;
//         if (operand == "+") {
//             result = firstNumber + secondNumber;
//         } else if (operand == "-") {
//             result = firstNumber - secondNumber;
//         } else if (operand == "*") {
//             result = firstNumber * secondNumber;
//         } else {
//             result = firstNumber / secondNumber;
//         }
//         this.result = result;
//         this.displayResult();
//     },
//     initiatePrompts() {
//         let firstNumber = prompt("Please choose your first number:");
//         this.firstNumber = firstNumber;
//         let operand = prompt("Please choose your operator from the following choices: '+', '-', '*', '/'");
//         this.operand = operand;
//         let secondNumber = prompt("Please choose your second number:");
//         this.secondNumber = secondNumber;
//         this.calculate();
//     },
//     displayResult() {
//         console.log("The result of the calculator is: " + this.result);
//     }
// }
// calculator.initiatePrompts();


// Two objects: 
let car1 = {
    year: 2024,
    brand: 'Chevrolet',
    price: 55000,
    preowned: false,
    colour: 'white',
}


let car2 = {
    year: 2025,
    brand: 'Chevrolet',
    price: 40500,
    preowned: false,
    colour: 'red',
}

// Car class.
class Car {
    constructor(yearArg, brandArg, price, preowned = false, colour) {
        console.log('I am the constructor.')
        this.year = yearArg
        this.brand = brandArg
        this.price = price
        this.preowned = preowned
        this.colour = colour
    }

    discountPrice() {
        this.price -= 1000;
    }
}

// This an an example of inheritance.
class Motorcycle extends Car {

    myProperty = 1;
    #myPrivateProperty = 2;

    constructor(year, brand, price, preowned = false, colour, numOfWheels = 2) {
        super(year, brand, price, preowned, colour)
        this.numOfWheels = numOfWheels;
    }
    discountPrice() {
        this.price -= 500;
    }
    static displayName() {
        console.log("Motorcycle Class");
    }
}

let moto = new Motorcycle(2023, 'Honda', 14000, false, 'Black', 2);
console.log(moto);
moto.discountPrice();
console.log(moto);
Motorcycle.displayName();
console.log(myPrivateProperty);

// Creating an new instance of the Car class.
// let car3 = new Car(2025, 'Chevrolet', 39000, true, 'Blue');
// console.log(car3);

// Calculator class.
// class Calculator {
//     constructor(firstNumber, operand, secondNumber, result = 0) {
//         this.firstNumber = firstNumber;
//         this.operand = operand;
//         this.secondNumber = secondNumber;
//         this.result = result;
//     }

//     calculate() {
//         let result;
//         let firstNumber = this.firstNumber;
//         let secondNumber = this.secondNumber;
//         let operand = this.operand;
//         if (operand == "+") {
//             result = firstNumber + secondNumber;
//         } else if (operand == "-") {
//             result = firstNumber - secondNumber;
//         } else if (operand == "*") {
//             result = firstNumber * secondNumber;
//         } else {
//             result = firstNumber / secondNumber;
//         }
//         this.result = result;
//         this.displayResult();
//     }

//     initiatePrompts() {
//         let firstNumber = prompt("Please choose your first number:");
//         this.firstNumber = firstNumber;
//         let operand = prompt("Please choose your operator from the following choices: '+', '-', '*', '/'");
//         this.operand = operand;
//         let secondNumber = prompt("Please choose your second number:");
//         this.secondNumber = secondNumber;
//         this.calculate();
//     }

//     displayResult() {
//         console.log("The result of the calculator is: " + this.result);
//     }
// }

// let calc = new Calculator(0, '+', 0.0);
// calc.initiatePrompts();