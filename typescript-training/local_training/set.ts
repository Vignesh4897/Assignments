// Set => Set is a data type that represents a collection of unique values of any data type.

let empData = new Set<number | string | boolean>();
//                    or 
//let empData : Set<number | string | boolean> = new Set();

empData.add(10);
empData.add(20);
empData.add(10);
empData.add(30);
empData.add("Vignesh");
empData.add("Sashvik");
empData.add("Vignesh");
empData.add("Sharanith");
empData.add(true);

console.log(empData);