//endsWith() checks whether a string ends with a particular text.
/*
syntax :string.endsWith(searchString);
*/
//method 1:
let name : string = "Vignesh";
console.log(name.endsWith("nesh"));
console.log("***********************************\n");

//method 2:
let name1 : string = "Vignesh";
console.log(name1.toLowerCase().endsWith("Nesh"));
console.log("***********************************\n");

//method 3:
let name2 = "Vignesh";
let search = name2.endsWith("esh");
console.log(search);
console.log("***********************************\n");

//method 4:
let name3 = "Vignesh";
let search1 = name3.endsWith("vign");
console.log(search1);
console.log("***********************************\n");