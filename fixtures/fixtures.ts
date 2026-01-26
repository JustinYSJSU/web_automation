import { test as base, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/sauce-demo-login-page';
import { SauceDemoInventoryPage } from '../pages/sauce-demo-inventory-page';
export {expect} from '@playwright/test';

export const test = base.extend<{loginPage: SauceDemoLoginPage;
    inventoryPage: SauceDemoInventoryPage
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
    }
})