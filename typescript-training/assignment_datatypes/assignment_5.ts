/*
Assignment (Conditional Statements & Loops)
Employee Table
S.No  Name            Base Salary   Experience (Years)   Year-End Rating (Out of 5)     
   1   Alice Johnson     75000.0          5.1                        4.2
   2.  Bob Smith         68000.0          3.2                        3.8
   3.  Carol Davis       82000.0          7.1                        4.5
   4.  David Brown       90000.0          10.2                       2.5
   5.  Eva Green         60000.0          2.4                        3.5

   Hike
       Rating        % of base Salary as variable pay               Bonus
       > =4.0               15.0                                    1500
       >=3 && < 4           10.0                                    1200
       < 3.0                3.0                                     300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary . */  

let employeeName : string []=["Alice Johnson","Bob Smith","Carol Davis","David Brown","Eva Green"];
let employeeSalary : number []=[75000.0,68000.0,82000.0,90000.0,60000.0];
let employeeExperience : number []=[5.1,3.2,7.1,10.2,2.4];
let employeeRating : number []=[4.2,3.8,4.5,2.5,3.5];

let variablePay : number;
let bonus : number;
let reward : number;
let hike : number;
let hike_Percentage : number;

console.log("**********************************************");
for(let i:number=0;i<employeeName.length;i++)
{
    if(employeeRating[i]! >= 4.0)
    {
     variablePay = 15.0;
     bonus = 1500;
    }
    else if(employeeRating[i]! >=3 && employeeRating[i]! < 4)
    {
     variablePay = 10.0;
     bonus = 1200;
    }
    else
    {
      variablePay = 3.0;
      bonus = 300;  
    }
    if(employeeExperience[i]!>=5)
    {
        reward = 5000;
    }
    else
    {
        reward=0;
    }
hike = (employeeSalary[i]! * variablePay) + bonus + reward ;
hike_Percentage =(hike/employeeSalary[i]!);
console.log(`Employee Name             : ${employeeName[i]}`);
console.log(`Employee Salary           : ${employeeSalary[i]}`);
console.log(`Employee Experience       : ${employeeExperience[i]} Years`);
console.log(`Employee Rating           : ${employeeRating[i]}/5`);
console.log(`Employee Variable         : ${variablePay} %`);
console.log(`Employee Bonus            : ${bonus}`);
console.log(`Employee Hike             : ${hike}`);
console.log(`Employee Hike_Percentage  : ${hike_Percentage.toFixed(2)}%`);
console.log("**********************************************");
}
