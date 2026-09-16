import { test, expect } from '@playwright/test';

test('Check Playwright title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  console.log('Test 1 completed');
});

test('Check Get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();

  console.log('Test 2 completed');
});

test('Check Installation heading', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();

  console.log('Test 3 completed');
});

test.afterAll(async () => {
  console.log('All tests completed - Final cleanup');
});