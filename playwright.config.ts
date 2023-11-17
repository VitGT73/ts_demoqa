import { defineConfig, devices } from '@playwright/test';
// import baseEnvUrl from './utils/environmentBaseUrl';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // globalSetup: require.resolve('./tests/setup/global.setup'),
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  // Запускаю 6 локальных воркеров
  workers: process.env.CI ? 1 : 6,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    storageState: 'storageState.json',
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',

    // viewport: { width:1920, height: 1080 },
    // video: 'on-first-retry',
  },
  // timeout: 30000,
  // expect:{
  //   timeout: 10000,
  // }
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // viewport: { width:1280, height: 720 },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'all-browsers-and-tests',
      use: {
        baseURL: 'https://playwright.dev/',
         ...devices['Desktop Chrome']
      },
    },

    {
      name: 'all-browsers-and-tests',
      use: {
        baseURL: 'https://playwright.dev/',
         ...devices['Desktop Safari']
      },
    },

    {
      name: 'all-browsers-and-tests',
      use: {
        baseURL: 'https://playwright.dev/',
         ...devices['Desktop Firefox']
      },
    },
    {
      name: 'demoqa',
      use: {
        baseURL: 'https://demoqa.com/',
        ...devices['Desktop Chrome']
      },
    },

    // Example only
    // {
    //   name: 'ci',
    //   use: {
    //      baseURL: process.env.CI
    //       ? baseEnvUrl.ci.prefix + process.env.GITHUB_REF_NAME + baseEnvUrl.ci.suffix //https://dev-myapp-chapter-2.mydomain.com
    //       : baseEnvUrl.staging.home,
    //   },
    //   /**
    //    * GitHub variables: https://docs.github.com/en/actions/learn-github-actions/variables
    //    * GitLab variables: https://docs.gitlab.com/ee/ci/variables/predefined_variables.html#predefined-variables-reference
    //    */
    // },


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
