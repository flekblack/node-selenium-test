var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var firefox = require('selenium-webdriver/firefox');


var options = new firefox.Options().setBinary(firefox.Channel.NIGHTLY);

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();


driver.get('http://www.google.com/ncr')
    .then(_ => driver.sleep(5000))
    .then(_ => driver.quit());
