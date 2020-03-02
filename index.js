const {Builder,By} = require("selenium-webdriver");
async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.google.com/");
  const ret =  await driver.findElement(By.name("q"));
  ret.sendKeys("Selenium","\uE007");
}
example();