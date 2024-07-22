// console.log("Script is running...")


// ------------- Loops -------------

// For Loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// While Loop

// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++;
// }

// Do While Loop

// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (i < 10)

    
// For Of Loop

// let numsArray = [1, 2, 3, 4, 5, 6, 7]
// for (let num of numsArray) {
//     console.log(num)
// }

// For In Loop
// let car = {type: "Hypercar", brand: "Porsche", model: "Spyder"}

// for (let key in car) {
//     console.log(key)
//     console.log(car[key])
// }


// ------------- Functions -------------

// function sumOfTwoNumbers(a, b) {
//     return a + b;
// }

// let c = sumOfTwoNumbers(5, 12)
// console.log(c);


// Function Declaration
// function sum(a,b) {
//     return a + b
// }

// Function Expression
// let sum = function(a, b) {
// 	return a + b
// }

// Arrow Function
// let sum = (a,b) =>  a + b

// console.log(sum(5,10))


// function closedScope() {
//     let a = 5;
// }

// console.log(a)



// Closures
// let x = 10

// function outerFunction() {
    
//     let x = 10;

//     function innerFunction() {
//         console.log(x)
//     }
//     innerFunction()
// }
// outerFunction()

// Function Practice Questions

let arr = [1,2,3,4,5,6,7,8,9,10]


let obj = {key1: "value1", key2: "value2", key3: "value3"}

// 1. Write a function that will display all the numbers from 1 to 999.
function allNumbersFunction() {
    for (let i = 1; i <= 999; i++) {
        console.log(i);
    }
}
// allNumbersFunction()

// 2. Write a function that will display all even numbers " ".
function evenNumbers() {
    for (let i = 1; i <= 999; i++) {
        if (i%2 == 0) {
            console.log(i)
        }
    }
}
// evenNumbers()

// 3. Write a function that will display all number divisible by 7 " ".
function divisibleBy7() {
    for (let i = 1; i <= 999; i++) {
        if (i%7 == 0) {
            console.log(i)
        }
    }
}
// divisibleBy7()

// 4. Write a function that will iterate through an object and display all of its keys and values.
function displayObject(object) {
    for (let key in object) {
        console.log(key)
        console.log(object[key])
    }
}
// displayObject(obj)

// 5. Write a function that will iterate through an array and display all of its elements.
function displayArray(array) {
    for (let i of array) {
        console.log(i)
    }
}
// displayArray(arr)

// 6. Write a function that will iterate through a numbers array and add 1 to each of its values.
function add1toArray(array) {
    for (let i in array) {
        array[i]++
    }
    return array
}
// let array2 = add1toArray(arr)
// displayArray(array2)

// 7. Write a function that will initiate a prompt where you write the name of the month and it will return which season the month is in.
function monthToSeason() {
    let month = prompt("Enter a month:")
    let season = undefined
    if (month == 'December' || month == 'January' || month == 'February') {
        season = 'Winter'
    } else if (month == 'March' || month == 'April' || month == 'May') {
        season = 'Spring'
    } else if (month == 'June' || month == 'July' || month == 'August') {
        season = 'Summer'
    } else if (month == 'September' || month == 'October' || month == 'November') {
        season = 'Autumn'
    } else {
        season = 'Invalid input.'
    }
    console.log(season)
}
// monthToSeason()

// Array Iterator Methods

// Question #5 Re-Do
function displayAllArrayElements(value, index, array) {
    console.log(value)
}

arr.forEach(displayAllArrayElements)

// Question #6 Re-Do
function add1toAllArrayElements(value, index, array) {
    value++
    console.log(value)
}

// arr.forEach(add1toAllArrayElements)