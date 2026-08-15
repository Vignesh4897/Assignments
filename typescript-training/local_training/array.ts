//Array : Array is a data type that can store a list of values. 

import type { CloseEvent } from "undici-types";

//1.string the values within array
console.log("1.string the values within array");
const fruits:string []=["Orange","Apple","Mango","Grapes","Banana"];
const price :number []=[100,200,150,80,50];
const fruitsAndPrices :(string | number)[] = ["Orange",100,"Apple",200,"Mango",150,"Grapes",80,"Banana",50];
console.log(`Fruits list          : ${fruits}`);
console.log(`Price list           : ${price}`);
console.log(`FruitsandPrices list : ${fruitsAndPrices[0]}=${fruitsAndPrices[1]}`);
console.log("***********************************************************************\n");

//2. Accessing the values from the array 
console.log("2. Accessing the values from the array ")
console.log(`Fruits list          : ${fruits[0]}`);
console.log(`Price List           : ${price[0]}`);
console.log(`Fruits list          : ${fruits[1]}`);
console.log(`Price List           : ${price[1]}`);
console.log(`FruitandPrices list  : ${fruitsAndPrices[4]}=${fruitsAndPrices[5]}`);
console.log("***********************************************************************\n");

//3.Adding additional value to the existing array at the end 
console.log("3.Adding additional value to the existing array at the end ");
fruits.push("pomegranate");
price.push(180);
fruitsAndPrices.push("pomegranate",180);
console.log(fruits);
console.log(price);
console.log(fruitsAndPrices);
console.log("***********************************************************************\n");

//4. Delete the last value from an existing array
console.log("4. Delete the last value from an existing array");
fruits.pop();
price.pop();
fruitsAndPrices.pop();
fruitsAndPrices.pop();
console.log(fruits);
console.log(price);
console.log(fruitsAndPrices);
console.log("***********************************************************************\n");

//5.Adding additional value to the existing array at the begining 
console.log("5.Adding additional value to the existing array at the begining");
fruits.unshift("Pomegranate");
price.unshift(180);
fruitsAndPrices.unshift("Pomegranate",180);
console.log(fruits);
console.log(price);
console.log(fruitsAndPrices);
console.log("***********************************************************************\n");

//6. Delete the first value from an existing array
console.log("6. Delete the first value from an existing array");
fruits.shift();
price.shift();
fruitsAndPrices.shift();
fruitsAndPrices.shift();
console.log(fruits);
console.log(price);
console.log(fruitsAndPrices);
console.log("***********************************************************************\n");

//7. Add and delete  values inside the array at specific index
//Syntax : array.splice(index , num-of-elements-to-be-deleted , values-to-be-added);
console.log("7. Add and delete  values inside the array at specific index");
fruits.splice(1,0,"Papaya","pomegranate");
fruitsAndPrices.splice(2,2,"Papaya",125);
console.log(fruits);
console.log(fruitsAndPrices);
console.log("***********************************************************************\n");

//8. Create a new array by extracting part of the values from the existing array. 
/* Syntax: array.slice(start-index, end-index+1);
fruits     → original array
newFruits  → extracted array==> if we ( use const) let newfruits = fruits.slice or only if we (let) fruits = fruits.slice(1,4)
*/
console.log("8. Create a new array by extracting part of the values from the existing array. ");
let newfruits=fruits.slice(1,4);
console.log(newfruits);
console.log("***********************************************************************\n");

//9. Create a new array by merging multiple existing arrays. 
console.log("9. Create a new array by merging multiple existing arrays.")
let vegetables:string[]=["1.carrot","2.beetroot","3.onion"];
let fruitsAndVegetables : string [] = fruits.concat(vegetables);
console.log(fruits);
console.log(fruitsAndVegetables);
console.log("***********************************************************************\n");

//10. Find the index of a specific value within the array. 
console.log("10. Find the index of a specific value within the array");
console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("dragonfruit")); // -1 (not found)
console.log("***********************************************************************\n");

//11.Iterate all the values from the array.
console.log("11.Iterate all the values from the array.");
for(let fruit of fruits)
{
    console.log(fruit);
}
console.log("***********************************************************************\n");

//12. Reverse the values within the array. 
console.log("12. Reverse the values within the array.");
console.log(fruits);
fruits.reverse();
console.log(fruits);
console.log("***********************************************************************\n");

//13. Sort the values within the array. 
console.log("13. Sort the values within the array.");
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

price.sort((a,b)=>b-a); //this will work only for number not for string
console.log(price);
console.log("***********************************************************************\n");