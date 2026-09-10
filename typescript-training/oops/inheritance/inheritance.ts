//Step 1 — Parent Class and Child Class
/*
Parent Class:
The parent class is the class that contains (common properties) and (methods) that we want another class to reuse
*/
class employee{

    //properties/data
    empName    :String   ="vignesh";
    empAge     :number   = 29;
    empSalary  :number   =250000;
    empLocation:string   ="Bangalore";

    //methods
    displayParent_Details(){
        console.log(`Employee name is    :${this.empName}`);
        console.log(`Employee age is     :${this.empAge}`);
        console.log(`Employee salary is  :${this.empSalary}`);
        console.log(`Employee location is:${this.empLocation}`);
    }
}
//child class
class child1 extends employee{ //child extends parent (single inheritance)
empLocation:string   ="chennai";
    //methods
    displayChild1_Details(){
        console.log(`Employee name is    :${this.empName}`);
        console.log(`Employee age is     :${this.empAge}`);
        console.log(`Employee salary is  :${this.empSalary}`);
        console.log(`Employee location is:${this.empLocation}`);
    }
}
//child class
class child2 extends employee{  // Child2 also extends same parent (hierarchical inheritance)
empLocation:string   ="Coimbatore";
    //methods
    displayChild2_Details(){
        console.log(`Employee name is    :${this.empName}`);
        console.log(`Employee age is     :${this.empAge}`);
        console.log(`Employee salary is  :${this.empSalary}`);
        console.log(`Employee location is:${this.empLocation}`); 
    }
}

//creating the child object
//let parent = new employee();
let person = new child1();
let person1 = new child2();

//parent.displayParent_Details();
 console.log("*******************************************\n");
person.displayChild1_Details();
 console.log("*******************************************\n");
 person1.displayChild2_Details();
 console.log("*******************************************\n");