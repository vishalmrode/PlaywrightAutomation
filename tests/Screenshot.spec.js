import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
 await page.goto('https://demo.opencart.com/')
 await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png'})
 await page.waitForTimeout(5000);
});

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
    await page.waitForTimeout(5000);
});

test('Element screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({ path:'tests/screenshots/'+Date.now()+'Macbook.png'})
    await page.waitForTimeout(5000);
});