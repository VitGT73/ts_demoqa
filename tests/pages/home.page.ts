import { type Page, type Locator , expect } from '@playwright/test';


export class HomePage {
  readonly page: Page;
  readonly url: string;
  readonly pageTitle:string;


  constructor(page: Page) {
    this.page = page;
    this.url = process.env.BASE_URL + "/";
    this.pageTitle = 'DEMOQA'

  }

  async load(){
    console.log("Пытаемся перейти на страницу: ", this.url);
    await this.page.goto(this.url);
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }


}

// export default HomePage;
