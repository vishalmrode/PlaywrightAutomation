import { test, expect, devices } from '@playwright/test';

// npx playwright codegen -o tests/mytestnewdevice.spec.js  --device "iPhone 13"

test.use({
  ...devices['iPhone 13'],
});

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'manda user' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});