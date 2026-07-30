//******************************
//****Non-primitive_datatypes***
//******************************

//object -->the datatype represents a collection of key value pairs stored together
//let empName="vignesh";
//let empId="1235";
//let empVisaStatus=true;

let empData={"empName":"vignesh",
             "empId":"1235",
             "empVisaStatus":"true",
             "address":{
                        "street":"123,mainroad",
                         "city":"Krishnagiri",
                         "state":"Tamilnadu"
    }
}
//Accessing the data form the Object
//method 1: Static Method
console.log(empData.empName);
console.log(empData.address.city);

//method 2:Dynmic Method
console.log(empData["empName"]);
console.log(empData["address"]["city"]);

//Array--->array is a datatype that can store a list of values

let fruits=["Apple","Banana","Orange","Grapes"];
let price=[150,50,100,120];
let fruitsAndPrice=["Apple",150,"Banana",50,"Orange",100,"Grapes",120];

console.log(fruits[0],"-->",price[0]);
console.log(fruits[1],"-->",price[1]);
console.log(fruits[2],"-->",price[2]);

console.log(fruitsAndPrice[2],"--->",fruitsAndPrice[3]);