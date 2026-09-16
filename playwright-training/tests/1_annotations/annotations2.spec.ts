//test.only() => This annotation will be used to run only a particular test case. 
//test.skip() => This annotation will be used to skip a particular test case. 
//test.fixme() => This annotation will be used to mark a specific test case that needs to be fixed. 
//test.fail() => This annotation will be used to mark a specific test case that is expected to fail. 
//test.slow() => This annotation will represent a slow test case that is going to wait for three times more than the regular wait time.

import {test} from '@playwright/test';

test('Test Case 1',async({page}) => {
   // test.skip();
   console.log("Test case 1");
});
test('Test Case 2',async({page}) => {
    //test.fixme();
   console.log("Test case 2");
});
test('Test case 3',async({page}) => {
    //test.fail();
   console.log("Test case 3");
});
test('Test case 4',async({page}) => {
    test.slow();
   console.log("Test case 4");
});
