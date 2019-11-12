exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/*.js'],
    baseUrl: 'https://cwi.com.br/'
}