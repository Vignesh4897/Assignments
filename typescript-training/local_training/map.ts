// Map => Map is a data type that represents a collection of key-value pairs,
// where key and value can be any data type, but key should be unique.

//let empData = new Map<number | string, string>();
let empData: Map<number | string, string> = new Map();

empData.set(101, "Vignesh");
empData.set(102, "Arun");
empData.set("EMP103", "Kumar");
empData.set("EMP104", "Ravi");

console.log(empData);