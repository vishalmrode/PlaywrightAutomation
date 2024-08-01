import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.etmoney.com/tools-and-calculators/sip-calculator');
  await page.locator('#myRange').fill('7400');
  await page.locator('#myRange_duration').fill('10');
  await page.locator('#myRange_interest').fill('14.5');
  await page.getByText('11.12 Lacs').click();
});