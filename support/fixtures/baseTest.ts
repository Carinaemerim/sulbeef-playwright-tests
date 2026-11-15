import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { HeaderPage } from '../pages/HeaderPage.js';

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  headerPage: HeaderPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  headerPage: async ({ page }, use) => {
    const headerPage = new HeaderPage(page);
    await use(headerPage);
  },
});

export { expect } from '@playwright/test';
