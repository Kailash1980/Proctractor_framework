let loginPage = require('../pages/loginPage');

describe('login into sslt portal', function () {

    it('Enter vald user name and password', function () {

        browser.get('https://portal.ssat.org/Account/LogOn/');        
        browser.manage().window().maximize();
        loginPage.enterFirstName('john1970');
        loginPage.enterPassword('Test@123');
        loginPage.clickSignIn();
        loginPage.clickLogut();

    });

});