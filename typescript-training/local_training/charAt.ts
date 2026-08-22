//charAt() returns the character at a specific index of a string.
/*
Syntax:string.charAt(index);
*/
//Method :1
let name : string = "Vignesh";
let indexValue = name.charAt(0);
console.log(indexValue);
console.log("**************************\n");

//Method :2
let name1 : string = "Vignesh";
//let indexValue = name.charAt(1);
console.log(name1.charAt(1));
console.log("**************************\n");

//Method :3
let name2 : string = "Vignesh";

console.log(name2.charAt(2));
console.log(name2.charAt(3));
console.log(name2.charAt(4));
console.log(name2.charAt(5));
console.log(name2.charAt(6));
console.log("**************************\n");

//method :4
let stuName: string = "Vignesh";
let result = name.charAt(0);
console.log(typeof result.charAt(1));
console.log("**************************\n");

//method :5
let stuName1: string = "Vignesh";
//let result1 = name.charAt(0);
console.log(stuName.charAt(10));
console.log("**************************\n");

//method :6
let word : string = "Vignesh";
let word1 :string = "";
for(let i=0;i<word.length;i++)
{
    word1 = word1 + word.charAt(i);
}
console.log(word1);