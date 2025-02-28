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

test.only("Radio buttons selection", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const password = page.locator("[type='password']");
  const dropDown = page.locator("select.form-control ");

  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  await page.locator(".radiotextsty").last().click();

  //Select the radio button
  console.log(
    "The Radio button is checked?",
    await page.locator(".radiotextsty").last().isChecked()
  );
  await expect(page.locator(".radiotextsty").last()).toBeChecked(); // if the radio button is checked

  await page.locator("#okayBtn").click();
  await dropDown.selectOption("consult");
  await page.waitForTimeout(3000);

  // Check the terms agreement
  await page.locator("#terms").click();
  await expect(page.locator("#terms").isChecked).toBeTruthy();
  //click on signin
  await signIn.click();
});
