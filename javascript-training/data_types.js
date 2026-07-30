//Data types are divied into two different types of category
//1.primitive datatype ->Immutable Datatype (the original value wont change even if we are trying to perform some operation)
//2.Non-primitive datatype->Mutable Datatype (the origianl will change)

//Immutable Datatype
let a = 10;
a+10;
//a+=10
console.log(a);

//Mutable Datatype -->Method 1
let empData={"name":"vignesh","ID":1598};
console.log(empData);

//Mutable Datatype -->Method 2
let emplData={"name":"vignesh"}
emplData.name="sashvik";
emplData.age=2;
emplData.ID=1234;

console.log(emplData);
