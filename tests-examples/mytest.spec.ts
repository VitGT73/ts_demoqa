// import { expect, test } from "@playwright/test";

// // test("has title download", async ({ page }) => {
// //   await page.goto("https://icedrive.net/s/gxC9bvCT5u5WQN6t2v9uu3PzFQND");
// //   await page.getByPlaceholder("Password").fill("1");
// //   await page.locator("//button[text()='Submit']").click();
// //   await expect(page.locator("//p[text()='Invalid password']")).toBeVisible();

// // });
// let flag;
// for (let i = 0; i < 100; i++) {
//   test(`testing with ${i}`, async ({ page }) => {
//     await page.goto("https://icedrive.net/s/gxC9bvCT5u5WQN6t2v9uu3PzFQND");
//     await page.getByPlaceholder("Password").fill(String(i));
//     await page.locator("//button[text()='Submit']").click();
//     flag = await expect(
//       page.locator("//p[text()='Invalid password']")
//     ).toBeVisible();
//     await page.reload();
//   });
//   if (flag != undefined) {
//     console.log(i);
//     break;
//   }
//   // You can also do it with test.describe() or with multiple tests as long the test name is unique.
// }
