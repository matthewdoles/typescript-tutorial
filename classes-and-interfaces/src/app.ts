class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

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

const accounting = new Department('d1', 'Accounting');
console.log(accounting);
accounting.describe();

accounting.addEmployee('Matthew');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();

//const accountingCopy = { name: 'COPY', describe: accounting.describe };
//accountingCopy.describe();
