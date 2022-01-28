// This function is a decorator
// Decorators execute when the class is defined, not instantiated.
function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

@Logger
class Person {
    name = "Craig"

    constructor() {
        console.log('Create person object...')
    }
}

const pers = new Person();
console.log(pers)