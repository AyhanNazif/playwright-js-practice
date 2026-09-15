const{expect} = require("@playwright/test");

class CartPage {

    constructor(page) {
        this.page = page;
        this.cartPageTitle = page.locator(".title");
        this.productName = page.locator(".inventory_item_name");
        this.productPrice = page.locator(".inventory_item_price");
        this.productQuantity = page.locator(".cart_quantity");
        this.removeButon = page.locator("#remove-sauce-labs-backpack");
        this.continueShoppingButton = page.locator("#continue-shopping");
        this.checkoutButton = page.locator("#checkout");
    }

    async CheckCartPageTitleIsVisible(title) {
        await expect(this.cartPageTitle).toBeVisible();
        await expect(this.cartPageTitle).toHaveText(title);
    }

    async CheckProductNameIsCorrect(name){
        await expect(this.productName).toHaveText(name);
    }

    async CheckProductPriceIsCorrect(price){
        await expect(this.productPrice).toHaveText(price);
    }

    async CheckProductQuantityIsCorrect(quantity){
        await expect(this.productQuantity).toHaveText(quantity);
    }

    async CheckContinueToShoppingButtonIsVisible(name) {
        await expect(this.continueShoppingButton).toBeEnabled();
        await expect(this.continueShoppingButton).toHaveText(name);
    }

    async CheckRemoveButtonIsVisible(name) {
        await expect(this.removeButon).toBeEnabled();
        await expect(this.removeButon).toHaveText(name);
    }

    async ClickCheckoutButton(name){
        await expect(this.checkoutButton).toBeEnabled();
        await expect(this.checkoutButton).toHaveText(name);
        await this.checkoutButton.click();
    }
}

module.exports = {CartPage}