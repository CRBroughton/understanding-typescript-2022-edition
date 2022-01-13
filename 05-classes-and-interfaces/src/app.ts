type AddFn = (a: number, b: number) => number

// interface AddFn { // alternative way other than type
//     (a: number, b: number): number
// }

let add: AddFn

add = (n1: number, n2: number) => n1 + n2

interface Named { 
    readonly name?: string
    outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable { // multiple interfaces can be here
    name?: string
    age = 30

    constructor(n?: string) { // optional, or use a default value as a param
       if (n) {
        this.name = n
       }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`)
        }
        console.log('Hi!')
    }
}

let user1: Greetable

user1 = new Person('Craig')

user1.greet('Hi there - I am')
console.log(user1)