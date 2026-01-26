import { expect, type Locator, type Page} from '@playwright/test';
/* expect -> for assertions
   Locator -> object to represent a locator
   Page -> object to represent a page
*/

export class SauceDemoLoginPage{
    // define "attributes" of the page. Similar to Java / Python object attributes. readonly = unable to change value
    readonly page: Page;
    readonly usernameEntry: Locator
    readonly passwordEntry: Locator
    readonly loginButton: Locator

    constructor(page: Page){
        this.page = page;
        this.usernameEntry = page.getByTestId('username');
        this.passwordEntry = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
    }

    async login(username: string, password: string){
        this.usernameEntry.fill(username);
        this.passwordEntry.fill(password);
        this.loginButton.click();
    }
}
