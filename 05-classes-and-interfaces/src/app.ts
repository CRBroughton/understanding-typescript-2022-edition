class Department {
    // private name: string
    protected employees: string[] = [] // protected is available to this class and extended classes

    constructor(private readonly id: string, public name: string) { 
        // this.name = n
    }

    describe(this: Department) { // Refer to instance based on Department class
        console.log(`Department (${this.id}): ${this.name}`)
    }
    
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
}

class AccountingDepartment extends Department {
    private lastReport: string

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

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
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

const it = new ITDepartment('d1', ['Craig'])

it.addEmployee('Craig')
it.addEmployee('Max')


it.describe()
it.printEmployeeInformation()
console.log(it)

const accounting = new AccountingDepartment('a1', [])

accounting.mostRecentReport = 'Year End Report'
console.log(accounting.mostRecentReport)

accounting.addReport('Something went wrong...')

accounting.addEmployee('Craig')

accounting.printReports()

accounting.printEmployeeInformation()

// const accountingCopy = { describe: accounting.describe }

// accountingCopy.describe()
