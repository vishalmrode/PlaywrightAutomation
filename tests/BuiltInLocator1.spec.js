import { test, expect } from "@playwright/test";

test("Playwright built in locators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");

  await page.getByLabel("Check me out if you Love IceCreams!").check();
  await page.getByLabel("Employed").check();
  await page.getByLabel("gender").selectOption("Male");
  await page.getByPlaceholder("Password").fill("123456");

  await page.getByRole("button", { name: "Submit" }).click();
  await page
    .getByText("Success! The Form has been submitted successfully.")
    .isVisible();

  await page.getByRole("link", { name: "Shop" }).click();

  await page
    .locator("app-card")
    .filter({ hasText: "Blackberry" })
    .first()
    .click();
});
