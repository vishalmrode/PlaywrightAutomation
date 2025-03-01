const { test, expect } = require("@playwright/test");

test("Child window automation", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const documentLink = page.locator("[href*='documents-request']");
  await expect(documentLink).toHaveAttribute("class", "blinkingText");

  const [newPage] = await Promise.all([
    // we can also use newPage2,newPage3 for other child windows to automate
    context.waitForEvent("page"), // listen to any new page  States of promise: Pending,Fulfilled,rejected
    documentLink.click(),
  ]);

  const textNewPage = await newPage.locator(".im-para.red").textContent();
  console.log(textNewPage);

  const arrayText = textNewPage.split("@");
  const domain = arrayText[1].split(".")[0];
  console.log(domain);
  await page.locator("#username").fill(domain);
  await page.pause();
  console.log(await page.locator("#username").textContent());
});
