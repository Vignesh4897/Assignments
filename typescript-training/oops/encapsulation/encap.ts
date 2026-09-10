//Encapsulation is an OOP concept of hiding information and bundling (binding) data/properties and
// the methods that operate on that data together inside a single class.

class employee{
    private empName  : string = "Vignesh";
    private empAge   : number = 29;
    private empLevel : string = "Level 12";

    public displayEmpDetails() // here public is optional in methods
    {
      console.log(`Employee name is : ${this.empName}`);
      console.log(`Employee name is : ${this.empAge}`);
    }
    
    public getdetails() // here public is optional in methods
    {
      return this.empLevel;
    }
}
let person = new employee();
person.displayEmpDetails();

console.log(`Employee Level is: ${person.getdetails()}`);

