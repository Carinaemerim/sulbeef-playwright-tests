import { test, expect } from '../support/fixtures/baseTest';

const authFile = 'playwright/.auth/user.json';

test('userLogin', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.fillLogin('playwright', 'Playwright2sulbeef@');

    await page.getByText('Carregando...').waitFor({ state: 'hidden' });

    await page.context().storageState({ path: authFile });
  });