import {PI,sumOfNumbers} from '../modules/1_named_exports.ts';
import {PI as pi,sumOfNumbers as sum} from '../modules/2_export_all.ts';

console.log(`The value of PI is ${PI}`);
sumOfNumbers(20,30);

console.log(`The value of PI is ${pi}`);
sum(30,30);


