import { test, expect } from "@playwright/test";

test("Handle Radio Buttons", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  // radio button
  await page.locator("#gender-male").check();
  //await page.check("#gender-male");
  await expect(await page.locator("#gender-male")).toBeChecked();
  await expect(await page.locator("#gender-male").isChecked()).toBeTruthy(); //isChecked() will return value true

  //negative test case for not checked
  await expect(await page.locator("#gender-female").isChecked()).toBeFalsy(); //isChecked() will return value true and toBeFalsy will verify
});
