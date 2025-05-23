// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  /*Whether to exit with an error if any tests are marked as flaky. Useful on CI.
  Also available in the command line with the `--fail-on-flaky-tests` option. */

  failOnFlakyTests: !!process.env.CI,

  shard: { total: 5, current: 1 },
  globalTimeout: 3_600_000, //   2 min
  timeout: 40000, // Default timeout is 30 sec, you can override it @see https://playwright.dev/docs/test-timeouts
  expect: {
    timeout: 50000, // Assertion Timeout // You can also write 50*1000
  },
  // These settings control whether git information is captured and stored in the config
  captureGitInfo: { commit: true, diff: true },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 10 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //grep:/smoke,
  //grepInvert: "@regression",

  //maxFailures: process.env.CI ? 1 : 0,

  reporter: [
    ["line"],
    ["html"],
    [
      "allure-playwright",
      {
        detail: false,
        outputFolder: "allure-results",
        suiteTitle: false,
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    headless: true, // You can make it true or false on the basis of execution to be UI mode or headless by changing the value
    screenshot: "on",
    trace: "on",
    video: "on",
    ignoreHTTPSErrors: true,
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,

    //trace: 'retain-on-failure'
    //trace: "on-first-retry",
    // Check the traces on https://trace.playwright.dev/ in detail by uploading the zip file present in test results folder
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://practicesoftwaretesting.com/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], permissions: ["clipboard-read"] },
    },

    //   {
    //     name: "firefox",
    //     use: { ...devices["Desktop Firefox"] },
    //   },

    //   {
    //     name: "webkit",
    //     use: { ...devices["Desktop Safari"] },
    //   },

    //   /* Test against mobile viewport. */
    //   // {
    //   //   name: 'Mobile Chrome',
    //   //   use: { ...devices['Pixel 5'] },
    //   // },
    //   // {
    //   //   name: 'Mobile Safari',
    //   //   use: { ...devices['iPhone 12'] },
    //   // },

    //   /* Test against branded browsers. */
    //   // {
    //   //   name: 'Microsoft Edge',
    //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    //   // },
    //   // {
    //   //   name: 'Google Chrome',
    //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    //   // },
    // ],
  ],
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
