//@smoke -
//@regression -
//@sanity - 
//@login -
//@api - 

import {test} from '@playwright/test';

test('Test Case 1',{tag :'@smoke'},async({page}) => {
   console.log("Test case 1");
});

test('Test Case 2',{tag :'@regression'},async({page}) => {
   console.log("Test case 2");
});

test('Test case 3',{tag :'@sanity'},async({page}) => {
   console.log("Test case 3");
});

test('Test case 4',{tag :['@smoke','@regression','@sanity']},async({page}) => {
   console.log("Test case 4");
});

test('Test case 5',{tag :'@smoke'},async({page}) => {
   console.log("Test case 5");
});
