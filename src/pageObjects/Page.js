const elements = require('../elements/Elements');
const helper = require('../utils/Helper');

class Page {
    async clickButtonLogin() {
        await helper.click(elements.cssButtonLogin);
    }

    async getTextTitleLogin() {
        return await helper.getTextElement(elements.cssTitleLogin);
    }
}

module.exports = new Page();