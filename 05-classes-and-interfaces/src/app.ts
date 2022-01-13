abstract class Department { // abstract classes can't be instantiated, only inherited
    static fiscalYear = 2020
    // private name: string
    protected employees: string[] = [] // protected is available to this class and extended classes

    constructor(protected readonly id: string, public name: string) { 
        // this.name = n
    }

    static createEmployee(name: string) { // Static methods can be called directly 
        return { name: name }             // Static members can't be accessed inside the class. You'd haveo to use class_Name.static_Method
    }

    // describe(this: Department) { // Refer to instance based on Department class
    //     console.log(`Department (${this.id}): ${this.name}`)
    // }

    abstract describe(this: Department): void // Abstract method - forces extended classes to override
    
    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }

    describe() {
        console.log('IT Department - ID: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string
    private static instance: AccountingDepartment

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value')
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    } 

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance
        }
        return this.instance = new AccountingDepartment('d2', []);
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports(){
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Craig'])

it.addEmployee('Craig')
it.addEmployee('Max')


it.describe()
it.printEmployeeInformation()
console.log(it)

// const accounting = new AccountingDepartment('a1', [])
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report'
console.log(accounting.mostRecentReport)

accounting.addReport('Something went wrong...')

accounting.addEmployee('Craig')

// accounting.printReports()

// accounting.printEmployeeInformation()

accounting.describe()

// const accountingCopy = { describe: accounting.describe }

// accountingCopy.describe()
