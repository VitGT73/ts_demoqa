// import { expect } from "@playwright/test";
// import { assert } from "console";
import { test, expect } from "../../fixtures/demoqa-ui.fixture";
// import environmentBaseUrl from "../../utils/environmentBaseUrl";

// test.beforeAll;

test.describe('Home page tests', () =>{
    // test.beforeEach(async({page, homePage})=>{

    // });
    // test.only ("Open home page and check Title ", async ({ homePage }) => {
    //     await homePage.load();
    //     await homePage.assertPageTitle();
    //   });

      test.only ("Open home page and check Title ", async ({ page }) => {
        await page.goto(process.env.BASE_URL+'/');
        await expect(page).toHaveTitle("DEMOQA");
      });
})
