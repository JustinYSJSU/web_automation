import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/sauce-demo-login-page';

test('navigate', async({page}) =>{
    const loginPage = new SauceDemoLoginPage(page);

    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle(/Swag Labs/);
    await loginPage.login("standard_user", "secret_sauce");
})