/*What is for...of Loop?

A for...of loop is used to iterate over the values of an iterable object such as:

1.Array 
2.String 
3.Set 
4.Map 

Here,
for → Starts the loop.
let fruit → Creates a variable to hold the current value.
of → Means "take values from".
fruits → The collection (array, string, etc.).
{ } → Code that runs for every value.

//Iterate over the values means to access each value in a collection one at a time 
//until all values have been processed.

Syntax:
for (let variable of collection) {
    // Code to execute
}
*/

let fruits : string[] =["Apple","Banana","Orange","Grapes"]; //or let fruits =[];
let list: number = 0;
for(let fruit of fruits)
{
    console.log(`${list+1}.${fruit}`); // or console.log(fruit);
    list++;
}
console.log("**************************\n")
let studentName : string [] = ["Vignesh","Sashvik","Sharanith","Anupriya"];
let roll : number = 0;
for(let student of studentName)
{
 console.log(`${roll+1}.${student}`);//console.log(student);
 roll++;
}
console.log("**************************\n")

let values : number[] = [20,50,30,45,60]; // or let values = [20,50,30,45,60];
let count:number=0;
for(let amount of values)
{
    console.log(`${count+1}.${amount}`); // console.log(amount)
    count++;
}
console.log("**************************\n")

let name = "vignesh";
for(let employee of name)
{
    console.log(employee);
}
console.log("**************************\n")

let sum = [50,85,96,45,63];
let total=0;
for(let value of sum)
{
    total = total+value;
}
console.log(total);
console.log("**************************\n")

let numbers = [18,15,4,17,12,13,27,28];
for(let even of numbers)
{
  if(even % 2 === 0)
  {
    console.log(even);
  }
}
console.log("**************************\n")