// console.log("Script is running...")

// const arr = [10,22,35,24,65]

// For Each

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(
//     function logNumber(num) {
//         console.log(num)
//     }
// )

// arr.forEach((element, indexOfElement, array) => {
//     console.log(element)
//     console.log(indexOfElement)
//     console.log(array)
// })

// arr.forEach(element => {
//     console.log(element)
// })

const foods = [
    {name: 'Apple', type: 'fruit', calories: 95},
    {name: 'Banana', type: 'fruit', calories: 105},
    {name: 'Broccoli', type: 'vegetable', calories: 55},
    {name: 'Carrot', type: 'vegetable', calories: 25},
    {name: 'Avocado', type: 'fruit', calories: 250},
    {name: 'Chicken', type: 'poultry', calories: 350}
]

// forEach
// foods.forEach((foodItem, index) => {
//     console.log(foodItem.name)
// }
// )

// map
// const foodTypes = foods.map((foodItem, index) => {
//     // foodItem.calories += 800;
//     return {...foodItem, calories: foodItem.calories+= 800}
// })

// console.log(foodTypes)

// filter()
// const foodsUnder100Calories = foods.filter(foodItem => {
//     return foodItem.calories < 100;
// })  

// console.log(foodsUnder100Calories)

// find()
// const chicken = foods.find(foodItem => {
//     return foodItem.type == 'vegetable'
// })

// console.log(chicken)

// findIndex()
// const veggieIndex = foods.findIndex(foodItem => {
// 	return foodItem.type == 'poultry'
// })

// console.log(veggieIndex)

// reduce()
// let sumOfCalories = foods.reduce((acc, foodItem) => {
//     return acc += foodItem.calories  
// }, 0)

// console.log(sumOfCalories)

// --------------Array Iterator Method Exercises --------------

// 1. Get an array of food types using map().
const foodTypesArray = foods.map(value => {
    return value.type
})
console.log(foodTypesArray)

// 2. Filter foods with calories greater than 100.
const greaterThan100 = foods.filter(value => {
    return value.calories > 100
}
)
console.log(greaterThan100)

// 3. Find the first fruit in the array.
const firstFruit = foods.find(value => value.type == 'fruit')
console.log(firstFruit)

// 4. Check if there is any food with the name 'Apple'.
const anyApples = foods.some(item => item.name == 'Apple')
console.log(anyApples)

// 5. Check if all foods have calories less than 700.
const allCaloriesUnder700 = foods.every(item => item.calories < 700)
console.log(allCaloriesUnder700)

// 6. Calculate the average calories of all foods using reduce().
const avgCalories = foods.reduce((sum, item) => {
    sum += item.calories
    return sum / foods.length
}, 0)
console.log(avgCalories);

// 7. Sort foods alphabetically by name using sort().
const alphaSortedFoods = foods.sort()
console.log(alphaSortedFoods);

// 8. Create an array of food names with with their types as a string, ex. ["Apple is a fruit", "Banana is a fruit", ...].
const namesAndTypes = foods.map(item => {
    return item.name + " is a " + item.type
})
console.log(namesAndTypes);

//9. Filter foods that are fruits.
const justFruits = foods.filter(item => {
    return item.type == 'fruit'
})
console.log(justFruits); 

// 10. Find the index of 'Avocado'.
const avocadoIndex = foods.findIndex(item => {
    return item.name == 'Avocado'
})
console.log(avocadoIndex);
