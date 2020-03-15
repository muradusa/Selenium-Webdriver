const { Builder, By } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

// SELECT ELEMENTS BY ID AND NAME - INPUT FIELDS

async function simpleRegistration() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("12345");
        await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
}
simpleRegistration();

// SELECT ELEMENTS BY CSS SELECTORS

