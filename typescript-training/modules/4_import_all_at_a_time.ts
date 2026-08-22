import * as data1 from '../modules/1_named_exports.ts';
import * as data2 from '../modules/2_export_all.ts';

console.log(`the value of pi ${data1.PI}`);
data1.sumOfNumbers(10,10);

console.log(`\nthe value of pi ${data2.PI}`);
data2.sumOfNumbers(10,20);
