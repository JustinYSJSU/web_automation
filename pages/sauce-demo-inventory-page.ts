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

    async addItemToCart(productTestID: string){
        const itemAddToCartButton = this.inventoryContainer.getByTestId(productTestID);
        await itemAddToCartButton.click();
    }
}