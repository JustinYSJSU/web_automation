import { type Locator, type Page, expect} from '@playwright/test';

export class SauceDemoInventoryPage{
    readonly page: Page;
    readonly menuButton: Locator
    readonly logoutLink: Locator;
    readonly inventoryContainer: Locator;
    readonly cartLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.menuButton = page.locator("#react-burger-menu-btn");
        this.logoutLink = page.getByTestId('logout-sidebar-link');
        this.inventoryContainer = page.getByTestId("inventory-container");
        this.cartLink = page.getByTestId("shopping-cart-link");
    }

    async logout(){
        await this.menuButton.click();
        await expect(this.logoutLink).toBeVisible();
        await this.logoutLink.click();
    }

    async addFirstItemToCart(){
        const firstItem = this.page.locator(".inventory_item").nth(0);
        const addToCartButton = firstItem.locator('.btn_inventory').nth(0);
        const firstItemDesc = await firstItem.locator('.inventory_item_desc').textContent();
        await addToCartButton.click();
        return firstItemDesc;
    }

    async removeItemFromCart(productTestID: string){

    }
}