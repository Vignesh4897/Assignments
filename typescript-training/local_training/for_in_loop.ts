/*What is for...in?

A for...in loop is used to iterate over the property names (keys) of an object.
When used with an array, it iterates over the indexes.

Definition:
A for...in loop iterates over the keys of an object or the indexes of an array.

Syntax
for (let variable in object)
{
    // Code to execute
}

Let's understand each part.

for (let key in employee) {
    console.log(key);
}
Part	    Meaning
for	        Starts the loop
let         key	Variable that stores the current key/index
in	        Means "iterate through the keys/indexes of"
employee	The object or array to iterate over
{}	        Code that runs for each key/index

employee

Key        Value
-----------------------
id         101
name       Vignesh
role       SDET
*/
//Example 1: for...in with an Object

let employee = {
    id:4575,
    name:"vignesh",
    role:"SDET"
};
for(let key in employee){
console.log(key);
}
console.log("************************\n");
//ex:2
let student={
    mark:80,
    rank:10,
    name:"vignesh" 
};
for(let person in student)
{
    console.log(person,"=",student[person as keyof typeof student]);
}
console.log("************************\n");
//ex 3: for...in with an Array

let fruits = ["apple","orange","banana","mango"];
for(let index in fruits)
{
    console.log(index,"=",fruits[index]);
}
console.log("************************\n");

//key in concept with diplay values also

let empData ={
    empName : "Vignesh",
    empAge  : 29,
    empRole : "Software Development in Test"
};
for(let empDetails in empData){
console.log(empDetails,"=",empData[empDetails as keyof typeof empData]);
}
