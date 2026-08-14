//Reverse String
let originalString : string = "Vignesh";
let reverseString : string = "";
for(let i : number =originalString.length-1;i>=0;i--)
{
 reverseString  = reverseString + originalString.charAt(i);
} 
console.log(`Reverse string is: ${reverseString}`);