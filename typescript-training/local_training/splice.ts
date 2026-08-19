//splice() is used to add, remove, or replace elements anywhere inside an array.
/*
Basic syntax
array.splice(start, deleteCount, item1, item2, ...);

Think of it as:
splice(WHERE, HOW MANY TO REMOVE, WHAT TO ADD)

For example:
numbers.splice(2, 1, 100);

means:

2   → start at index 2
1   → remove 1 element
100 → add 100
*/
//method 1:
let numbers :number[]= [10, 20, 30, 40, 50];
// without variable declaration it wont the return value and it will ignore to store it.
numbers.splice(2, 1, 5,6);
console.log(numbers);
console.log("*****************************************\n");

//method 2:
let numbers1 : number[] = [10, 20, 30, 40, 50];
// with variable declaration it return the particular index value to the respected variable location and store the length in it.
let result = numbers.splice(2, 2, 5,6);
console.log(result);
console.log("*****************************************\n");

//method 3:
let fruits :string []= ["Apple", "Banana", "Mango", "Grapes", "Orange"];
// without variable declaration it wont the return value and it will ignore to store it.
fruits.splice(2, 1, "Pomegranate");
console.log(fruits);
console.log("*****************************************\n");

//method 4:
let fruits1 :string []= ["Apple", "Banana", "Mango", "Grapes", "Orange"];
// with variable declaration it return the particular index value to the respected variable location and store the length in it.
let fruitsresult = fruits.splice(2, 2, "Pomegranate","Pineapple");
console.log(fruitsresult);
console.log("*****************************************\n");

