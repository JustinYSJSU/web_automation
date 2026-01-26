import { type Locator, type Page} from '@playwright/test';

export class SauceDemoInventoryPage{
    readonly page: Page;
    readonly logoutLink: Locator;
    readonly inventoryContainer: Locator;
    readonly cartLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.logoutLink = page.getByTestId("logout-sidebar-link");
        this.inventoryContainer = page.getByTestId("inventory-container");
        this.cartLink = page.getByTestId("shopping-cart-link");
    }

    async logout(){
        await this.logoutLink.click()
    }
    
    async addItemToCart(productTestID: string){
        const itemAddToCartButton = this.inventoryContainer.getByTestId(productTestID);
        await itemAddToCartButton.click();
    }
}