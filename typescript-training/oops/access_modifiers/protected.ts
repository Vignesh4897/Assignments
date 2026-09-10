//2. protected

// Protected data can be accessed within the class. 
// Protected data can be accessed within the child class. 
// Protected data cannot be accessed outside of the class.

class student{
    //PROPERTIES / DATA

    protected studentName  : string = "Vignesh";
    protected studentAge   : number = 29;
    protected studentMarks : number = 90;
    protected studentClass : string = "12th";
    protected studentSchool: string = "AMHSC";

    // //METHODS
    diplayStudentDetails()
    {
     console.log(`Student name is   :${this.studentName}`);
     console.log(`Student Age is    :${this.studentAge}`);
     console.log(`Student Marks is  :${this.studentMarks}`);
     console.log(`Student Class is  :${this.studentClass}`);
     console.log(`Student School is :${this.studentSchool}`);
    }
  
}
 
class child extends student{
    //PROPERTIES / DATA

    protected studentName  : string = "Sashvik";
    protected studentAge   : number = 25;
    protected studentMarks : number = 95;

    //METHODS
    displayChildClass()
    {
     console.log(`Student name is   :${this.studentName}`);
     console.log(`Student Age is    :${this.studentAge}`);
     console.log(`Student Marks is  :${this.studentMarks}`);
     console.log(`Student Class is  :${this.studentClass}`);
     console.log(`Student School is :${this.studentSchool}`);
    }

      //CONSTRUCTOR 
    constructor (){
     super(); //
     console.log("lets display the Student details");
    }
}
let person = new student();
let children = new child();
person.diplayStudentDetails();
console.log("*****************************************\n");
children.displayChildClass();
console.log("*****************************************\n");

//Outside object we cannot access the parent class or child class
// console.log(`Student name is   :${person.studentName}`);
// console.log(`Student Age is    :${person.studentAge}`);
// console.log(`Student Marks is  :${person.studentMarks}`);
// console.log(`Student Class is  :${person.studentClass}`);
// console.log(`Student School is :${person.studentSchool}`);