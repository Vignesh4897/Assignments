//push() adds one or more elements to the end of an array.
//pop() removes the last element from an array.

//method 1: numbers
let num :number[] = [10,20,30];
num.push(40,50,60,70,80,90);
num.push(100,110,120);
num.pop();
num.pop();
// without variable declaration it wont the return value and it will ignore to store it.
console.log(num);
console.log("*****************************************\n");

//Method 2: numbers
let num1 :number[] = [10,20,30];
num1.push(40,50,60,70,80,90,100,110,120);
//console.log(num1);
// without variable declaration it wont the return value and it will ignore to store it.
num1.splice(10,2);
console.log(num1);
console.log("*****************************************\n");

//Method 3: Strings
let empData :string[] = ["Apple","Orange","Banana","Mango"];
empData.push("Grapes","pomegranate","Papaya");
empData.push("Carrot","Beetroot","onion","Potato");
// without variable declaration it wont the return value and it will ignore to store it.
console.log(empData);
empData.pop();
empData.pop();
console.log(empData);
console.log("*****************************************\n");

//Method 4: Strings
let empData1 :string[] = ["Apple","Orange","Banana","Mango"];
empData1.push("Grapes","pomegranate","Papaya");
empData1.push("Carrot","Beetroot","onion","Potato");
console.log(empData1);
let result = empData1.splice(5,3,"Dragonfruit","Pineapple");
console.log(result);
console.log("*****************************************\n");

//method 5
let num3 :number[] = [10,20,30];
let result3 = num3.push(40,50,60,70,80,90,100,110,120);
// with variable declaration it will the return value to respected variable location and store the length in it.
console.log(result3);
console.log("*****************************************\n");

//method 6
let empData2 :string[] = ["Apple","Orange","Banana","Mango"];
empData2.push("Grapes","pomegranate","Papaya");
let result2= empData2.push("Carrot","Beetroot","onion","Potato");
console.log(result2);
console.log("*****************************************\n");