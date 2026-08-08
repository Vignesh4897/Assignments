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
/*
Q: Why does for...of return [key, value] for a Map?

Answer:
A Map stores its data as key-value pairs. Each item in the Map is an entry containing both a key and its corresponding value. Therefore, during each iteration, for...of returns one entry in the form [key, value]. We can then destructure that array into separate key and value variables.

What you should remember
Array → Values (10, 20, 30)
String → Characters ('H', 'e', 'l', 'l', 'o')
Set → Unique values (10, 20, 30)
Map → Key-value pairs ([101, "Vignesh"], [102, "Rahul"])
*/