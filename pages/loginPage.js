let loginpage = function () {

    let username_input = element(by.model('model.username'));
    let userpassword_input = element(by.model('model.password'));
    let login_button = element(by.css('.btn-primary'));
    let log_out = element(by.xpath("//a[.='Log Off']"));


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

    this.verifyTitle = function () {
        var title = browser.getTitle().then(title => {
            //console.log("The Page title is " + title);
            expect(browser.getTitle()).toContain('SSAT - Student Access Portal - Home');
        })
    }

};
module.exports = new loginpage();
