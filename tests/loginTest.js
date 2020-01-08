let loginPage = require('../pages/loginPage')
var object = require('../data/data.json')

describe('login into sslt portal', function () {

    it('Enter vald user name and password', function () {
        browser.get('https://portal.ssat.org/Account/LogOn');
        browser.manage().window().maximize();
        loginPage.enterFirstName(object.username);
        loginPage.enterPassword(object.password);
        loginPage.clickSignIn();
        loginPage.clickLogut();

    });

});