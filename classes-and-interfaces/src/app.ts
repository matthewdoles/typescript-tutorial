class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    //this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Matthew') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

// const accounting = new Department('d1', 'Accounting');
// console.log(accounting);
// accounting.describe();

const itDepartment = new ITDepartment('d2', ['Matthew']);
console.log(itDepartment);
itDepartment.describe();

const accounting = new AccountingDepartment('d1', []);
console.log(accounting);
accounting.describe();

accounting.addEmployee('Matthew');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();

accounting.addReport('Something went wrong...');
accounting.printReport();

//const accountingCopy = { name: 'COPY', describe: accounting.describe };
//accountingCopy.describe();
