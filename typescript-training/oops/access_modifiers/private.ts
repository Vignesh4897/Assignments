
class student{
    //PROPERTIES / DATA

    private studentName  : string = "Vignesh";
    private studentAge   : number = 29;
    private studentMarks : number = 90;
    private studentClass : string = "12th";
    private studentSchool: string = "AMHSC";

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
 
class child {
    //PROPERTIES / DATA

    protected studentName  : string = "Sashvik";
    protected studentAge   : number = 25;
    protected studentMarks : number = 95;
    public studentClass    : string = "12th";
    public studentSchool   : string = "AMHSC";

    //METHODS
    displayChildClass()
    {
     console.log(`Student name is   :${this.studentName}`);
     console.log(`Student Age is    :${this.studentAge}`);
     console.log(`Student Marks is  :${this.studentMarks}`);
     //console.log(`Student Class is  :${this.studentClass}`);
     //console.log(`Student School is :${this.studentSchool}`);
    }

      //CONSTRUCTOR 
    constructor (){
     console.log("lets display the Student details");
    }
}
let person = new student();
let children = new child();
person.diplayStudentDetails();
console.log("*****************************************\n");
children.displayChildClass();


//Outside object we cannot access the parent class or child class
// console.log(`Student name is   :${person.studentName}`);
// console.log(`Student Age is    :${person.studentAge}`);
// console.log(`Student Marks is  :${person.studentMarks}`);
console.log(`Student Class is  :${children.studentClass}`);
console.log(`Student School is :${children.studentSchool}`);
console.log("*****************************************\n");