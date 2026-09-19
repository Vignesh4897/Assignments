//Css Locator => CSS locator is all about locating the web element by using CSS properties of the element. 

//Advanced CSS selector syntax :

//Syntax : reference-element > target-element

// great-grand-parent > grand-parent > parent > targetElement

//grand-parent : ul[class="leftmenu"]
//parent : li
//target : a[href="services.htm"]

// ul[class="leftmenu"] > li > a[href="services.htm"]

import {test} from '@playwright/test';

//Navigate to the ParaBank home page. 
test('Advanced_css_locator',async({page}) => {
await page.goto('https://parabank.parasoft.com/parabank/services.htm');

await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');

});
