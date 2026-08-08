/* . What is a Map?

A Map stores data as key-value pairs.

Think of it like a dictionary.

Key        Value
-----------------------
101        Vignesh
102        Rahul
103        Karthik

Map

101  →  Vignesh
102  →  Rahul
103  →  Karthik

Why?
Because each value in a Map is a pair.
Each iteration returns:

[key, value]

*/
//ex:1
let employees = new Map();

employees.set(101,"vignesh");
employees.set(102,"Sashvik");
employees.set(103,"Sharanith");

for(let employee of employees)
{
 console.log(employee);
}
console.log("*********************");

//ex:2
let students = new Map();

students.set(120,"Vignesh");
students.set(121,"Sashvik");
students.set(122,"Sharanith");
students.set(123,"vignesh");
students.set(124,"Anupriya");

for(let [rollNum,nameList] of students)
{
    console.log("RollNo  :",rollNum);
    console.log("NameList:",nameList);
    console.log("********************");
    // or console.log("RollNo  :",rollNum,"NameList:",nameList);
}
//console.log("*********************");clear
