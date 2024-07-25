import { test, expect } from '@playwright/test';

test('Verify the login and order placement from demo site', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('vishal777');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Nokia777!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total:').click();
  await page.getByLabel('Total:').fill('vishal');
  await page.getByLabel('Total:').press('Tab');
  await page.getByLabel('Country:').fill('india');
  await page.getByLabel('Country:').press('Tab');
  await page.getByLabel('City:').fill('pune');
  await page.getByLabel('City:').press('Tab');
  await page.getByLabel('Credit card:').fill('4321323232333');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('05');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('30');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});