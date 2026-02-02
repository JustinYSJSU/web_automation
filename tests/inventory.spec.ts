import { test, expect } from '../fixtures/fixtures';

test('Logout test', async ({inventoryPage, page}) => {
    await inventoryPage.logout();
    await expect(page).toHaveURL(/saucedemo.com\/$/);
})

test('test add item to cart', async ({inventoryPage, page}) => {
    const firstItemDesc = await inventoryPage.addFirstItemToCart() || "";

    const firstButton = inventoryPage.page.locator('.btn_inventory').first();
    await expect(firstButton).toHaveText('Remove');

    const shoppingCartText = inventoryPage.page.getByTestId("shopping-cart-badge");
    await expect(shoppingCartText).toHaveText('1');

    const shoppingCartLink = inventoryPage.page.getByTestId("shopping-cart-link");
    await shoppingCartLink.click();

    await expect(page).toHaveURL(/.*cart.html/);

    const inventoryItemDesc = page.getByTestId("inventory-item-desc");

    await expect(inventoryItemDesc).toContainText(firstItemDesc);
})