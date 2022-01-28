
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
// function merge<T, U>(objA: T, objB: U){
//     return Object.assign(objA, objB)
// }

// const mergedObj = merge({name: 'Craig'}, {age: 31})
// console.log(mergedObj.age)


// ---


// Here we are saying 'The T and U types have to be objects', which restricts
// which types can be passed to these parameters.
function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB)
}

// With this, the below console.log will not work as intended, as the 
// second param is not of type object

// const mergedObj = merge({name: 'Craig'}, 30)
// console.log(mergedObj.age)



// ---
// Another example of generic types that is extending a interface

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value'
    if (element.length > 0)
        descriptionText = `Got ${element.length} elements`
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))


// ---

// The keyof ensure that our second param is a key of the first param.
// Passing an object without this key will result in an error.

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`
}

extractAndConvert({name: 'Craig'}, 'name')


// ---

// A generic class using generic types

class DataStorage<T extends string | number | boolean> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()

textStorage.addItem('10')
textStorage.addItem('11')
textStorage.removeItem('10')
console.log(textStorage.getItems())

// ---

// Below will not work as the DataStorage only allows certain types
// const objStorage = new DataStorage<object>()
