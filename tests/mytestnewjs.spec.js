const { chromium } = require('playwright');

// npx playwright codegen -o tests/mytestnewjs.spec.js --target javascript
// You need to specify the language in which the code should be generated

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('manda user').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();