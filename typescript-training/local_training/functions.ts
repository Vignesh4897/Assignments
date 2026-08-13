//Function : Block of code or collection of statements written together to complete a specific task 
//There are multiple ways we can implement the functions in TypeScript. 

//1. Function without parameters and without return type 
//The function is created without any parameters, and also it is not going to give us any output value. 
function login(): void {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log("Enter username as Bharath and password as Bharath123. ");
    console.log("Click on the Login button. ");
}
login();//calling function
console.log("*****************************************************\n");

//2. Function with parameters and without return type 
//The function is created with some input parameters as there is a change in the data, but it is not going to return any value.
function getparameters(username:string,password:string):void{
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log(`Enter username as ${username} and password as ${password}.`);
    console.log("Click on the Login button. ");
}
getparameters("vignesh","vignesh1234");
console.log("******************************************************\n");

//3. Function with parameters and with return type 
//The function is created with input parameters, and also it is going to return some output value at the end of the execution.
function getaccountdetails(username:string,password:string):number{
console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log(`Enter username as ${username} and password as ${password}.`);
    console.log("Click on the Login button. ");
    console.log("click the account section");
    const balance:number=100000;
    return balance;
}
console.log("Total Balance=",getaccountdetails("vignesh","vignesh1234"));
console.log("******************************************************\n");

//4. Function without parameters and with return type 
//The function is created without any input parameters, but it is going to return some output value.
function getCurrentYear():number{
 let date = new Date();
 return date.getFullYear();
}

console.log(getCurrentYear());
console.log("**********************************************\n");

//5. Function with optional parameters. 
//Function is created with a couple of parameters, but it is not mandatory to enter all the parameters while calling the function.
function getEmployeeDetails(empId:number,empName:string,empSalary?:number):void{
console.log("Employee_ID is:"+empId);
console.log("Employee_Name is:"+empName);
if(empSalary)
    {
     console.log("Employee_Salary is:"+empSalary);
    }
}
getEmployeeDetails(451263,"Vignesh",250000); //calling function
console.log("**********************************************\n");

//6. Function with default parameters 
// Function is created with a couple of parameters, and by default we are also going to provide the value if the user is not going to enter anything.
function empInfo(empId:number,empName:string="vignesh",empSalary:number,visaStatus:boolean=false):void
{
console.log("Employee_ID is:"+empId);
console.log("Employee_Name is:"+empName);
console.log("Employee_Salary is:"+empSalary);
console.log("VisaStatus is:"+visaStatus);
}
empInfo(4515683,"SashvikVignesh",270000,true)
console.log("**********************************************\n");

//7. Function with Rest Parameters 
//Function with multiple parameters like an array 
console.log("################Important#####################")
//method 1
function sumOfNumbers(...values : number[])
{
  let sum : number = 0;
  for(let number of values)
  {
    sum = sum+number;
  }
  return sum;
}
console.log("Toatal count",sumOfNumbers(10,20,25,62));
console.log("**********************************************\n");
//method 2
function studentInfo(...list :(string | number)[])
{
 let values:string="";
 for(let i:number=0;i<list.length;i++)
 {
   values = values +`Student Name:${list[i]}, Marks:${list[i+1]}\n`;
   i++;
 }
 return values;
}
console.log("Student details\n"+
studentInfo("Vignesh",50,"Sashvik",70,"Anupriya",80));
console.log("**********************************************\n");