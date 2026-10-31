import 'dotenv/config';

import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// Centralized BDD configuration for all runners
const bddTestDir = defineBddConfig({
  features: 'tests/features/**/*.feature', 
  steps: ['tests/steps/**/*.ts', 'support/fixtures/baseTest.ts'],
});

export default defineConfig({
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    trace: 'on-first-retry',
    storageState: 'playwright/.auth/user.json',
  },

  projects: [
    // 1. SETUP RUNNER (Authenticate and save the storage state)
    {
      name: 'setup',
      testDir: './tests',
      testMatch: /.*auth\.setup\.ts/,
      use: { headless: true }, 
    },

    // 2. CHROMIUM RUNNER (Execute the .feature scenarios in Chromium)
    {
      name: 'chromium',
      // Passes the typed BDD directory to the Chromium runner
      testDir: bddTestDir, 
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json', 
      },
      dependencies: ['setup'],
    },

    // 3. FIREFOX RUNNER (Execute the .feature scenarios in Firefox)
    {
      name: 'firefox',
      // 🌟 Passes the typed BDD directory to the Firefox runner
      testDir: bddTestDir, 
      use: { 
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json', 
      },
      dependencies: ['setup'],
    },

    // 4. MOBILE IOS RUNNER (Execute the .feature scenarios in mobile iOS)
    {
      name: 'mobile-safari-ios',
      testDir: bddTestDir, 
      use: { 
        ...devices['iPhone 14 Pro Max'],
        storageState: 'playwright/.auth/user.json', 
      },
      dependencies: ['setup'],
      grepInvert: /@desktop/,
    },

    //5. MOBILE ANDROID RUNNER (Execute the .feature scenarios in mobile Android)
    {
      name: 'mobile-chrome-android',
      testDir: bddTestDir,
      use: { 
        ...devices['Pixel 7 Pro'],
        storageState: 'playwright/.auth/user.json', 
      },
      dependencies: ['setup'],
      grepInvert: /@desktop/,
  }
  ],
});
