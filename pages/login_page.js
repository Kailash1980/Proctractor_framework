'use strict';
let loginpage = function () {

    var username_input = element(by.model('model.username'));
    var userpassword_input = element(by.model('model.password'));
    var login_button = element(by.css('.btn-primary'));
    var log_out = element(by.xpath("//a[.='Log Off']"));
    var step1_header = element(by.xpath("//p[contains(.,'Register for the SSAT in 6 simple steps! Read this page to be sure you have everything you need before you begin.')]"));
    var drop_down_SSAT = element(by.xpath("//a[contains(text(),'SSAT Testing')]"));
    var register_menu = element(by.linkText('Register for SSAT'));
    var get_start_button = element(by.css('#startReg'));
    var no_checkbox = element(by.css("[for='RequiresSpecialAccommodationsFalse']"));

    this.enterURL = function (url) {
        browser.get(url);
    }

    this.enterFirstName = function (enterUserName) {
        username_input.sendKeys(enterUserName);
    }

    this.enterPassword = function (enterPassword) {
        userpassword_input.sendKeys(enterPassword);
    }

    this.clickSignIn = function () {
        login_button.click();

    }
    this.clickLogut = function () {
        log_out.click();
    }


    this.verifyHeaderTextStep1 = function (headerText) {
        expect(step1_header.getText()).toContain(headerText);
    }

    this.verifyTitle = function () {
        var title = browser.getTitle().then(title => {
            expect(browser.getTitle()).toContain('SSAT - Student Access Portal - Home');
        })
    }

    this.clickOnSSATMenu = function (headerText) {
        drop_down_SSAT.click();
        register_menu.click();

    }
    this.clickOnGetStartedButton = function () {
        get_start_button.click();

    }

    this.verifyDefaultChckBoxValue = function () {
        expect(no_checkbox.isSelected()).toBe(false);

    }

};
module.exports = new loginpage();
