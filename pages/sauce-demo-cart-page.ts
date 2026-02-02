import { type Locator, type Page, expect} from '@playwright/test';

export class SauceDemoCartPage{

    readonly cartContentsContainer: Locator;
    readonly cartList: Locator;
    
    constructor(page: Page){
        this.cartContentsContainer = page.getByTestId("cart-contents-container");
        this.cartList = page.getByTestId("cart-list");
    }
}