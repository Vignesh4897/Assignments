import {test,expect, chromium} from '@playwright/test';

test('browser actions',async() => {
 // Launch the Chromium 'browser engine' to get the edge browser. 
 //const browserengine = await chromium.launch(); //Chrome Browser
 const browserengine = await chromium.launch({channel : 'msedge',headless:false}); //edge browser in headed mode
});