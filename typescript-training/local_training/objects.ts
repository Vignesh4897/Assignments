 //Objects : Object is a non-primitive data type that can help us to store multiple properties in the form of a key-value pair. 
//1. Storing the data inside the object 
/*
1. The main purpose of interface
An interface defines the structure that an object should follow.
Think of it as a blueprint.

INTERFACE
    ↓
Blueprint / Structure / Rules
    ↓
Object must follow those rules
*/
console.log("1.Storing the data inside the object");
interface emplyInfo{
    "empId"       :number,
    "empName"     :string,
    "empSalary"?   :number,
    "visaStatus"  :boolean,
    "address":{
               "street"  :string,
               "city"?   :string,
               "state"   :string,
               "country" :string
    }
}
let empData:emplyInfo = {
    "empId"       :4578951,
    "empName"     :"Vigesh T",
    "empSalary"  :250000,
    "visaStatus"  :true,
    "address":{
               "street"  :"108 Main Street",
               "city"    :"Krishnagiri",
               "state"   :"Tamilnadu",
               "country" :"India"
              }
}
console.log(empData);
console.log("**************************************************************\n");

//2.storing multiple employees data inside the array of objects
console.log("2.storing multiple employees data inside the array of objects");

let empDataArray : emplyInfo [] = [
 {"empId":1010100,"empName":"Sashvik","empSalary":200000,"visaStatus":true,"address":{"street":"100 Main Street","city":"chennai","state":"Tamilnadu", "country" :"India"}},
 {"empId":1010101,"empName":"Sharanith","empSalary":200000,"visaStatus":true,"address":{"street":"101 Main Street","city":"Salem","state":"Tamilnadu", "country" :"India"}},
 {"empId":1010102,"empName":"Anupriya","empSalary":200000,"visaStatus":true,"address":{"street":"102 Main Street","city":"Madurai","state":"Tamilnadu", "country" :"India"}}
] ;
empDataArray[2]!.empSalary=250000;
console.log(empDataArray[2]);
console.log("**************************************************************\n")

//2.Access the data from the object. 
console.log("2.Access the data from the object.");
console.log(empData.empId);
console.log(empData.address.city);
console.log(empData["address"]["street"]);
console.log("**************************************************************\n");

//3.Adding additional properties to the existing object 
console.log("3.Adding additional properties to the existing object")
empData.empSalary = 120000;
empData.address.city = "Bangalore";
console.log(empData);
console.log("**************************************************************\n");

//4.Update the existing property within the existing object. 
console.log("4.Update the existing property within the existing object.");
empData.empName = "Sashvik";
console.log(empData);
console.log("**************************************************************\n");

//5. Deleting the existing property from the existing object.
console.log("5. Deleting the existing property from the existing object.");
delete empData.empSalary;
console.log(empData);
console.log("**************************************************************\n");

//6. Check if a property exists inside the object 
console.log("6. Check if a property exists inside the object");
console.log("visaStatus" in empData);
console.log("empSalary" in empData);
console.log("**************************************************************\n");

//7. Get all the keys from an object. 
console.log("7. Get all the keys from an object.");
console.log(Object.keys(empData));
console.log(Object.keys(empData.address));
               //or 
console.log(Object.keys(empData["address"]));
console.log("**************************************************************\n");

//8. Get all the keys from an object. 
console.log("8. Get all the values from an object.");
console.log(Object.values(empData));
console.log(Object.values(empData.address));
  //or 
console.log(Object.values(empData["address"]));
console.log("**************************************************************\n");

//9. Get all the entries from an object. 
console.log("9. Get all the entries from an object.");
console.log(Object.entries(empData));
console.log(Object.entries(empData.address));
  //or 
console.log(Object.entries(empData["address"]));
console.log("**************************************************************\n");

//10. Iterate through the object using for...in loop.
console.log("10. Iterate through the object using for...in loop.");
for(let key in empData)
{
    let keyvalue = key;
    //console.log(`${JSON.stringify(key)}`);
    console.log(`${key}:${JSON.stringify(empData[key as keyof emplyInfo])}`)
}
console.log("**************************************************************\n");

//11. Verify the data type of the property within the object. 
console.log("11. Verify the data type of the property within the object.");
console.log(typeof empData.empName);
console.log(typeof empData.empId);
console.log(typeof empData.visaStatus);
console.log(typeof empData.empSalary);
console.log(typeof empData.address);
console.log("**************************************************************\n");

//12. Merge two objects
console.log("12. Merge two objects")
interface companyDetails {
    companyName     : string,
    companyId       : (number | string),
    currentstatus   : boolean,
    companyLocation : string
}
let companyData : companyDetails = {
    companyName     : "VikiTech",
    companyId       : "ABC1245CBN",
    currentstatus   : true,
    companyLocation : "Bangalore"
}
let mergeData = {...empData,...companyData}
console.log(mergeData);   
console.log("**************************************************************\n");

let myMap :Map<string,object> = new Map<string,object>();

interface employDetails {
    Salary     : number,
    Experience : number,
    rating     : (string | number)
}
myMap.set("vignesh",{
  empName : "vignesh",
  Salary  : 250000,
  Experience : 4,
  rating     : "4.5/5"
});
//or 
myMap.set("Sashvik",{empName:"Sashvik",Salary:270000,Experience:5,rating:"4.6/5"});
console.log(myMap);
console.log(myMap.get("vignesh"));
//console.log(myMap.get("Sashvik")["Salary"]);
console.log(myMap.get("Sashvik"));