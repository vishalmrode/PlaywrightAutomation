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
      console.log(
        `Name of the desired product found from all the products is: ${productName}`
      );

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
  console.log("The added items are present in cart:", itemPresent);

  // Checkout the item
  await page.locator("text=Checkout").click();

  //you should use locator.fill() instead. You only need to press keys one by one if there is special keyboard handling on the page.
  await page.locator("[placeholder*='Country']").pressSequentially("ind");
  const dynamicDropdown = page.locator(
    ".ta-results.list-group.ng-star-inserted"
  );
  await dynamicDropdown.waitFor();
  const optionsCount = dynamicDropdown.locator("button").count();
  for (let i = 0; i < optionsCount; ++i) {
    const text = await dynamicDropdown.locator("button").nth(i).textContent();
    if (text === " India") {
      // click the option
      await dynamicDropdown.locator("button").nth(i).click();
      break;
    }
  }
  await page.pause();
});
