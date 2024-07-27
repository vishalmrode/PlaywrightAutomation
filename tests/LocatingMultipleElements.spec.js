import { test, expect } from "@playwright/test";

test("Capture all elements", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  const elements = await page.$$("a");
  for (const link of elements) {
    const linktext = await link.textContent();
    console.log(linktext);
  }

  await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");
  const products = await page.$$("//div[@id='tbodyid']//div//h4//a");
  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
});
