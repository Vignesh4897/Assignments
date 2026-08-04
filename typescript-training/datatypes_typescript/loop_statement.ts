//loop
//loop statemets are nothing but a set of conditions 
// that we are going to add along with the statement to execute the same code multiple times
// loop statements are divided into two different parts

//for loop----->when we know the total number of iteration to be executed before itself
//while loop---->when we don't know the total number of iteration to be executed before

/*syntax: for(condition-to-start; condition-to-end; interval)
{
    //statement to execute
}*/
let name : string = " vignesh";

for(let i:number=1;i<=5;i++)
{
    console.log(name);
}
let start:number=1;
let end:number=5;
let childName:string="Sashvik";

for(start;start<=end;start++)
{
    console.log(childName);
}

/*while loop
  syntax : while(condition-to-start)
{
  statement
}*/
let j:number=1;
let pageLoaded:boolean = false;
while(j>0)
{
    if(j>5 || pageLoaded)
    {
        break;
    }
    console.log("Refresh the page");
    j++;
}

// Special cases in the loop statements

//1. for...of loop => Use to iterate over the values of an array or existing list.
//2. for...in loop
//3. do...while loop

// Array
let fruits: string[] = ["Apple", "Banana", "Mango", "Grapes"];

// Print each fruit name from the array by using a normal for loop.
for (let i:number = 0; i <fruits.length; i++) {
    console.log(fruits[i]);
}
/*
for (let i:number = 0; i <= 3; i++) {
    console.log(fruits[i]);
}*/
// 1. for...of loop => Iterate over each and every value of the given list.

// Syntax
// for(let value of array){
//     console.log(value)
// }
//let fruits: string[] = ["Apple", "Banana", "Mango", "Grapes"];
for (let abc of fruits) {
    console.log(abc);
}

/*
Simple Rule to Remember
Loop	    Used For	    Returns
for...of	Arrays,Strings	Values
for...in	Objects	        Property names (keys)

Interview Shortcut

Remember this sentence:

for...of → "of Values" ✅
for...in → "in Keys" ✅
*/

// 2. for...in loop => Iterate over each and every property of the object.
// Syntax:
// for (let key in object) {
//     // code to execute
// }
//This defines the structure of an employee object.

interface empInfo {
    empName: string,
    empId: number,
    visaStatus: boolean,
    address: {
        street: string,
        city: string,
        state: string
    }
}
let empData: empInfo = {
    empName: "Bharath",
    empId: 1234,
    visaStatus: true,
    address: {
        street: "123 Main St",
        city: "Hyderabad",
        state: "Telangana"
    }
}

for(let key in empData)
{
    console.log(key); 

    if(key === "address")
    {
        for(let addresskey in empData.address)
        {
          console.log(addresskey);   
        }
    }
}