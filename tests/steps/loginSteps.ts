import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures/baseTest.js'; 

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('I fill in the username {string} and password {string}', async ({ loginPage }, username: string, password: string) => {
  await loginPage.fillLogin(username, password);
});

When('I fill in the login form with valid company credentials', async ({ loginPage }) => {
  const username = process.env.SULBEEF_USER || '';
  const password = process.env.SULBEEF_PASS || '';
  await loginPage.fillLogin(username, password);
});

When('I fill in the login form with an invalid username but a valid password', async ({ loginPage }) => {
  const invalidUsername = 'invaliduser';
  const validPassword = process.env.SULBEEF_PASS || '';
  await loginPage.fillLogin(invalidUsername, validPassword);
});

When('I fill in the login form with a valid username but an invalid password', async ({ loginPage }) => {
  const validUsername = process.env.SULBEEF_USER || '';
  const invalidPassword = 'invalidpassword';
  await loginPage.fillLogin(validUsername, invalidPassword);
});

Then('I should be redirected to the dashboard page', async ({ page }) => {
  await page.getByText('Carregando...').waitFor({ state: 'hidden' });
  await expect(page).toHaveTitle('Portal de Pedido :: Sulbeef Representações');
});

Then('I should see an error message', async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeVisible();
});

When('I leave the username and password fields empty', async ({ loginPage }) => {
  await loginPage.fillLogin('', '');
});

When('I leave the username field empty but fill in a valid password', async ({ loginPage }) => {
  const validPassword = process.env.SULBEEF_PASS || '';
  
  await loginPage.fillUsername('');
  await loginPage.fillPassword(validPassword);
});

When('I fill in a valid username but leave the password field empty', async ({ loginPage }) => {
  const validUsername = process.env.SULBEEF_USER || '';
  
  await loginPage.fillUsername(validUsername);
  await loginPage.fillPassword('');
});

When('I click on the login button', async ({ loginPage }) => {
  await loginPage.clickSubmitButton();
});

Then('I should see an error message under the username field', async ({ loginPage }) => {
  await expect(loginPage.usernameErrorMessage).toBeVisible();
});

Then('I should see an error message under the password field', async ({ loginPage }) => {
  await expect(loginPage.passwordErrorMessage).toBeVisible();
});


