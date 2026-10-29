import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  // Clean the storage state for tests tagged with @login to ensure a fresh login page
  context: async ({ browser }, use, testInfo) => {
    // Verify if the test has the @login tag
    const isLoginTest = testInfo.tags?.includes('@login');

    if (isLoginTest) {
      // Create a clean context, ignoring the global storageState for the login page
      const context = await browser.newContext({ storageState: { cookies: [], origins: [] } });
      await use(context);
      await context.close();
    } else {
      // Original behavior unchanged for all other logged-in pages in the system
      const context = await browser.newContext();
      await use(context);
      await context.close();
    }
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
