class Employee {

    empName: string = "Vignesh";
    empAge: number = 29;
    empSalary: number = 250000;
    empLocation: string = "Bangalore";

    displayDetails() {
        console.log(`Employee name is    : ${this.empName}`);
        console.log(`Employee age is     : ${this.empAge}`);
        console.log(`Employee salary is  : ${this.empSalary}`);
        console.log(`Employee location is: ${this.empLocation}`);
    }
}

class Child1 extends Employee {

    displayChild1Details() {
        console.log("Child1 details");
    }
}

class Child2 extends Employee {

    displayChild2Details() {
        console.log("Child2 details");
    }
}
let person = new Child1();

person.displayDetails();        // inherited from Employee
person.displayChild1Details();  // Child1 method

let person1 = new Child2();

person1.displayDetails();        // inherited
person1.displayChild2Details();  // Child2 method