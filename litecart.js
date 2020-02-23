const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('safari')
    .build();

driver.get('http://localhost/litecart/admin/')
    .then(_ =>
        driver.findElement(By.name('username')).sendKeys('admin', Key.TAB))
    .then(_ =>
        driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN))
    .then(_ => driver.wait(until.titleIs('My Store'), 1000))
    .then(_ => driver.sleep(5000))
    .then(_ => driver.quit());

