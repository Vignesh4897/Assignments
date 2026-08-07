//for loop
/*Lesson 1: for Loop 
What is a for loop?
A for loop is used when you know how many times you want to repeat a task.

Real-life example
Imagine your teacher says:
Write "I will complete my homework" 5 times.

Syntax:
for (initialization; condition; increment/decrement)
{
    // Code
}
*/
console.log("***1.program_For_Loop***");
for(let i:number=1;i<=5;i++)
{
    console.log(`${i}.Hello Vignesh`);
}
console.log("**********************");

console.log("\n***2.program_For_Loop***");
for(let j:number=2;j<=10;j=j+2)
{
   console.log(`${j}.Hello Sashvik`); 
}
console.log("**********************");

console.log("\n***3.program_For_Loop_print even number***");
for(let a:number=2;a<=10;a=a+2)
{
    console.log(`${a}`);
}
console.log("**********************");

console.log("\n***4.program_For_Loop_print odd number***");
for(let b:number=1;b<=10;b=b+2)
{
    console.log(`${b}`);
}
console.log("**********************");

console.log("\n***5.program_For_Loop_print Reverse order***");
for(let c:number=10;c>=1;c--)
{
 console.log(`${c}`);
}
console.log("**********************");

console.log("\n***6.program_For_Loop_print Reverse order in even number***");
for(let d:number=10;d>=1;d=d-2)
{
  console.log(`${d}`);  
}
console.log("**********************");

console.log("\n***7.program_For_Loop_print Reverse order in odd number***");
for(let e:number=9;e>=1;e=e-2)
{
    console.log(`${e}`);
}
console.log("**********************");