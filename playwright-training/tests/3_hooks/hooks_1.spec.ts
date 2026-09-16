//hooks are nothing but the default methods provided by Playwright to add pre and post conditions while executing test cases. 

//1. test.beforeAll() => Will execute once before all the test cases in the file 
//2. test.afterAll() => Will execute once after all the test cases in the file
//3. test.beforeEach() => Will execute before each test case in the file
//4. test.afterEach() => Will execute after each test case in the file

//beforeEach() is not mandatory. It is a convenience for common setup code.

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('Check title', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
});

test('Check Get started link', async ({ page }) => {
    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toBeVisible();
});

    //          BEFORE EACH
    //              ↓
    //     page.goto(playwright.dev)
    //              ↓
    //         Check title
    //              ↓
    //           Test 1
                 
    //          BEFORE EACH
    //              ↓
    //     page.goto(playwright.dev)
    //              ↓
    //    Check Get started link
    //              ↓
    //           Test 2
//*************************************************************/
// Marriage Function —  beforeAll() and afterAll()
//     beforeAll()   →  Prepare the whole dining area once
//     afterAll()    →  Final cleanup after all tables are finished

// Hotel / Restaurant — beforeEach() and afterEach()
//     beforeEach()   →  Prepare each table before they start eating
//     afterEach()    →  Clean each table after they finish eating
//*************************************************************/
// beforeEach
//    ↓
// page.goto(website)
//    ↓
// Test 1

// beforeEach
//    ↓
// page.goto(website)
//    ↓
// Test 2

//beforeEach() makes Playwright execute page.goto(website) before every test case.


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