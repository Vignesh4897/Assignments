//1. public / no access modifier

// The public access modifier is the default access modifier in TypeScript. 
// Public data can be accessed within the class. 
// Public data can be accessed within the child class. 
// Public data can be accessed outside of the class as well.

class student{
    //PROPERTIES / DATA

    public studentName  : string = "Vignesh";
    public studentAge   : number = 29;
    public studentMarks : number = 90;
    public studentClass : string = "12th";
    public studentSchool: string = "AMHSC";

    //METHODS
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

    public studentName  : string = "Sashvik";
    public studentAge   : number = 25;
    public studentMarks : number = 95;

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

//outside object also we can access the parent class
console.log(`Student name is   :${person.studentName}`);
console.log(`Student Age is    :${person.studentAge}`);
console.log(`Student Marks is  :${person.studentMarks}`);
console.log(`Student Class is  :${person.studentClass}`);
console.log(`Student School is :${person.studentSchool}`);