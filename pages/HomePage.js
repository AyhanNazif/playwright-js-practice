const {expect} = require('@playwright/test')

class HomePage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button');
        this.title = page.locator('.login_logo');
        this.login_credentials = page.locator('#login_credentials');
    }

    async Open(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async CheckMainTitle(title){
        await expect(this.title).toHaveText(title);
    }

    async CheckLoginCredentialsAreNotVisible(){
        await expect(this.login_credentials).toBeHidden();
    }

    async AddUsername(user) {
       await this.username.fill(user);
    }

    async AddPassword(pass) {
        await this.password.fill(pass);
    }

    async ClickLoginButton(){
        await this.loginButton.click();
    }
}

module.exports = {HomePage}