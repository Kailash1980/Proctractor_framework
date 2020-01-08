let loginPage = require('../pages/loginPage')
var object = require('../data/data.json')

describe('login into sslt portal', function () {

    it('Enter vald user name and password and than log-out from application', function () {
        loginPage.enterURL(object.url);
        browser.manage().window().maximize();
        loginPage.enterFirstName(object.username);
        loginPage.enterPassword(object.password);
        loginPage.clickSignIn();
        loginPage.verifyTitle();
        loginPage.clickLogut();
    });

});