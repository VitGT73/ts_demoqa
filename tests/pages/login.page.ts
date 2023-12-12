import { type Page, type Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly url: string;
  readonly loginButton: Locator;
  readonly newUserButton: Locator;
  readonly messagePanel: Locator;
  readonly password: Locator;
  readonly userName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = process.env.BASE_URL + "/login";
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.newUserButton = page.getByRole("button", { name: "newUser" });
    this.messagePanel = page.locator("#output");
    this.password = page.getByPlaceholder("Password");
    this.userName = page.getByPlaceholder("UserName");
  }

  async open() {
    await this.page.goto(this.url);
  }

  // async fillEmail(email: string) {
  //   await this.userName.fill(email);
  // }

  // async fillPassword(password: string) {
  //   await this.password.fill(password);
  // }

  async doLogin(email: string, password: string) {
    await this.userName.fill(email);
    await this.password.fill(password);
    // await this.fillEmail(email);
    // await this.fillPassword(password);
    await this.loginButton.click();
  }

  async checkLoggedIn() {
    await expect(this.page).toHaveURL(/.*profile/);
    await expect(this.page).toHaveTitle(/DEMOQA/);
  }

  async checkInvalidCredentials() {
    await expect(this.messagePanel).toHaveText("Invalid username or password!");
  }
}

// export default LoginPage;
