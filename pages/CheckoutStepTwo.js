const {expect} = require('@playwright/test');

class CheckoutStepTwo{

    constructor(page){
        this.page = page;
        this.checkoutOverviewTitle = page.locator('.title');
        this.finalizeProductName = page.locator('.inventory_item_name');
        this.finalizeProductPrice = page.locator('.inventory_item_price');
        this.finalizeProductQuantity = page.locator('.cart_quantity');
        this.subTotalPrice = page.locator('.summary_subtotal_label');
        this.taxPrice = page.locator('.summary_tax_label');
        this.totalPrice  = page.locator('.summary_total_label');
        this.cancelButton = page.locator('#cancel');
        this.finishButton = page.locator('#finish');
    }

    async VerifyCheckoutOverviewTitle(title){
        await expect(this.checkoutOverviewTitle).toHaveText(title);
    }   

    async VerifyFinalizeProductName(name){
        await expect(this.finalizeProductName).toHaveText(name);
    } 

    async VerifyFinalizeProductPrice(price){
        await expect(this.finalizeProductPrice).toHaveText(price);
    } 

    async VerifyFinalizeProductQuantity(quantity){
        await expect(this.finalizeProductQuantity).toHaveText(quantity);
    } 

    async VerifySubTotalPrice(price){
        await expect(this.subTotalPrice).toHaveText(price);
    } 

    async VerifyTaxPrice(price){
        await expect(this.taxPrice).toHaveText(price);
    } 

    async VerifyTotalPrice(price){
        await expect(this.totalPrice).toHaveText(price);
    }

    async ClickCancelButton(){
        await expect(this.cancelButton).toBeEnabled();
        await this.cancelButton.click();
    }

    async ClickFinishButton(name){
        await expect(this.finishButton).toBeEnabled();
        await expect(this.finishButton).toHaveText(name);
        await this.finishButton.click();
    }
}       

module.exports = { CheckoutStepTwo }