class Department {
    name: string

    constructor(n:string) { 
        this.name = n
    }

    describe(this: Department) { // Refer to instance based on Department class
        console.log('Department: ' + this.name)
    }
}

const accounting = new Department('Accounting')

accounting.describe()

const accountingCopy = { describe: accounting.describe }

accountingCopy.describe()