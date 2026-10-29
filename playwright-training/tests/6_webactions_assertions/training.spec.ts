import {test,expect} from "@playwright/test";

test('soft assertion',async({page}) => {
    await page.goto('https://www.google.com');
    await expect.soft(page).toHaveTitle('Google');
    await expect(page).toHaveURL('https://www.google.com');
    console.log("Execution Completely Sucessfully");
});