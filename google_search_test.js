// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/**
 * @fileoverview An example test that may be run using Mocha.
 *
 * This example uses the `selenium-webdriver/testing.suite` function, which will
 * automatically run tests against every available WebDriver browser on the
 * current system. Alternatively, you may use the `SELENIUM_BROWSER`
 * environment variable to narrow the scope at runtime.
 *
 * Usage:
 *
 *     # Automatically determine which browsers to run against.
 *     mocha -t 10000 selenium-webdriver/example/google_search_test.js
 *
 *
 *         mocha -t 10000 selenium-webdriver/example/google_search_test.js
 */

const assert = require('assert');

//SELENIUM_BROWSER=chrome;

const {Browser, By, Key, until} = require('selenium-webdriver');
const {ignore, suite} = require('selenium-webdriver/testing');


suite(function(env)
{
  describe('Google Search', function() {
    let driver;

    before(async function() {
      // env.builder() returns a Builder instance preconfigured for the
      // envrionment's target browser (you may still define browser specific
      // options if necessary (i.e. firefox.Options or chrome.Options)).
      driver = await env.builder().build();
    });

    it('demo', async function() {
      await driver.get('https://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000);
    });

    // The ignore function returns wrappers around describe & it that will
    // suppress tests if the provided predicate returns true. You may provide
    // any synchronous predicate. The env.browsers(...) function generates a
    // predicate that will suppress tests if the  env targets one of the
    // specified browsers.
    //
    // This example is always configured to skip Chrome.
    ignore(env.browsers(Browser.CHROME)).it('demo 2', async function() {
      await driver.get('https://www.google.com/ncr');
      await driver.wait(until.urlIs('https://www.google.com/'), 1500);
    });

    after(() => driver && driver.quit());
  });
});

//
//
// /**
//  * @fileoverview An example test that may be run using Mocha.
//  * Usage: mocha -t 10000 selenium-webdriver/example/google_search_test.js
//  */
//
// var webdriver = require('selenium-webdriver'),
//     chrome = require('selenium-webdriver/chrome'),
//     By = webdriver.By,
//     until = webdriver.until,
//     test = require('selenium-webdriver/testing');
//
// test.describe('Google Search', function() {
//   var driver;
//
//   test.before(function() {

//     var options = new chrome.Options();
//     options.addArguments(["start-fullscreen"]);
//
//     driver = new webdriver.Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(options)
//         .build();
//     driver.getCapabilities().then(function(caps) {
//       console.log(caps);
//     });
//   });
//
//   test.it('should append query to title', function() {
//     driver.get('http://www.google.com');
//     driver.findElement(By.name('q')).sendKeys('webdriver');
//     driver.findElement(By.name('btnG')).click();
//     driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000);
//   });
//
//   test.after(function() {
//     driver.quit();
//   });
// });