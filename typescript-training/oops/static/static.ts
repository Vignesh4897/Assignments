//static belongs to the class itself, not to the objects created from the class.

class employee{
    //properties/data
    empName       : string;
    empAge        : number;
    empSalary     : number;
    empExperience : number;
     
    //static property
    static empCompany :string = "Microsoft";

    //constructor
    constructor(name:string,age:number,salary:number,experience:number)
    {
      this.empName       = name;
      this.empAge        = age;
      this.empSalary     = salary;
      this.empExperience = experience;
    }
    //methods
    displayDetails()
    {
     console.log(`Employee Name is    :${this.empName}`);
     console.log(`Employee Name is    :${this.empAge}`);
     console.log(`Employee Name is    :${this.empSalary}`);
     console.log(`Employee Name is    :${this.empExperience}`);
    }
    //static method
    static displayCompany()
    {
       console.log(`Employee Company is :${employee.empCompany}`);
    }

}
let person = new employee("Vignesh",29,2500000,4);

//accessing the properties through object
console.log(person.empName);
console.log(person.empAge);
console.log(person.empSalary);
console.log(person.empExperience);

//Access static property through class
console.log(employee.empCompany);
console.log("*************************************\n");

//calling method through object
person.displayDetails();

//calling static method through class
employee.displayCompany();