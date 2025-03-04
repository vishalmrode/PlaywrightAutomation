const { test, expect } = require("@playwright/test");

test("@Web Client App login", async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "test43rrp@gmail.com";
  const productName = "ADIDAS ORIGINAL";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Test@000!");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log("All Card titles are:", titles);

  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      console.log(`Found product: ${productName}`);

      // add item to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break; // Exit the loop once the product is added
    }
  }
  // Go to Cart page
  await page.locator("[routerlink*='cart']").click();
  // wait until the page is fully displayed
  await page.locator("div li").first().waitFor();
  //Verify the item name,which is added in cart
  const itemPresent = await page
    .locator("h3:has-text('ADIDAS ORIGINAL')")
    .isVisible();
  expect(itemPresent).toBeTruthy();
  console.log("The added items is present:", itemPresent);
});
