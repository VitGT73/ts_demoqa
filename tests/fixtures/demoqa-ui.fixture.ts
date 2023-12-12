import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
// import { RegisterPage } from "../pages/register.page";

type DemoqaFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

export const test = base.extend<DemoqaFixtures>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  }
});

export { expect } from '@playwright/test';
