import { test, expect } from "@playwright/test";

test("Handle dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Multiple ways to select option from the dropdown
  await page.locator("#country").selectOption({ label: "India" }); //label
  await page.waitForTimeout(1000);
  await page.locator("#country").selectOption("India"); //visible text
  await page.locator("#country").selectOption({ value: "uk" }); // by using value
  await page.locator("#country").selectOption({ index: 1 }); // by using index
  await page.selectOption("#country", "India"); //by text
});
