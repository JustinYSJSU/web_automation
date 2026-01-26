import testData from "../data/login_data.json";
import { test, expect } from '../fixtures/fixtures';

for(const data of testData) {
    test(`Login test for ${data.test_case_id}: ${data.name}`, async ({loginPage, page}) =>{
        await loginPage.login(data.username, data.password);

        if(data.shouldFail){
            await expect(page.getByText(`${data.expectedError}`)).toBeVisible()
        }
        else{
            await expect(page).toHaveURL(/.*inventory.html/);
        }
    });
}