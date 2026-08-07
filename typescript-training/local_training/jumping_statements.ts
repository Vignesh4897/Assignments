// Jumping Statements

// Jumping statements are all about a set of keywords we are going to use to terminate the execution.

// The main jumping statements in TypeScript are:
// 1. break => Terminates the current loop or switch statement.
// 2. continue => Skips the current iteration of the loop and moves to the next iteration.
// 3. return => Exits from the current function and optionally returns a value.
console.log("***Break Statement***");
for(let i:number = 1;i<=10;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(i);
}
console.log("***Continue Statement***");
for(let j:number = 1;j<=10;j++)
{
  if(j==4 || j==7 || j==8)
    {
     continue;
    }
    console.log(j);
}