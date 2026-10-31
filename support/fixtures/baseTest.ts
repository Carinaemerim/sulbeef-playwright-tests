import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
  // Intercepts the browser context creation to handle session isolation
  context: async ({ browser }, use, testInfo) => {
    // 💡 SHARP FIX: Only clear storage if the specific running scenario is explicitly tagged with @login
    const hasLoginTag = testInfo.tags?.includes('@login');

    if (hasLoginTag) {
      // Create a completely isolated, clean browser session for negative/empty login test scenarios
      const context = await browser.newContext({ storageState: { cookies: [], origins: [] } });
      await use(context);
      await context.close();
    } else {
      // 🚀 GLOBAL REUSE: Automatically injects the active user.json session for dashboard and all other core features
      const context = await browser.newContext();
      await use(context);
      await context.close();
    }
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
});

export { expect } from '@playwright/test';