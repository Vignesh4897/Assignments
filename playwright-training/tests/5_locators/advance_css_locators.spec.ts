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


// Syntax	         Meaning
// :first-child	    First child
// :last-child	    Last child
// :nth-child(2)	Second child
// :nth-child(3)	Third child
// :nth-child(n)	Child at a specific position

// Descendant method in CSS locator

// A descendant means an element that is inside another element, at any level.

// The important point is:

// Descendant selector uses a space ( ), not >
     
// 1. Descendant selector  → A B
      page.locator("div.login-form div.user-section input[name='username']");

// 2. Direct Child     → A > B
      page.locator("div[class='payment']>input[name='cardNumber']");

// 3. Descendant + attribute
      page.locator("div.checkout div.payment-section button");
                // or
      page.locator("div.checkout div.payment-section button[type='submit']");

// 5. First Child      → A:first-child
      page.locator("div.menu button:first-child");

// 6. Last Child       → A:last-child
      page.locator("div.menu button:last-child");

// 7. Nth Child        → A:nth-child(n)
      page.locator("button:nth-child(3)");

// 8. Multi-level direct child     → A > B > C
      page.locator("div.products > div.product-card > div.product-info > button");