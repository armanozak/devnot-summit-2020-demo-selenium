const { By, until } = require('selenium-webdriver');

const createElementGetter = driver => method => async (selector, timeout = 3000) => {
  const el = await driver.wait(until.elementLocated(By[method](selector)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

module.exports = {
  createSelector: driver => {
    const getElementBy = createElementGetter(driver);

    return {
      CSS: getElementBy('css'),
      Id: getElementBy('id'),
      Name: getElementBy('name'),
      XPath: getElementBy('xpath'),
    };
  },
};
