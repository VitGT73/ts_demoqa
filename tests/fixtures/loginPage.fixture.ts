import { test as base } from '@playwright/test';
import { LoginPage } from '../ui/pages/login.pages';

export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);

  },
});
