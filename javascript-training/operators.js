let a=10;
let b=20;
console.log("post increment");
console.log(a++);//post increment
console.log(b++);//post increment
console.log(a);
console.log(b);

console.log("pre increment");
console.log(++a);
console.log(++b);

console.log("post decrement");
console.log(a--);
console.log(b--);
console.log(a);
console.log(b);

console.log("pre decrement");
console.log(--a);
console.log(--b);

console.log("assignment operator");
let i=40;
console.log(i);
i+=40;
console.log(i);
i-=40;
console.log(i);
i*=40;
console.log(i);
i/=40;
console.log(i);
i%=40;
console.log(i);

//comparasion operator 
//== loose equality ...means only compare data
//=== strict equality ...means only compare data along with datatype

let x = 10; //stored as a number
let y = 10; //stored as a number
let z = '10'; //stored as a text

console.log("comparasion operator");

console.log(x==y); // Loose Equality
console.log(x==z); // Loose Equality

console.log(x===y); // Strict Equality
console.log(x===z); // Strict Equality

console.log(x!==y); // Strict Equality
console.log(x!==z); // Strict Equality

//Logical Operators --->speacial characters are used to build logic by combining multiple conditions together
//-->&&(and) all conditions must satisfied
//-->||(or)  any one condition should satisfied
//-->!(not) oppsite result

let p=10;
let q=20;
let r=30;
console.log("Logical Operators &&");
console.log(p<q && q>r); //(one condtion is true and another false)-->so false(&&)
console.log(p<q && q<r); //(both the condtions are true)-->true

console.log("Logical Operators ||");
console.log(p<q || q>r); //(one condtion is true and another false)--> so true(||)

console.log("Logical Operators !");
console.log(!(p<q || q>r)); // not(true)-->false

//ternary operator -->speacial characters are used to write a condition in single line 
// or shorthand of an if-else statement

//Syntax let result = (condtion)? value if-true:value if-false
console.log("Ternary Operators ");
let age=17;
let result=(age>=18)? "Eligible for Vote" : "Not Eligible for Vote";
console.log(result);