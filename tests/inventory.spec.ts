import { test, expect } from '../fixtures/fixtures';
import testData from "../data/inventory_data.json";

test('Logout test', async ({inventoryPage, page}) => {
    await inventoryPage.logout();
    await expect(page).toHaveURL(/saucedemo.com\/$/);
})

test('test add single item to cart', async ({inventoryPage, page}) => {
    const itemButtonIDList = testData.item_button_ids;
    const randomItemButtonID = itemButtonIDList[Math.floor(Math.random() * itemButtonIDList.length)];
    await inventoryPage.addItemToCart(randomItemButtonID);
})