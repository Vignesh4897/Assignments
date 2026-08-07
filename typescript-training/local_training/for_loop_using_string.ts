//using array method
console.log("\n***Student Details***")
let studentName:string [] = ["Vignesh","Sashvik","Sharanith","Anupriya"];
for(let i:number=0;i<studentName.length;i++)
{
    console.log(`${i+1}.${studentName[i]}`);
}

console.log("\n***Fruits and price***")
let fruits :string [] = ["Banana","orange","Apple","Grapes"];
let price :number[]   = [50,80,120,60];
for(let j:number=0; j<fruits.length;j++)
{
    console.log(`${j+1}.${fruits[j]}=${price[j]}`);
}

console.log("\n***Merge Fruits and price***")
let fruitsAndPrices:(string | number)[]=["Banana",50,"orange",80,"Apple",120,"Grapes",60];
for(let p:number=0;p<fruitsAndPrices.length;p=p+2)
{
    console.log(`${p+1}.${fruitsAndPrices[p]}=${fruitsAndPrices[p+1]}`);
}