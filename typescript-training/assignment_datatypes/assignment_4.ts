//Assignment 4
/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
    1        50000
    2       -2000
    3        3000
    4       -15000
    5       -200
    6       -300
    7        4000
    8       -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

let amount : number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];
for(let i:number=0;i<amount.length;i++)
{
    if(amount[i]>0 )
    {
      console.log(`${[i+1]}.Credit amount ${amount[i]}`);
    }
    else
    {
       console.log(`${[i+1]}.debit  amount ${amount[i]}`); 
    }
}
console.log("\n***Calculate the total amount Credit & debit***");
let totalAmount_Credited : number =0;
let totalAmount_Debited : number =0;
for (let j:number=0;j<amount.length;j++)
{
    if(amount[j]>0)
    {
     totalAmount_Credited += amount[j];
    }
    else
    {
     totalAmount_Debited += amount[j];
    }
}
console.log(`1.Total amount credited in account is ${totalAmount_Credited}`);
console.log(`2.Total amount debited from account is ${totalAmount_Debited}`);

console.log("\n***Calculate the total remaining Amount***");
let totalBanlacemount=0;
for (let p:number=0;p<amount.length;p++)
{
  totalBanlacemount += amount[p];
}
console.log(`The total remaining amount is ${totalBanlacemount}`);

console.log("\n***total number of suspicious transactions***");

let totalSuspicious_count:number=0;
for (let q:number=0;q<amount.length;q++)
{
    if(amount[q]!>10000)
    {
      console.log(`${q+1}.The Suspicious Credit amount is ${amount[q]}`);
      totalSuspicious_count++; 
    }
    if(amount[q]!<-10000)
    {
    console.log(`${q+1}.The Suspicious debit amount is ${amount[q]}`);
     totalSuspicious_count++;  
    }
}
console.log("\n***Calculate the total suspicious count***");
console.log(`Total number of suspicious transactions in credit/debit count is ${totalSuspicious_count}`);