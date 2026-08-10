/*1. for...of with Set
What is a Set?

A Set is a built-in JavaScript object that stores unique values.

✅ Duplicate values are not allowed
✅ Values are stored only once
✅ Order is maintained (in insertion order)

Syntax to Create a Set:
let setName = new Set(); //Syntax

Example
let numbers = new Set();

Here,

let → Declares a variable.
numbers → Variable name.
new → Creates a new object.
Set() → Creates an empty Set.

Initially, the Set is empty.
numbers = { }
*/
//ex:1
let numbers = new Set([10,25,14,10,45,23,14]);
console.log(numbers);
console.log("******************************\n");

//ex:2
let letters = new Set(['a','b','d','a','e','d','g','h','e']);
console.log(letters);
console.log("****************************************\n");

//ex:3
let nameList = new Set(["Vignesh","Sashvik","Sharanith","Anupriya","Vignesh"]);
console.log(nameList);
console.log("********************************************************\n");

//ex:4
let numValue = new Set([26,52,78,45,12,16,26,45,15,12]);
for(let numbers of numValue)
{
    console.log(numbers);
}
console.log("****************************************\n");

//ex:4
let fruits = new Set(["Apple","Orange","Grapes","Banana","Apple","Mango"]);
for (let fruit of fruits)
{
    console.log(fruit);
}
console.log("****************************************\n");

/*
Collection	for...in	     for...of
Array	    ✅ Indexes	    ✅ Values
Object	    ✅ Keys	        ❌ Not directly iterable
Set	        ❌ Not supported	✅ Values
Map	        ❌ Not supported	✅ Key-value pairs
*/