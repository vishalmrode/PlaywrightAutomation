const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://groww.in/calculators/home-loan-emi-calculator');
  await page.getByRole('slider').first().click();
  await page.locator('.cis93InputDiv').first().click();
  await page.getByRole('slider').nth(1).click();
  await page.locator('div:nth-child(2) > .slider24Wrapper > div:nth-child(2)').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();