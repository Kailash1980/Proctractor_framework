// An example configuration file.
var HtmlScreenshotReporter = require('C:/Users/kailash.pathak/AppData/Roaming/npm/node_modules/protractor/node_modules/protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});
/*var reporter = new HtmlScreenshotReporter({
  captureOnlyFailedSpecs: true
});*/
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',

    chromeOptions: {
      args:['--headless']
    }
  },

  suites: {
    regression: ['../tests/example_spec.js','../tests/loginTest.js'],
    smoke: ['../tests/example_spec.js','../tests/loginTest.js']
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../tests/loginTest.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function () {
    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('C:/Users/kailash.pathak/AppData/Roaming/npm/node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
};