// Prime Number or Not
/*Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.

Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime.*/
//method 1
let n1 :number = 7;
let isprime :boolean=true;
for(let i:number=2;i<n1;i++)
{
  if((n1%i)==0)
   {
    isprime=false;
    break;
   }
}
 if(isprime==true && n1>1)
  {
  console.log(`${n1} is a prime number and it is true`);
  }
  else
  {
  console.log(`${n1} is a not prime number and it is False`);
  }
console.log("***************************************\n");

let n2 :number = 25;
let isprime1 :boolean=true;
for(let i:number=2;i<n2;i++)
{
  if((n2%i)==0)
   {
    isprime1=false;
    break;
   }
}
 if(isprime1==true && n2>1)
  {
  console.log(`${n2} is a prime number and it is true`);
  }
  else
  {
  console.log(`${n2} is a not prime number and it is False`);
  }
console.log("***************************************\n");

let n3 :number = 1;
let isprime2 :boolean=true;
for(let i:number=2;i<n3;i++)
{
  if((n3%i)==0)
   {
    isprime2=false;
    break;
   }
}
 if(isprime1==true && n3>1)
  {
  console.log(`${n3} is a prime number and it is true`);
  }
  else
  {
  console.log(`${n3} is a not prime number and it is False`);
  }
console.log("***************************************\n");