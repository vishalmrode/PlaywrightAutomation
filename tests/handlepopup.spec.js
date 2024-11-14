const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://example.com");
  // Click a link that opens a new tab
  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("text=Open in New Tab"),
  ]);

  // Interact with the new tab
  await newPage.waitForLoadState("networkidle");
  await newPage.fill('input[type="text"]', "Your text");
  await newPage.click('button[type="submit"]');

  // Close the new tab
  await newPage.close();

  await browser.close();
})();
