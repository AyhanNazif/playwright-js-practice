const{expect} = require("@playwright/test");

class CheckoutStepOne {

    constructor(page){
        this.page = page;
        this.checkoutTitle = page.locator(".title");
        this.firstNameField = page.locator("#first-name");
        this.lastNameField = page.locator("#last-name");
        this.postCodeField = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        this.cancelButton = page.locator("#cancel");
    }

    async CheckCheckoutPageOneTitle(title){
        await expect(this.checkoutTitle).toHaveText(title); 
    }

    async FillFirstNameField(firstname){
        await this.firstNameField.fill(firstname);
    }

    async FillLastNameField(lastname){
        await this.lastNameField.fill(lastname);
    }

    async FillPostCodeField(code){
        await this.postCodeField.fill(code);
    }

    async CheckCancelButtonIsVisible(name){
        await expect(this.cancelButton).toBeEnabled();
        await expect(this.cancelButton).toHaveText(name);
    }

    async ClickContinueButton(name){
        await expect(this.continueButton).toBeEnabled();
        await expect(this.continueButton).toHaveText(name);
        await this.continueButton.click();
    }
}

module.exports = {CheckoutStepOne}