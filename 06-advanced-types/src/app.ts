type Admin = {
    name: string
    priviledges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee // Intersection type; Combine two or more types

// interface ElevatedEmployee extends Employee, Admin {} // - Alternative Intersection type

const el: ElevatedEmployee = {
    name: 'Craig',
    priviledges: ['create-server'],
    startDate: new Date()
}