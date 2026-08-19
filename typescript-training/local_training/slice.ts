//
/*Syntax:
array.slice(start_index, end_index + 1);

slice(start, end)
      ↓      ↓
   include  exclude

start = 1 → included
end   = 4 → excluded
*/

let num : number[] = [10,20,30,40,50,60];
num.slice(2,4);// it prints the original array
console.log(num);
let result = num.slice(2,5);
console.log(result);