//startsWith() checks whether a string begins with a specific text.
/*
Syntax :
string.startsWith(searchString);
*/

//method 1:
let name : string = "Vignesh";
console.log(name.startsWith("Vig"));
console.log("***********************************\n");

//method 2:
let name1 : string = "Vignesh";
console.log(name1.toLowerCase().startsWith("vig"));
console.log("***********************************\n");

//method 3:
let name2 = "Vignesh";
let search = name2.startsWith("Vign")
console.log(search);
console.log("***********************************\n");

//method 4:
let name3 = "Vignesh";
let search1 = name3.startsWith("esh")
console.log(search1);
console.log("***********************************\n");