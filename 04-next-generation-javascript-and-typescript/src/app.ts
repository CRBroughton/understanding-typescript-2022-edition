// const userName = 'Craig'

// let age = 30

// age = 31

// function add(a: number, b: number) {
//   let result
//   result = a + b
//   return result
// }

// if (age > 30) {
//     let isOld = true
// }

// console.log(isOld)


// Arrow functions


// single expression arrow function
// const add = (a: number, b: number = 1) => a + b

// console.log(add(2, 5))

// const printOutput: (a: number | string) => void = output => console.log(output)

// const button = document.querySelector('button')

// if (button) {
//   button.addEventListener('click', event => console.log(event))
// }
// printOutput(add(5))

// // Spread Operator

// const hobbies = ['Sports', 'Cooking']
// const activeHobbies = ['Hiking']

// activeHobbies.push(...hobbies)

// const person = {
//   name: 'Craig',
//   age: 31
// }

// const copiedPerson = { ...person }

// Rest Parameters

const add = (...numbers: number[]) => { // Accepts an unlimited amount of numbers by the spread operator, turning the params into an array
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0);
}

const addTuple = (...numbers: [number, number, number]) => { // Accepts a limited amount of numbers by the spread operator, turning the params into an array
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0);
}

const addNumbers = add(5, 10, 2, 3.7)
console.log(addNumbers)