//split() converts a string into an array by dividing the string wherever you specify.
/*
Syntax : string.split(separator);
*/
//Method 1:
let name = "Vignesh";
let result = name.split(" ");
console.log(result);
console.log("****************************\n")

//Method 2:
let name1 = "Vignesh";
let result1 = name.split("");
console.log(result1);
console.log("****************************\n")

//Method 3:
let sentence : string = "I am a senior Development in Test Engineer";
let splitSentence = sentence.split(" ");
console.log(splitSentence);
console.log("****************************\n")

//Method 4:
let numbers : string = "10,20,30,40,50,";
let splitnumbers = numbers.split(" ");
console.log(splitnumbers);
console.log("****************************\n")