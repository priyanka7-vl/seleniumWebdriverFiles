const { Builder,By} = require("selenium-webdriver");
const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function links() {
    await driver.get('https://www.google.com/');
    const ret =  await driver.findElement(By.name("q"));
      ret.sendKeys("Selenium","\uE007");
    const res =  await driver.findElement(By.linkText("Selenium Tutorial for Beginners: Learn WebDriver in 7 Days")).getAttribute("href");
    console.log(res);
    // for(let result of res) {
    //     console.log(ret.get(i).getAttribute("href"));
    // }
//   ret.sendKeys("Selenium","\uE007");
//       const text = await ret.getText();
//       console.log(text);
}
links();
