/*Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";
*/
let sentence : string = "Java programming is fun and challenging";

let words:string[] = sentence.split(" ");
console.log(`the total number of words in the sentence is ${words.length}`);
words.reverse();
console.log(words.join(" "));
words.reverse();
console.log(words.join(" "));

for (let i = 0; i < words.length; i++) {
    words[i] = words[i]![0]!.toUpperCase() + words[i]!.slice(1);
}

console.log(`Upper Case string is '${words.join(" ")}'`);