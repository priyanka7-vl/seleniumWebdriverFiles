const {Builder,By,Keys} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

const driver = new Builder().forBrowser("firefox").build();
driver.get("https://www.google.com");
driver.findElement(By.name("q")).sendKeys("\uE035"); 