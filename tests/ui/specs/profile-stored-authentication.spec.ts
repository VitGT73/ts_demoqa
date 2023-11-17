import { test } from '@playwright/test';
import SearchPage from '../pages/profile.page';
import pages from '../../utils/pages';

let profilePage: SearchPage;

test.beforeEach(async ({ page }) => {
    await page.goto(pages.profile);
    profilePage = new SearchPage(page);
});

test.describe.only('Profile - Stored Auth', () => {
    test('Check logged in', async () => {
        await profilePage.checkLoggedIn();
    });
});
