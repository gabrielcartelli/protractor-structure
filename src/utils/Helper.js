const { browser, element, by, ExpectedConditions } = require('protractor');

const defaultTimeout = 10000;
const fastTimeOut = 2000;

class Helper {
    // clica no elemento
    async click(selector) {
        const element = await this.getElement(selector);
        element.click();
    }

    // espera, pelo tempo definido em defaultTimeout, o elemento estar visível e então retorna ele
    async getElement(selector) {
        await browser.wait(ExpectedConditions.visibilityOf(element(by.css(selector))), defaultTimeout);
        return element(by.css(selector));
    }

    // retorna o valor de um atributo de um elemento
    async getAttributeElement(selector, attribute) {
        const element = await this.getElement(selector);
        const valueElement = await element.getAttribute(attribute)

        return valueElement;
    }

    // retorna o texto de um elemento
    async getTextElement(selector) {
        const element = await this.getElement(selector);
        const textElement = await element.getText();

        return textElement;
    }

    // simula o movimento do cursor em cima do elemento
    async hoverElement(selector) {
        const element = await this.getElement(selector)
        await browser.actions().mouseMove(element).perform();
    }

    // retorna true se elemento estiver visível e false se não estiver
    async visibleTest(selector) {
        try {
            await browser.wait(ExpectedConditions.visibilityOf(element(by.css(selector))), defaultTimeout);
            return true;
        } catch {
            return false;
        }
    }

    // espera elemento estar visível
    async waitVisibilityOfElement(selector) {
        await browser.wait(ExpectedConditions.visibilityOf(element(by.css(selector))), defaultTimeout);
    }
}

module.exports = new Helper();