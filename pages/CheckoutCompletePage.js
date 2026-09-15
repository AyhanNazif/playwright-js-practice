const {expect} = require('@playwright/test');

class CheckoutCompletePage{
    
    constructor(page){
        this.page = page;
        this.completeMessage = page.locator(".complete-header");
    }

    async VerifyCompleteMessage(message){
        await expect(this.completeMessage).toHaveText(message);
    }

}

module.exports = {CheckoutCompletePage}