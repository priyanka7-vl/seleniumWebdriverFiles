const {Builder,By} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function flightRegistration() {
try {
        await driver.get("http://newtours.demoaut.com/");
        await driver.findElement(By.name("userName")).sendKeys("kalptest");
        await driver.findElement(By.name("password")).sendKeys("kalptest");
        await driver.findElement(By.name("login")).click();

        await driver.findElement(By.xpath("//input[@value='roundtrip']")).click();
        await driver.findElement(By.xpath(`//select[@name='passCount']/option[@value="1"]`)).click();
        await driver.findElement(By.xpath(`//select[@name='fromPort']/option[@value="San Francisco"]`)).click();
        await driver.findElement(By.xpath(`//select[@name='fromMonth']/option[@value="2"]`)).click();
        await driver.findElement(By.xpath(`//select[@name='fromDay']/option[@value="7"]`)).click();
        await driver.findElement(By.xpath(`//select[@name='toPort']/option[@value="New York"]`)).click();
        await driver.findElement(By.xpath(`//select[@name='toMonth']/option[@value="4"]`)).click();
        await driver.findElement(By.xpath(`//select[@name='toDay']/option[@value="24"]`)).click();
        await driver.findElement(By.xpath("//input[@value='Coach']")).click();
        await driver.findElement(By.xpath(`//select[@name='airline']/option[text()="Blue Skies Airlines"]`)).click();
        await driver.findElement(By.name("findFlights")).click();

        await driver.findElement(By.xpath("//input[@value='Blue Skies Airlines$361$271$7:10']")).click();
        await driver.findElement(By.xpath("//input[@value='Pangea Airlines$632$282$16:37']")).click();
        await driver.findElement(By.name("reserveFlights")).click();

        await driver.findElement(By.name("passFirst0")).sendKeys("Kalp");
        await driver.findElement(By.name("passLast0")).sendKeys("Shah");
        await driver.findElement(By.xpath(`//select[@name='pass.0.meal']/option[@value="VGML"]`)).click();
        await driver.findElement(By.xpath(`//select[@name='creditCard']/option[@value="IK"]`)).click();
        await driver.findElement(By.name("creditnumber")).sendKeys("08923781947");
        const exp_dt = await driver.findElement(By.xpath(`//select[@name='cc_exp_dt_mn']//option[contains(text(),'04')]`));
        await exp_dt.click();
        await driver.findElement(By.xpath(`//select[@name = 'cc_exp_dt_yr']/option[@value="2007"]`)).click();
        await driver.findElement(By.name("cc_frst_name")).sendKeys("Kalp");
        await driver.findElement(By.name("cc_mid_name")).sendKeys("Khan");
        await driver.findElement(By.name("cc_last_name")).sendKeys("Shah");
        await driver.findElement(By.name("billAddress1")).clear();
        await driver.findElement(By.name("billAddress1")).sendKeys("304-AD Borneas Society");
        await driver.findElement(By.name("billAddress2")).sendKeys("Avenue park street");
        await driver.findElement(By.name("billCity")).clear();
        await driver.findElement(By.name("billCity")).sendKeys("Mount Valley");
        await driver.findElement(By.name("billState")).clear();
        await driver.findElement(By.name("billState")).sendKeys("NY");
        await driver.findElement(By.name("billZip")).clear();
        await driver.findElement(By.name("billZip")).sendKeys("97085");
        await driver.findElement(By.xpath(`//select[@name='billCountry']/option[@value="215"]`)).click();
        await driver.findElement(By.xpath("//input[@value='checkbox']")).click();
        await driver.findElement(By.name("delAddress1")).clear();
        await driver.findElement(By.name("delAddress1")).sendKeys("304-AD Borneas Society");
        await driver.findElement(By.name("delAddress2")).sendKeys("Avenue park street");
        await driver.findElement(By.name("delCity")).clear();
        await driver.findElement(By.name("delCity")).sendKeys("Mount Valley");
        await driver.findElement(By.name("delState")).clear();
        await driver.findElement(By.name("delState")).sendKeys("NY");
        await driver.findElement(By.name("delZip")).clear();
        await driver.findElement(By.name("delZip")).sendKeys("97085");
        await driver.findElement(By.xpath(`//select[@name='delCountry']/option[@value="215"]`)).click();
        await driver.findElement(By.name("buyFlights")).click();
      //await driver.findElement(By.xpath("//img[@src='/images/forms/Logout.gif']")).click();
    } catch(error) {
        console.log(error);
    }
}
flightRegistration();