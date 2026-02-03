import { type Locator, type Page, expect} from '@playwright/test';

export class SauceDemoCartPage{

    readonly checkoutButton: Locator;
    
    constructor(page: Page){
        this.checkoutButton = page.getByTestId("checkout");
    }

    async checkout(){
        this.checkoutButton.click();
    }
}