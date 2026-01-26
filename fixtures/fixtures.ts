import { test as base, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/sauce-demo-login-page';
export {expect} from '@playwright/test';

export const test = base.extend<{loginPage: SauceDemoLoginPage}>({
    loginPage: async({page}, use) =>{
        const loginPage = new SauceDemoLoginPage(page);

        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle(/Swag Labs/);

        await use(loginPage);
    }
})