//Strings : String is a collection of characters. 
console.log("*****************************Start_of_the_program***************************************");
let firstName: string = "Sashvik";
let lastName: string = 'Vignesh';
let role: string = "'Senior' SDET";console
console.log(firstName);
console.log(lastName);
console.log(role);
let empInfo =`emp first name is ${firstName} , emp last name is ${lastName} and emp Role is ${role}`;
console.log(empInfo)
console.log("************************************************************************************\n");

//1. Storing string inside the variable 
console.log("1. Storing string inside the variable ");
let originalString : string =  "Username = admin | Password = admin1234";
console.log(originalString);
console.log("************************************************************************************\n");

//2. Method to calculate the total number of characters available inside the string.
console.log("2. Method to calculate the total number of characters available inside the string"); 
console.log(`the total number of characters available inside the string are ${originalString.length}`);
console.log("************************************************************************************\n");

//3. Method to get a specific character by using an index 
console.log("3. Method to get a specific character by using an index");
let charAtIndex : string = originalString.charAt(11); //#######charAt is Syntax####
console.log(`the character of an index is: ${charAtIndex}`);
console.log("************************************************************************************\n");

//4.reverse the original string
console.log("4.reverse the original string")
let reverseString : string = "";
for(let i=originalString.length;i>=0;i--)
{
    reverseString += originalString.charAt(i);
}
console.log(`Reverse string is: ${reverseString}`);
console.log("************************************************************************************\n");

//5. Method to eliminate all the spaces from the string 
/*    / /       → find a space          → what to find
       g         → find all occurrences → g- global
      ""        → replace with nothing  → what to replace it with
      
      /       /    g
      ↑       ↑    ↑
     start   end  global
       ↑
    pattern to find
*/
console.log("5. Method to eliminate all the spaces from the string");
console.log(`Original String : '${originalString}'`);
console.log(`String after removing spaces: ${originalString.replace(/ /g,"")}`);
console.log("************************************************************************************\n");

//6. Method to eliminate all the alphabets from the string 
console.log("6. Method to eliminate all the alphabets from the string");
console.log(`Original String : '${originalString}'`);
console.log(`String after removing alpha ${originalString.replace(/[a-zA-z]/g,"")}`);
console.log("************************************************************************************\n");

//7. Method to eliminate all the numbers from the string 
console.log("7. Method to eliminate all the numbers from the string");
console.log(`Original String : '${originalString}'`);
console.log(`After removing from the string ${originalString.replace(/[0-9]/g,"")}`);
console.log("************************************************************************************\n");

//8. Method to eliminate all the special chars from the string 
console.log("8. Method to eliminate all the special chars from the string");
console.log(`Original String : '${originalString}'`);
console.log(`string after removing special character ${originalString.replace(/[^0-9a-zA-Z] /g,"")}`);
console.log("************************************************************************************\n");

//9. Method to convert all the characters of the string into uppercase. 
console.log("9. Method to convert all the characters of the string into uppercase.");
console.log(`Original String : '${originalString}'`);
console.log(`Convert all Characters to UpperCase ${originalString.toUpperCase()}`);
console.log("************************************************************************************\n");

//10. Method to convert all the characters of the string into uppercase. 
console.log("10. Method to convert all the characters of the string into lowercase.");
console.log(`Original String : '${originalString}'`);
console.log(`Convert all Characters to lowerCase ${originalString.toLowerCase()}`);
console.log("************************************************************************************\n");
                        

//11. Method to extract part of the string
console.log("11. Method to extract part of the string");
console.log(`Original String : '${originalString}'`);
console.log(`UserName :${originalString.substring(11,17)}`)
console.log(`Password :${originalString.substring(30)}`)
console.log("************************************************************************************\n");

//12. Method to split the string 
console.log("12. Method to split the string");
let splitString:string[] = originalString.split(" ");
console.log(`Original String : '${originalString}'`);
console.log(`UserName : ${splitString[2]},Password : ${splitString[6]}`)
console.log("************************************************************************************\n");

//13. Method to compare two different string values 
console.log("13. Method to compare two different string values");
//== (Loose Equality) It will compare only the value of the string. 
//=== (Strict Equality) It will compare both value and type of the string. 
let string1: string = "10";
let string2: string | number = 10;
console.log(`Loose Equality (==) : ${string1 == (string2 as any)}`); //here (string [as any]) avoid warning
console.log(`Strict Equality (===) : ${string1 === (string2 as any)}`); //here (string [as any]) avoid warning

//includes() => It will check whether the string contains a special character or not. 
//startsWith() => It will check whether the string starts with a specific substring or not.
//endsWith() => It will check whether the string ends with a specific substring or not.
console.log(`Check Bharath Reddy contains 'Reddy' : ${"Vignesh Sashvik".includes("gnes")}`);
console.log(`Check Bharath Reddy starts with 'Bharath' : ${"Vignesh Sashvik".startsWith("Vignesh")}`);
console.log(`Check Bharath Reddy ends with 'Reddy' : ${"Vignesh Sashvik".endsWith("Sashvik")}`);
console.log("************************************************************************************\n");

//14. Method to convert string to other data types and vice versa. 
console.log("14. Method to convert string to other data types and vice versa.");
let countrycode  : number = 91;
let mobileNumber : number = 9999988888;

let std : string = String(countrycode);
console.log(`Contact Detais is ${std+mobileNumber}`);
console.log("************************************************************************************\n");

let balance :string = "Account Balance : $128050.25";
balance = balance.replace(/[^0-9.]/g,"");
console.log(balance);
let bal:number = parseInt(balance);
console.log(bal);
let bal1:number = parseFloat(balance);
console.log(bal1);
console.log("************************************************************************************\n");
