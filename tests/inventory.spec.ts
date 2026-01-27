import { test, expect } from '../fixtures/fixtures';

test('Logout test', async ({inventoryPage, page}) => {
    await inventoryPage.logout();
    await expect(page).toHaveURL(/saucedemo.com\/$/);
})
