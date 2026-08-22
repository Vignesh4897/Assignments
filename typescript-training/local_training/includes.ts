//includes() checks whether a particular value exists inside an array or string.
/*
1. Syntax
Array
array.includes(value);
String
string.includes(value);
*/
//method 1:
let numbers: number[] = [10, 20, 30, 40, 50];
let result = numbers.includes(30);
console.log("1.",result);
console.log("**********************************\n");

//method 2:
let numbers1: number[] = [10, 20, 30, 40, 50];
let result1 = numbers.includes(100);
console.log("2.",result1);
console.log("**********************************\n");

//method 3:
let numbers2: number[] = [10, 20, 30, 40, 50];
let result2 = numbers.includes(100);
console.log("3.",typeof result2);
console.log("**********************************\n");

//method 4:
let numbers3: number[] = [10, 20, 30, 40, 50];
console.log("4.",numbers3.includes(40));
console.log("**********************************\n");

//method 5:
let numbers4: number[] = [10, 20, 30, 40, 50];
if(numbers.includes(30))
{
  console.log("5.30 is present")
}
console.log("**********************************\n");

//method 6:
let numbers5: number[] = [10, 20, 30, 40, 50];
if(numbers.includes(100))
{
  console.log("6.100 is present");
}
else{
  console.log("6 is not present")
}
console.log("**********************************\n");

//method 7: string
let name :string = "Vignesh";
console.log("7.",name.includes("vign")); //here 'V'is upper case so it is false
console.log("**********************************\n");

//method 8: string
let name1 :string = "Vignesh";
console.log("8.",name1.toLowerCase().includes("vign")); //here 'V'is upper case so it is false
console.log("**********************************\n");

//method 9: includes() with index — second parameter
/*array.includes(value, startIndex);
*/
 let num : number[] = [10, 20, 30, 20, 40];

console.log("9.",num.includes(20, 2)); // find the value 20 after index 2
console.log("**********************************\n");

//method 10: includes() with index — second parameter
/*array.includes(value, startIndex);
*/
 let num1 : number[] = [10, 20, 30, 20, 40];

console.log("10.",num1.includes(20, -2));
console.log("**********************************\n");

//method 11:
let num2 : number[] = [10, 20, 30, 20, 40];
console.log("11.",num2.indexOf(20));
console.log("**********************************\n");

//method 12:
let browsers : string[]= ["Chrome","Firefox","Edge"];
let browser : string = "Chrome";
if(browsers.includes(browser))
{
    console.log("12.Browser is supported");
}
else
{
    console.log("12.Browser is not supported");
}
console.log("**********************************\n");