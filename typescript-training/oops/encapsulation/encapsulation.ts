//Encapulation is a concept of binding the data and methods together and it is used to hide the information

class bank_account{
 //properties/data
 private accbalance : number = 10000;

 //Method to access the private data
 public getbalance()
 {
 return this.accbalance;
 }
 //Method to modify the private data
 public addamount(amount:number){
  this.accbalance = this.accbalance + amount;
 }

}

let account =new bank_account();

console.log(account.getbalance());

account.addamount(5000);

console.log(account.getbalance());