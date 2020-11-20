const fse = require('fs-extra');

module.exports = {
  createScreenshotTaker: driver => {
    return async screenshotPath => {
      const encodedString = await driver.takeScreenshot();
      const buffer = Buffer.from(encodedString, 'base64');
      await fse.ensureFileSync(screenshotPath);
      await fse.writeFile(screenshotPath, buffer);
    };
  },
};
