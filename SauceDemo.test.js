const{ test, chromium, expect } = require('@playwright/test');
const{HomePage} = require('./pages/HomePage');
const{InventoryPage} = require('./pages/InventoryPage');
const{CartPage} = require('./pages/CartPage');
const{CheckoutStepOne} = require('./pages/CheckoutStepOne');
const{CheckoutStepTwo} = require('./pages/CheckoutStepTwo');
const { CheckoutCompletePage } = require('./pages/CheckoutCompletePage');

let browser;
let context;
let page;
let homePage;
let inventoryPage
let cartPage;
let checkoutStepOne;
let checkoutStepTwo;
let checkoutCompletePage;

test.describe("e2e tests", () => {

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutStepOne = new CheckoutStepOne(page);
        checkoutStepTwo = new CheckoutStepTwo(page);
        checkoutCompletePage = new CheckoutCompletePage(page);
    });

    test.afterEach(async () => {
        await page.close();
        await context.close();
    });

    test.describe("Checkout test", () => {
        test("Checkout positive case", async () => {
           await homePage.Open();
           await homePage.CheckMainTitle("Swag Labs");
           await homePage.AddUsername("standard_user");
           await homePage.AddPassword("secret_sauce");
           await homePage.ClickLoginButton();
           await homePage.CheckLoginCredentialsAreNotVisible();
           await inventoryPage.CheckProductsTitleIsVisible("Products");
           await inventoryPage.CheckFirstProductName("Sauce Labs Backpack");
           await inventoryPage.CheckFirstProductPrice('$29.99');
           await inventoryPage.ClickAddToCartButton("Add to cart");
           await inventoryPage.CheckRemoveFromCartIsVisible("Remove");
           await inventoryPage.CheckShoppingCartBadge('1');
           await inventoryPage.ClickShoppingCart();
           await cartPage.CheckCartPageTitleIsVisible("Your Cart")  ;
           await cartPage.CheckProductNameIsCorrect("Sauce Labs Backpack");
           await cartPage.CheckProductPriceIsCorrect("$29.99");
           await cartPage.CheckProductQuantityIsCorrect("1");
           await cartPage.ClickCheckoutButton("Checkout");
           await checkoutStepOne.CheckCheckoutPageOneTitle("Checkout: Your Information");
           await checkoutStepOne.FillFirstNameField("Ayhan");
           await checkoutStepOne.FillLastNameField("Nazif");
           await checkoutStepOne.FillPostCodeField("7000");
           await checkoutStepOne.ClickContinueButton("Continue");
           await checkoutStepTwo.VerifyCheckoutOverviewTitle("Checkout: Overview");
           await checkoutStepTwo.VerifyFinalizeProductName("Sauce Labs Backpack");
           await checkoutStepTwo.VerifyFinalizeProductPrice("$29.99");
           await checkoutStepTwo.VerifyFinalizeProductQuantity("1");
           await checkoutStepTwo.VerifySubTotalPrice("Item total: $29.99");
           await checkoutStepTwo.VerifyTaxPrice("Tax: $2.40");
           await checkoutStepTwo.VerifyTotalPrice("Total: $32.39");
           await checkoutStepTwo.ClickFinishButton("Finish");
           await checkoutCompletePage.VerifyCompleteMessage("Thank you for your order!");
        });
    });
});
