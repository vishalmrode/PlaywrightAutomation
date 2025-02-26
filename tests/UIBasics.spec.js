const { test, expect } = require("@playwright/test");

test.only("Browser context First Test case", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // css,xpath

  await page.locator("#username").fill("rahulshettydemy");
  await page.locator("[type='password']").fill("learning");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
});

test("Page context Test case", async ({ page }) => {
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
