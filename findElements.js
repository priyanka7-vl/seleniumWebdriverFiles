const { Builder} = require("selenium-webdriver");
const driver = new Builder()
    .forBrowser("firefox")
    .build();

(async function() {
    await driver.get('https://nodejs.org');
    let links = await driver.findElements({css:'nav > ul > li > a'});
    for(let link of links) {
        text = await link.getText();
        console.log(text);
    }
    return driver.quit();
})()