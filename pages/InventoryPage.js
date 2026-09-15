const {expect} = require('@playwright/test');

class InventoryPage {

    constructor(page) {
        this.page = page
        this.productsTitle = page.locator('span.title');
        this.firstProduct = page.locator('.inventory_item').first();
        this.firtstProductName = this.firstProduct.locator('.inventory_item_name ');
        this.firstProductPrice = this.firstProduct.locator('.inventory_item_price');
        this.addToCartButton = this.firstProduct.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartButton = page.locator('.shopping_cart_link');
        this.shoppingCartBadge = page.locator(".shopping_cart_badge");
        this.removeFromCartButton = page.locator("#remove-sauce-labs-backpack");
    }

    async CheckProductsTitleIsVisible(title) {
        await expect(this.productsTitle).toBeVisible();
        await expect(this.productsTitle).toHaveText(title);
    }

    async CheckFirstProductName(name) {
        await expect(this.firtstProductName).toBeVisible();
        await expect(this.firtstProductName).toHaveText(name);
    }

    async CheckFirstProductPrice(price) {
        await expect(this.firstProductPrice).toBeVisible();
        await expect(this.firstProductPrice).toHaveText(price);
    }

    async CheckAddToCartButtonIsVisible(name){
        await expect(this.addToCartButton).toHaveText(name);
    }

    async ClickAddToCartButton(){
        await expect(this.addToCartButton).toBeEnabled();
        await this.addToCartButton.click();
    }

    async CheckRemoveFromCartIsVisible(name) {
        await expect(this.removeFromCartButton).toBeEnabled();
        await expect(this.removeFromCartButton).toHaveText(name);
    }

    async CheckShoppingCartBadge(count) {
        await expect(this.shoppingCartBadge).toHaveText(count);
    }

    async ClickShoppingCart(){
        await expect(this.shoppingCartButton).toBeEnabled();
        await this.shoppingCartButton.click();
    }
}

module.exports = {InventoryPage}