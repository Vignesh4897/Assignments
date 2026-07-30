//*******primitive datatypes******

//numbers-->the datatype that can be store with decimal or without decimal
//number should be stored without any quatation

let num1=10;
let num2=10.25;

console.log(num1,"--->",typeof num1);
console.log(num2,"--->",typeof num2);

//the string -->the datatype that can be store string,char and words
//string should be always stored with quotation.{single quotes or double quotes or back tick}

let firstName="sashvik";
let lastName='Vignesh';
let role=`Senior SDET`;

console.log(firstName,"--->",typeof firstName);
console.log(lastName,"--->",typeof lastName);
console.log(role,"--->",typeof role);


let empInfo= "employee firstname,employee lastname,employee role";
let empInfo1= 'employee firstname,employee lastname,employee role';

console.log(empInfo);
console.log(empInfo1);

let empInfo2 = `employee first name is ${firstName}, employee last name is ${lastName}, employee role is ${role}`;
console.log(empInfo2);

//boolean--->the datatype will store the result of a condition in the for of true or false
let result=10>20;
console.log(result,"--->",typeof result);

//undefined--->undefined represent a variable that has been declared but not assigned any value
let empId;
console.log(typeof empId);

//NULL-->NULL represent a variable that has been declared and assignes a NULL value or empty value intentionally
let salary=10000;
salary=null;
console.log(salary);

//Symbol-->Symbol data types represent a unique hidden identifier inside an object
let productInfor = {
    "productName":"Iphone",
    "Model":"17 Pro Max",
    "country of Orgin":"China"
}
console.log(productInfor);

let countryOfOrgin=Symbol();
let productInfo = {
    "productName":"Iphone",
    "Model":"18 Pro Max",
    [countryOfOrgin]:"Chinese"
}
console.log(productInfo);