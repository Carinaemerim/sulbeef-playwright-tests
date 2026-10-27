import { test, expect } from '../support/fixtures/baseTest';

test.use({ storageState: { cookies: [], origins: [] } });

test('successfulLogin', async ({ loginPage, page }) => {
  // Navigate to the login page
  await loginPage.goto();

  // Fill in the username and password fields
  await loginPage.fillLogin('playwright', 'Playwright2sulbeef@');

  // Expect to be redirected to the dashboard or a specific page after login
  await expect(page).toHaveTitle('Portal de Pedido :: Sulbeef Representações');
});

test ('unsuccessfulLogin', async ({ loginPage, page }) => {
  // Navigate to the login page
  await loginPage.goto();

  // Fill in the username and password fields with incorrect credentials
  await loginPage.fillLogin('wronguser', 'wrongpassword');

  // Expect an error message to be displayed
  const errorMessage = page.getByText('Invalid input: Incorrect username or password.');
  await expect(errorMessage).toBeVisible();
});