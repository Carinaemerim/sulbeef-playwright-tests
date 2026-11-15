import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures/baseTest.js';

const { When, Then } = createBdd(test);

When('I click on profile photo', async ({ headerPage }) => {
    await headerPage.clickOnProfilePhoto();
  },
);

When('I click on logout option', async ({ headerPage }) => {
    await headerPage.clickOnLogoutOption();
  },
);

Then('I should be redirected to the login page', async ({ page }) => {
    await expect(page).toHaveURL(/auth.*\/login/);
  },
);
