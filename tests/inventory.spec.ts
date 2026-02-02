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

test('test remove item from cart', async ({inventoryPage, page}) => {
    await inventoryPage.addFirstItemToCart();

    const firstButton = inventoryPage.page.locator('.btn_inventory').first();
    const shoppingCartText = inventoryPage.page.getByTestId("shopping-cart-badge");

    await expect(firstButton).toHaveText('Remove');
    await expect(shoppingCartText).toHaveText('1');

    const shoppingCartLink = inventoryPage.page.getByTestId("shopping-cart-link");
    await shoppingCartLink.click();

    await expect(page).toHaveURL(/.*cart.html/);

    const removeButton = page.locator('.btn_small');
    const cartPageShoppingCartText = page.getByTestId("shopping-cart-badge");
    removeButton.click();

    await expect(cartPageShoppingCartText).not.toBeVisible();
    await expect(removeButton).not.toBeVisible();
})

test('sort items by name (z-a)', async ({inventoryPage, page}) => {
    const itemNames: string[] = []
    let isSorted = true;
    const sortButton = page.getByTestId("product-sort-container");

    await sortButton.selectOption("Name (Z to A)");

    const listItems = page.locator('.inventory_item');

    const allItems = await listItems.all();
    
    for (const item of allItems) {
        const itemName = await item.locator('.inventory_item_name').textContent();
        itemNames.push(itemName || "");
        
    }

    for(let i = 0; i < itemNames.length - 1; i++){
        if(itemNames[i] < itemNames[i + 1]){
            isSorted = false;
        }
    }
    expect(isSorted);
})