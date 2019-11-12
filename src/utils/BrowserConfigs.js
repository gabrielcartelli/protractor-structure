const { browser } = require('protractor')

class BrowserConfigs {
    async configuraBrowser() {
        browser.ignoreSynchronization = true; // configura protractor para utilizar sites sem angular
        await browser.manage().window().maximize(); // maximiza browser
        await browser.driver.get(browser.baseUrl); // acessa site especificado em baseUrl no arquivo conf.js
    }
}

module.exports = new BrowserConfigs();