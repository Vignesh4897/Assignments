/*Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word
*/
let paragraph : string = "Java is a popular programming language. Java is used for web development,mobile applications,and more.";
//paragraph = paragraph.replace(/\./g,". ");
let occurrences : string[] = paragraph.split(" ");
let count:number=0;
let word:string = "Java"
let index :number[]=[];
for(let i=0;i<occurrences.length;i++)
{
   if(occurrences[i]===word)
   {
    count++;
    index.push(i);
   }  
}
console.log(count);
console.log(index);
