const { Builder } = require('selenium-webdriver');
const { createScreenshotTaker } = require('../utils/screenshot');
const { createSelector } = require('../utils/selectors');
const homepage = 'https://www.selenium.dev/';

describe('Selenium.dev', () => {
  let driver, selectBy, takeScreenshot;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('safari').build();
    selectBy = createSelector(driver);
    takeScreenshot = createScreenshotTaker(driver);
  });

  afterAll(async () => await driver.quit());

  it('should navigate to Selenium documentation page', async () => {
    await driver.get(homepage);
    (await selectBy.Id('dropdownButton')).click();
    (await selectBy.XPath('//*[@id="navbar"]/a[@href="/documentation"]')).click();
    await selectBy.CSS('#the-selenium-browser-automation-project');
    await takeScreenshot('./screenshots/demo.png');
  });
});
