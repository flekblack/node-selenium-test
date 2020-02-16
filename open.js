const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('safari')
    .build();

driver.get('http://www.google.com/ncr')
    .then(_ =>
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then(_ => driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000))
    .then(_ => driver.quit());

