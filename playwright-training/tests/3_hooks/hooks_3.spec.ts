//*****************************************************/
import {test,expect} from '@playwright/test'

test.beforeAll(async () => {

  const user = {
    name: 'Vignesh',
    dob: '29-05-1997',
    email: 'vignesh@test.com',
    loginId: 'vignesh123',
    password: 'Test@123'
  };
  console.log('Create account:', user);
});

  test('Verify Name', async ({ page }) => {
  await expect(page.getByText('Vignesh')).toBeVisible();
  });

  test('Verify DOB', async ({ page }) => {
  await expect(page.getByText('29-05-1997')).toBeVisible();
  });

  test('Verify Email', async ({ page }) => {
  await expect(page.getByText('vignesh@test.com')).toBeVisible();
  });
  
  test('verify login Id',async({page}) => {
  await expect(page.getByText('vignesh123')).toBeVisible();
  });

  test('Verify Password',async({page}) => {
  await expect(page.getByText('Test@123')).toBeVisible();
  });

