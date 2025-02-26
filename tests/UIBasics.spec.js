const { test, expect } = require("@playwright/test");

test.only("Browser context First Test case", async ({ browser }) => {
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const password = page.locator("[type='password']");

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // css,xpath

  await userName.fill("rahulshettydemy");
  await password.fill("learning");
  await signIn.click();

  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  // Clear previous value with new one
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();
});
