import { test, expect } from "@playwright/test";

// You can add not after assertions for negative test cases

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
  const newsLettercheckbox = await page.locator("#Newsletter");
  await expect(newsLettercheckbox).toBeChecked();

  // expect(locator).toHaveAttribute()
  const regButton = await page.locator("#register-button");
  await expect(regButton).toHaveAttribute("type", "submit");

  //expect(locator).toHaveText()
  await expect(await page.locator("div[class='page-title'] h1")).toHaveText(
    "Register"
  );

  //expect(locator).toContainText()
  await expect(await page.locator("div[class='page-title'] h1")).toContainText(
    "Reg"
  );

  //expect(locator).toHaveValue(value)
  const emailInput = await page.locator("#Email");
  await emailInput.fill("test@test.com");
  await expect(emailInput).toHaveValue("test@test.com");

  //expect(locator).toHaveCount()
  const birthDay = await page.locator("select[name='DateOfBirthDay'] option");
  await expect(birthDay).toHaveCount(32);
});
