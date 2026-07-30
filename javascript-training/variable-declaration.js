//How to store the data in JavaScript?
//declaration variable = data ;
// In JavaScript, we can declare the variable by using three different keywords.
//1.var (We should avoid in the modern JavaScript programs ) 
// (Can be used to store the data which is changing dynamically )
//2.let (Can be used to store the data which is changing dynamically )
//3.const (Can be used to store constant data )
//These variable declarations will differ mainly based on four important parameters.
//1. Initialization
//2. Reassignment
//3. Re-declaration
//4. Scope

console.log("First topic Initialization");
//1. Initialization => Adding the value at the time of declaration
var a=10; //No need to initialize any value.
let b=20; //No need to initialize any value.
const c = "viki"; //Compulsory we need to initialize the value at the beginning.

console.log(a);
console.log(b);
console.log(c);

console.log("Next topic Reassignment");
//2. Reassignment => Changing the original value.
a = 25; //We can reassign the value.
b = 30; //We can reassign the value.
const d = 40; //We can't reassign the value.

console.log(a);
console.log(b);
console.log(d);

console.log("Next Topic Re-declaration");

//3. Re-declaration => Declaring the same variable again to store different data
   var a = "Bharath"; //Re-declaration is allowed.
     b = 50; //Re-declaration is not allowed.
// const c = "ABC"; //Re-declaration is not allowed.

console.log(a);
console.log(b);

console.log("Next Topic Scope");

//4. Scope => Where can we access the data?
//var => not block scoped
//let =>  block scoped
//const =>  block scoped


{
    var x = 100;
    let y = 200;
    const z = 300;

    console.log(x);
    console.log(y);
    console.log(z);

     console.log("global outside block variable");

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log("local inside block variable");
console.log(x);
//console.log(y);
//console.log(z);
    console.log(a);
    console.log(b);
    console.log(c);