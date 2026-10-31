import { test, expect } from '../support/fixtures/baseTest.js';

const authFile = 'playwright/.auth/user.json';

test('userLogin', async ({ loginPage, page }) => {
    await loginPage.goto();
    const username = process.env.SULBEEF_USER || '';
    const password = process.env.SULBEEF_PASS || '';

    await loginPage.fillLogin(username, password);
    await loginPage.clickSubmitButton();

    await page.getByText('Carregando...').waitFor({ state: 'hidden' });
    await page.context().storageState({ path: authFile });
  });