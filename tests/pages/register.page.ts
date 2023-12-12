import { type Page, type Locator, expect } from "@playwright/test";



class RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userName: Locator; // vitgt          , vit_test          ,vit_admin
  readonly password: Locator; // Qwerty123!@#   ,Asdfg123!@#        ,Zxcvbn123!@#
  readonly captcha: Locator;
  readonly registerButton: Locator;
  readonly backToLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.userName = page.getByPlaceholder("UserName");
    this.password = page.getByPlaceholder("Password");
    //   this.captcha: Locator;
    this.registerButton = page.getByRole("button", { name: "register" });
    this.backToLogin = page.getByRole("button", { name: "gotologin" });
  }


}

export default RegisterPage;
