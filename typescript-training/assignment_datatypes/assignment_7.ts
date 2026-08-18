/*Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";
*/
let sentence: string ="Java programming is fun and challenging";
let words : string[] = sentence.split(" ");

console.log(`total number of words in the sentence ${words.length}`);

let reverseString : string = "";
for(let i:number=words.length-1;i>=0;i--)
{  
 reverseString = reverseString + (`${words[i]} `);
}
console.log(reverseString);
//console.log(words);
let originalSentence : string = "";
for(let i:number=0;i<words.length;i++)
{
   originalSentence = originalSentence + words[i]!.charAt(0).toUpperCase() + words[i]!.slice(1)+" ";
}
console.log(originalSentence);
