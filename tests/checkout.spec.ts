import { test, expect } from '../fixtures/fixtures';

test('checkout with item(s)', async ({cartPage, page}) =>{
    await cartPage.checkout();
    await expect(page).toHaveURL(/.*checkout-step-one.html/);

    const firstNameField = page.getByTestId("firstName");
    const lastNameField = page.getByTestId("lastName");
    const zipCodeField = page.getByTestId("postalCode");
    const continueButton = page.getByTestId("continue");

    await firstNameField.fill("John");
    await lastNameField.fill("Doe");
    await zipCodeField.fill("12345");
    await continueButton.click();

    await expect(page).toHaveURL(/.*checkout-step-two.html/);

    const finishButton = page.getByTestId("finish");
    await finishButton.click();

    await expect(page).toHaveURL(/.*checkout-complete.html/);
})