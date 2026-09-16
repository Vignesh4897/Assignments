//after each
import {test,expect} from '@playwright/test';

test ('Add product to the Cart',async({page}) => {
    await page.goto('https://playwright.dev/');

    //Test steps
    console.log("Added Product to the cart");
    //Imagine we were added a product
});

test ('Remove the product from cart',async({page}) => {
    await page.goto('https://playwright.dev/');

    //Test steps
    console.log("Remove Product from the cart");
    //Imagine we removed the product
});

test.afterEach(async({page},testInfo) =>{
    await page.screenshot({path: `screenshots/${testInfo.title}.png`});
});

// Test 1
//   ↓
// afterEach()
//   ↓
// Cleanup / Screenshot / Logging
//   ↓
// Test 2
//   ↓
// afterEach()
//   ↓
// Cleanup / Screenshot / Logging
//   ↓
// Test 3
//   ↓
// afterEach()
//   ↓
// Cleanup / Screenshot / Logging
//   ↓
// Test 4
//   ↓
// afterEach()
//   ↓
// Cleanup / Screenshot / Logging
//   ↓
// Test 5
//   ↓
// afterEach()
//   ↓
// Cleanup / Screenshot / Logging
//*************************************************************/
// Marriage Function —  beforeAll() and afterAll()
//     beforeAll()   →  Prepare the whole dining area once
//     afterAll()    →  Final cleanup after all tables are finished

// Hotel / Restaurant — beforeEach() and afterEach()
//     beforeEach()   →  Prepare each table before they start eating
//     afterEach()    →  Clean each table after they finish eating
//*************************************************************/
// beforeEach() → Prepare

// Examples:

// Open a particular page
// Login
// Set up test data
// Set cookies
// Navigate to a required page
// afterEach() → Finish/Clean up

// Examples:

// Delete test data
// Take screenshot
// Logging
// Cleanup

// Easy memory:

// 🟢 beforeEach() = Get ready before every test
// 🔵 afterEach() = Do something after every test