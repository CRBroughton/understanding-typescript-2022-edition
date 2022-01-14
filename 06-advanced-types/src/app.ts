type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee // Intersection type; Combine two or more types

// interface ElevatedEmployee extends Employee, Admin {} // - Alternative Intersection type

const el: ElevatedEmployee = {
    name: 'Craig',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable | Numeric

function add(a: Combinable, b: Combinable){
    if (typeof a === 'string' || typeof b === 'string') { // Type guard
        return a.toString() + b.toString()
    }
    return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name)

    if ('privileges' in emp) { // Checks if param type has privileges
        console.log('Priviledges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('Date: ' + emp.startDate)
    }
}

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log(`Loading cargo ... ${amount}`)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) { // checks to see if vehicle was created based on the Truck
        vehicle.loadCargo(1000)
    }
}


// Discriminated Unions

interface Bird {
    type: 'bird' // literal type assignment
    flyingSpeed: number
}

interface Horse {
    type: 'horse' // literal type assignment
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log(`Moving at speed: ${speed}`)
}