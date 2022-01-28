// This function is a decorator
// Decorators execute when the class is defined, not instantiated.
// function Logger(constructor: Function) {
//     console.log('Logging...')
//     console.log(constructor)
// }

// @Logger
// class Person {
//     name = "Craig"

//     constructor() {
//         console.log('Create person object...')
//     }
// }

// const pers = new Person();
// console.log(pers)


// ----------------------------------------------------------------

// Factory Decorators - returns a function

function Logger(logString: string) {
    return function(constructor: Function) {
    console.log(logString)
    console.log(constructor)
    }
}

@Logger('LOGGING - PERSON')
class Person {
    name = "Craig"

    constructor() {
        console.log('Create person object...')
    }
}

const pers = new Person();
console.log(pers)