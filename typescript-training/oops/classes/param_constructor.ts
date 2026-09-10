class student{
    studName  : string;
    studRole  : number;
    studAge   : number

    constructor(studentName:string="Vignesh",studentRole:number=4478954,studentAge:number=29)
    {
     this.studName = studentName;
     this.studRole = studentRole;
     this.studAge  = studentAge;

    }
}
let childern = new student();

console.log(childern.studName);
console.log(childern.studRole);
console.log(childern.studAge);
console.log("*******************************************************\n");

class employee{
  empName:string;
  empAge:number;

  constructor()
  {
    this.empName = "vignesh";
    this.empAge  = 29;
  }
}
let person =new employee()

console.log(person.empName);
console.log(person.empAge)

