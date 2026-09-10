
class employee{

    //properties/data
    empName   = "Vignesh";
    empId     = "MS301456T"
    empSalary = 2500000;
    empRole   = "Software Development in test";

    //method
    empAddress(){
        console.log("Employee address location is:Bangalore");
    }
    //When new creates an object from a class, automatically execute that class's constructor.
    //new has special behavior in JavaScript/TypeScript.
    constructor()
    {
        console.log("Constructor is called");
    }
}
let person = new employee() // creating an object to acces the properties/data
person.empAddress();
console.log(person.empName);
console.log(person.empId);
console.log(person.empSalary);
console.log(person.empRole);
console.log("***********************************************\n");

class student{
    studName  : string;
    studRole  : number;
    studAge   : number

    constructor(studentName: string,studentRole : number,studentAge : number)
    {
     this.studName = studentName;
     this.studRole = studentRole;
     this.studAge = studentAge;

    }
}
let childern = new student("Vignesh",254896,29);

console.log(childern.studName);
console.log(childern.studRole);
console.log(childern.studAge);