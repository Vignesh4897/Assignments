//annotations => Annotations are all about a set of keywords and default methods provided by Playwright to run all our test cases. 

//test => Refers to an independent test method to be executed by Playwright 
//test.describe => Refers to a group of test cases to be executed by Playwright together 

//test.only()
//test.skip()
//test.fixme()
//test.fail()
//test.slow()

import {test} from '@playwright/test';

//independent test case
test('independent test case', async({page}) => {
 console.log('independent test case');
});

//Group of test cases
test.describe('Group1',() =>{ 

   test('Group1-Test case 1',async({page}) => {
     console.log("Group 1-This is test case 1");
   });

   test('Group1-Test case 2',async({page}) => {
     console.log("Group 1-This is test case 2");
   });

   test('Group1-Test case 3',async({page}) => {
     console.log("Group 1-This is test case 3");
   });

     test('Group1-Test case 4',async({page}) => {
     console.log("Group 1-This is test case 4");
   });

});

test.describe('Group2',() =>{ 
    test.fixme();

   test('Group2-Test case 1',async({page}) => {
     console.log("Group 2-This is test case 1");
   });

   test('Group2-Test case 2',async({page}) => {
     console.log("Group 2-This is test case 2");
   });

   test('Group2-Test case 3',async({page}) => {
     console.log("Group 2-This is test case 3");
   });

});