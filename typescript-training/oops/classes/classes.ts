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
}
let person = new employee() // creating an object to acces the properties/data
person.empAddress();
console.log(person.empName);
console.log(person.empId);
console.log(person.empSalary);
console.log(person.empRole);
console.log("***********************************************\n");

class student{
    //properties
    studname:string="";
    studroll:number=0;
}
let stud =new student();
stud.studname = "Sashvik";
stud.studroll = 40411235;



