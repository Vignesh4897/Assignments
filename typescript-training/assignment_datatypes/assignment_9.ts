/*Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
        *
       **
      ***
     ****
    *****
 */
let rows : number = 5;
for(let i:number=1;i<=rows;i++)
{
let pattern: string = "";
 for(let j:number=1;j<=rows;j++)
 {
    if((i+j)<=rows)
        pattern = pattern + " ";
    else
       pattern = pattern + "*";
 }
 console.log(pattern);
}