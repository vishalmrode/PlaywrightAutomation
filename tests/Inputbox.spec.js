import { test, expect } from "@playwright/test";
//const { test , expect }=require ('@playwright/test') ;

test("Handle Input Box", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(page.locator("#FirstName")).toBeVisible();
  await expect(page.locator("#FirstName")).toBeEmpty();
  await expect(page.locator("#FirstName")).toBeEditable();
  await expect(page.locator("#FirstName")).toBeEnabled();
  await page.locator("#FirstName").fill("Vishal");

  // await page.waitForTimeout(1000);

  await expect(page.locator("#LastName")).toBeVisible();
  await expect(page.locator("#LastName")).toBeEmpty();
  await expect(page.locator("#LastName")).toBeEditable();
  await expect(page.locator("#LastName")).toBeEnabled();
  await page.fill("#LastName", "QA");

  await page.waitForTimeout(5000);
});
