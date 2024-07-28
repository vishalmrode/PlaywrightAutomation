import { test, expect } from "@playwright/test";

test("Assertions test", async ({ page }) => {
  // open URL

  await page.goto("https://demo.nopcommerce.com/register");

  // expect(page).toHaveURL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // expect(page).toHaveTitle()

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // expect(locator).toBeVisible()

  const logoElement = page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  // expect(locator).toBeEnabled()
  const searchBox = await page.locator("#small-searchterms");
  await expect(searchBox).toBeEnabled();

  // expect(locator).toBeChecked()
  const maleGender = await page.locator("#gender-male");
  await maleGender.click(); // Check the radio button
  await expect(maleGender).toBeChecked();

  // Check box
   const newsLettercheckbox=await page.locator('#Newsletter');
   await expect(newsLettercheckbox).toBeChecked();

});
