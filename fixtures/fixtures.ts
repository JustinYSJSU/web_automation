import { test as base, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/sauce-demo-login-page';
import { SauceDemoInventoryPage } from '../pages/sauce-demo-inventory-page';
import { SauceDemoCartPage } from '../pages/sauce-demo-cart-page';
export {expect} from '@playwright/test';

export const test = base.extend<{loginPage: SauceDemoLoginPage;
    inventoryPage: SauceDemoInventoryPage;
    cartPage: SauceDemoCartPage
}>({
    loginPage: async({page}, use) =>{
        const loginPage = new SauceDemoLoginPage(page);

        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle(/Swag Labs/);

        await use(loginPage);
    },
    inventoryPage: async({page}, use) => {
        const inventoryPage = new SauceDemoInventoryPage(page);

        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle(/Swag Labs/);
        await page.getByTestId('username').fill("standard_user");
        await page.getByTestId('password').fill("secret_sauce");
        await page.getByTestId('login-button').click();
        await expect(page).toHaveURL(/.*inventory.html/);

        await use(inventoryPage);
    },
    cartPage: async({page}, use) => {
        const cartPage = new SauceDemoCartPage(page);

        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle(/Swag Labs/);
        await page.getByTestId('username').fill("standard_user");
        await page.getByTestId('password').fill("secret_sauce");
        await page.getByTestId('login-button').click();
        await expect(page).toHaveURL(/.*inventory.html/);

        const firstItem = page.locator(".inventory_item").nth(0);
        const addToCartButton = firstItem.locator('.btn_inventory').nth(0);
        await addToCartButton.click();

        const shoppingCartLink = page.getByTestId("shopping-cart-link");
        await shoppingCartLink.click();

        await expect(page).toHaveURL(/.*cart.html/);

        await use(cartPage);
    }
})