/*Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0;
*/

let customerName : string = "Mr Vignesh";
let creditScore : number = 660;
let income : number = 55000.0;
//let isEmployed : boolean = true;
let unEmployed : boolean = false;
let debtToIncomeRatio : number = 39.0;

if(creditScore >= 750)
{
    console.log(`Congrats ${customerName} your loan is approved and your cibil score ${creditScore}/900`);
}
else if(creditScore >= 650 && creditScore <=750)
{
    if(income >= 50000 && unEmployed)
    {
     if (debtToIncomeRatio < 40)
     {
       console.log(`Good ${customerName} your loan is approved`); 
     }
     else 
     {
      console.log(`Sorry ${customerName} your final verification loan is rejected due to high DTI Ratio`);  
     }
    }
    else 
    {
    console.log(`Sorry ${customerName} your loan is denied due to your low income/unemployed,so that you are not eligible for loan`);
    }
}
else 
{
 console.log(`Sorry ${customerName} your cibil score is less than 650 so you are not not eligible for loan`);
}
