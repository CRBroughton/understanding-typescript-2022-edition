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

// function Logger(logString: string) {
//     return function(constructor: Function) {
//     console.log(logString)
//     console.log(constructor)
//     }
// }



// @Logger('LOGGING - PERSON')
// class Person {
//     name = "Craig"

//     constructor() {
//         console.log('Create person object...')
//     }
// }

// const pers = new Person();
// console.log(pers)

// --- Another example of a factory

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);

        const p = new constructor()
        if (hookEl) 
            hookEl.innerHTML = template;
            hookEl!.querySelector('h1')!.textContent = p.name
    }
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = "Craig"

    constructor() {
        console.log('Create person object...')
    }
}

const pers = new Person();
console.log(pers)