class Department {
    name: string
    private employees: string[] = []

    constructor(n:string) { 
        this.name = n
    }

    describe(this: Department) { // Refer to instance based on Department class
        console.log('Department: ' + this.name)
    }
    
    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting')

accounting.addEmployee('Craig')
accounting.addEmployee('Max')


accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = { describe: accounting.describe }

// accountingCopy.describe()
