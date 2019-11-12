const { expect } = require('chai').use(require('chai-as-promised'));

const page = require('../src/pageObjects/Page');
const browser = require('../src/utils/BrowserConfigs');

describe('Realizar login', () => {
    beforeEach(async () => {
        await browser.configuraBrowser();
    })

    it('com dados válidos', async () => {
        await page.clickButtonLogin();
        expect(await page.getTextTitleLogin()).to.be.equal('Login')
    })
})