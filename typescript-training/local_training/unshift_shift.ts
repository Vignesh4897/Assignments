//unshift() adds one or more elements to the beginning of an array.

//Method 1:
let num :number[] = [50,60,70,80];
// without variable declaration it wont the return value and it will ignore to store it.
num.unshift(10,20,30,40); 
console.log(num);
console.log("*****************************************\n");

//Method 2:
let num1 :number[] = [50,60,70,80];
// with variable declaration it will the return value to respected variable location and store the lenth in it.
let result = num1.unshift(10,20,30,40); 
console.log(`the total length of the number is ${result}`);
console.log("*****************************************\n");

//method 3
let num2 :number[] = [50,60,70,80];
// without variable declaration it wont the return value and it will ignore to store it.
num2.unshift(10,20,30,40); // it adds the starting point of number/ string
num2.shift();//it removes the starting point of number/ string
console.log(num2);
console.log("*****************************************\n");

//method 4
let num3 :(number | string )[] = [50,60,70,80];
// without variable declaration it wont the return value and it will ignore to store it.
num3.unshift(10,20,30,40); // it adds the starting point of number/ string
num3.splice(3,2,"Vignesh","Sashvik") //it (start index , remove the 2 index values form 3 index position, add what you want in between)
console.log(num3);
console.log("*****************************************\n");
