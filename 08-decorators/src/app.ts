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
// Here you can see that decorators execute from bottom to top.

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        console.log('Rendering template...')
        const hookEl = document.getElementById(hookId);

        const p = new constructor()
        if (hookEl) 
            hookEl.innerHTML = template;
            hookEl!.querySelector('h1')!.textContent = p.name
    }
}

function Logger(logString: string) {
    return function(constructor: Function) {
    console.log(logString)
    console.log(constructor)
    }
}
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = "Craig"

    constructor() {
        console.log('Create person object...')
    }
}

const pers = new Person();
console.log(pers)

// --- Using a decorator inside of a class

function Log(target: any, propertyName: string | Symbol){
    console.log("Property Decorator")
    console.log(target, propertyName)

}

class Product {
    @Log
    title: string
    private _price: number

    set price(val: number) {
        if (val > 0) 
            this._price = val
        throw new Error("Invalid Price - should be positive")

    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    getPriceWithTax(tax: number){
        return this._price * (1 + tax)
    }
}