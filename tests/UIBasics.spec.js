const { test } = require("@playwright/test");

test("Browser context First Test case", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("Page context Test case", async ({ page }) => {
  //   const context = await browser.newContext();
  //   const page = await context.newPage();

  await page.goto("https://google.com");
});
