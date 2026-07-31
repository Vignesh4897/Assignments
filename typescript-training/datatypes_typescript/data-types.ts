// TypeScript : TypeScript is a superset of JavaScript.

// Syntax to store data:
// Declaration Variable : DATATYPE = Data;

// In TypeScript, there are two different categories of data types available.

// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// ********************************************
// *********** Primitive Datatypes ************
// ********************************************

// number => The data type that can store numbers with decimals or without decimals
// Number should be stored without any quotations.

let num1:number = 10;
let num2:number = 10.254;

console.log(typeof num1);
console.log(typeof num2);

//num1="vignesh"; 
//console.log(num1); //it will print output and it will show only warning without datatype

// string => The data type that can store text, characters, and words.
// String should be stored always with quotations.
// (Single quotes or double quotes or backticks)

let firstName:string = "sashvik";
let lastName:string = 'vignesh';
let role:string = "'Senior' SDET";

console.log(typeof firstName,"---->",firstName);
console.log(typeof lastName,"---->",lastName);
console.log(typeof role,"---->",role);

let empInfo = `emp first name is ${firstName}, emp last name is ${lastName} and emp Role is ${role}`;
console.log(empInfo);

// boolean => Boolean data type will store the result of a condition in the form of true or false.

let result: boolean = 10 > 20;
console.log(result);

// undefined => Undefined represents a variable that has been declared but not assigned any value.

let empId: undefined;
console.log(empId);

// null => Null represents a variable that has been declared and assigned a null value intentionally.

let salary: null = null;
console.log(salary);


// Union => Union represents more than one data type within the variable.

let empAddress: string | number | boolean = "Bangalore";
console.log(empAddress);

empAddress =560114;
console.log(empAddress);

empAddress = 10<20;
console.log(empAddress);

// any => Any data type is allowed within the variable.
// (When we are going to use any, type safety will be removed.)

let addressdata: any = "Krishnagiri";
console.log(addressdata);

addressdata = 635304;
console.log(addressdata);

addressdata = 10<20;
console.log(addressdata);

// ********************************************
// ******** Non-Primitive Datatypes ************
// ********************************************

// object => Object data type represents a collection of key-value pairs stored together.
console.log("Non-Primitive Datatypes");
// interface is template in typescript
interface empInfo {
    "empName": string,
    "empId": number,
    "visaStatus": boolean,
    "address": {
        "street": string,
        "city": string,
        "state": string
    }
}

let empData:empInfo = {
    "empName": "Vignesh",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "street": "123 Main St",
        "city": "Dharmapuri",
        "state": "Tamilnadu"
    }
}
console.log(empData);

// Accessing the data from the object
console.log("***Static Data***");
// Method 1 - (Static Data)
console.log(empData.empName);
console.log(empData.address.city);

console.log("***Dynamic Data***");
// Method 2 - (Dynamic Data)
console.log(empData["empName"]);
console.log(empData["address"]["city"]);

// Array => Array is a data type that can store a list of values.

let fruits:string[] = ["Apple", "Banana", "Mango", "Grapes"];
let prices:number[] = [200, 80, 100, 120];
let fruitsAndPrices:(string | number)[] = ["Apple", 200, "Banana", 80, "Mango", 100, "Grapes", 120];

console.log(fruits[0],"-->",prices[0]);
console.log(fruits[1],"-->",prices[1]);
console.log(fruits[2],"-->",prices[2]);

// tuples in TypeScript : Tuple is an ordered array in TypeScript.

// Problem Statement : Store Employee Name, Employee ID, and Visa Status within the array.

// Array-->An array can store multiple values. 
//If you use a union type, the values can be in any order.
let empDetails: (string | number | boolean)[] = [1234, "vignesh", true];
console.log(empDetails);

// Tuple-->A tuple stores values in a fixed order and with fixed data types.
let empInformation: [string, number, number, boolean] = ["vignesh",5604, 1234, true];
console.log(empInformation);

// function => Function is a data type that represents a block of code
// or collection of statements written together to complete a specific task.

function loginIntoApplication(browserName: string, url: string): void {
    console.log(`Launch the ${browserName} Browser`);
    console.log(`Enter the URL: "${url}"`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutFromApplication(): void {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance(): (number | string)[] {
    console.log("Navigate to the account balance page");
    let accountBalance: (number |string)[] = [100000,"vignesh"]; // block scope variable
    return accountBalance; // The value will be assigned to the function name.
}
//need to modify the function again

function fail(): never {
    throw new Error("This function will never return any value");
}

// Set => Set is a data type that represents a collection of unique values of any data type.

let empIds: Set<number> = new Set();

empIds.add(1234);
empIds.add(7237);
empIds.add(1236);
empIds.add(1236);
empIds.add(1237);

console.log(empIds);

// Map => Map is a data type that represents a collection of key-value pairs,
// where key and value can be any data type, but key should be unique.

let empValues: Map<number, string> = new Map();

empValues.set(1234, "Bharath");
empValues.set(1235, "Bharath");
empValues.set(1236, "Sarath");
empValues.set(1236, "ABC");

console.log(empValues);
