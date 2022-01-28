
// // A generic Array type of strings
// const names: Array<string> = []

// // A promise with a generic Promise type, that will resolve to a number
// const promise: Promise<number> = new Promise((resolve, _reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000)
// })


// A function using two generic types. This allows Typescript to understand
// that the function returns the intersection of these two generic types.

// Simply using the object type is unspecific and therefore Typescript cannot
// infer the object types and that the returned object type will also be unknown. 

// With generics, we can tell Typescript the two params can and will be different types.
// and that we expect the returned object to be the intersection of those two supplied objects.
function merge<T, U>(objA: T, objB: U){
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Craig'}, {age: 31})
console.log(mergedObj.age)