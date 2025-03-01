const { test, expect } = require("@playwright/test");

test.only("Child window automation", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const documentLink = page.locator("[href*='documents-request']");
  await expect(documentLink).toHaveAttribute("class", "blinkingText");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // listen to any new page  States of promise: Pending,Fulfilled,rejected
    documentLink.click(),
  ]);

  const textNewPage = await newPage.locator(".im-para.red").textContent();
  console.log(textNewPage);
});
