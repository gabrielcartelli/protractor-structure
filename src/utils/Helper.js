const { browser, element, by, ExpectedConditions } = require('protractor');

const defaultTimeout = 10000;
const fastTimeOut = 2000;

class Helper {
    // clica no elemento passado 
    async click(selector, type) {
        switch (type) {
            case 'xpath':
                const xpathElement = await this.getElement(selector, 'xpath');
                xpathElement.click();
                break;

            default:
                const element = await this.getElement(selector);
                element.click();
                break;
        }
    }

    // retorna true se elemento estiver visível e false se não estiver
    async fastTestVisible(selector) {
        try {
            await browser.wait(ExpectedConditions.visibilityOf(element(by.css(selector))), fastTimeOut);
            return true;
        } catch {
            return false;
        }
    }

    // retorna true se elemento não estiver visível e false se estiver
    async fastTestNotVisible(selector) {
        try {
            await browser.wait(ExpectedConditions.invisibilityOf(element(by.css(selector))), 250);
            return true;
        } catch {
            return false;
        }
    }

    // espera, pelo tempo definido em defaultTimeout, o elemento estar visível e então retorna ele
    async getElement(selector, type) {
        switch (type) {
            case 'xpath':
                await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath(selector))), defaultTimeout);
                return element(by.xpath(selector));

            default:
                await browser.wait(ExpectedConditions.visibilityOf(element(by.css(selector))), defaultTimeout);
                return element(by.css(selector));
        }
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

    // simula o movimento do cursor em cima do item passado por seletor
    async realizaHover(selector) {
        const element = await this.getElement(selector)
        await browser.actions().mouseMove(element).perform();
    }

    // remove o acento de um texto
    removeAcento(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }

    // retorna true se elemento estiver visível e false se não estiver com timeout de 10 segundos
    async testVisible(selector) {
        try {
            await browser.wait(ExpectedConditions.visibilityOf(element(by.css(selector))), defaultTimeout);
            return true;
        } catch {
            return false;
        }
    }

    // espera elemento estar visível
    async waitElementSerVisivel(selector, type) {
        switch (type) {
            case 'xpath':
                await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath(selector))), defaultTimeout);
                break;

            default:
                await browser.wait(ExpectedConditions.visibilityOf(element(by.css(selector))), defaultTimeout);
                break;
        }
    }
}

module.exports = new Helper();