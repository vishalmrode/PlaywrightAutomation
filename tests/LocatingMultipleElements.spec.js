import { test, expect } from "@playwright/test";

test("Capture all elements", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  //Locate all the elemts from home page

  await page.waitForSelector("a"); // will wait till the selector is loaded/visible
  const elements = await page.$$("a"); //Finding elements with anchor tag
  for (const link of elements) {
    const linktext = await link.textContent();
    console.log(linktext);
  }

  //Locate All the products on home page

  await page.waitForSelector("//div[@id='tbodyid']//div//h4//a"); // will wait till the selector is loaded/visible
  const products = await page.$$("//div[@id='tbodyid']//div//h4//a"); //Finding elements with h4
  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
});
