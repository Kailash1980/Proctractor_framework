var loginpage = require('../pages/login_page.js');
var object = require('../data/data.json');

describe('SSLT Registration portal', function () {

    // User Log-In
    it('TC #1 - To Verify user able to login from application and verify page title', function () {
        loginpage.enterURL(object.url);
        browser.manage().window().maximize();
        loginpage.enterFirstName(object.username);
        loginpage.enterPassword(object.password);
        loginpage.clickSignIn();
        loginpage.verifyTitle();
    });

    //Click on Menu SSAT Testing
    it('TC #2 - To verify when user click on SSAT testing drop down menu -> Register for SSAT sub menu ,step 1 of registration form', function () {
        loginpage.clickOnSSATMenu();
    });

    it('TC #3 - To verify user move to Next sub-page (Test Accommodations) of step 1 after clicking on Let Get Strated button', function () {
        loginpage.clickOnGetStartedButton();
    });

    
    it('TC #4 - To verify By default "No" chek Box is selected in (Test Accommodations) Sub-page of step 1', function () {
        loginpage.verifyDefaultChckBoxValue();
    });

    //User Log-out from the Application
    it('TC # - To verify user able to log-out from the application', function () {
        loginpage.clickLogut();
    });

});