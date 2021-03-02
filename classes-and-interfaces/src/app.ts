abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d1', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Matthew') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department('d1', 'Accounting');
// console.log(accounting);
// accounting.describe();

const employee1 = Department.createEmployee('Matthew');
const employee2 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const itDepartment = new ITDepartment('d2', ['Matthew']);
console.log(itDepartment);
itDepartment.describe();

//const accounting = new AccountingDepartment('d1', []);
const accounting = AccountingDepartment.getInstance();
accounting.describe();

accounting.addEmployee('Matthew');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();

accounting.addReport('Something went wrong...');
accounting.mostRecentReport = 'New report';
accounting.printReports();
console.log(accounting.mostRecentReport);
accounting.describe();

//const accountingCopy = { name: 'COPY', describe: accounting.describe };
//accountingCopy.describe();
