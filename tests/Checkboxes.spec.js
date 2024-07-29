import { test, expect } from "@playwright/test";

test("Handle Checkboxes", async ({ page }) => {
  await page.goto("https://demoqa.com/checkbox");

  await page.getByLabel("Expand all").click();
  await page.locator("//span[contains(text(),'Notes')]").check();

  await expect(await page.locator("//span[contains(text(),'Notes')]").isChecked()).toBeTruthy();
  await expect(await page.locator("//span[contains(text(),'WorkSpace')]").isChecked()).toBeFalsy();
});

test("Multiple checkboxes to be checked and unchecked again", async ({page}) => {
  
    // Multiple Checkboxes
  const checkboxLocators = [
    "//span[contains(text(),'Public')]", // Create an array of multiple checkboxes to be selected
    "//span[contains(text(),'Private')]",
    "//span[contains(text(),'Classified')]",
    "//span[contains(text(),'General')]",
    ];

  // use for loop to select the checkboxes
  for (const locator of checkboxLocators) {
    
    // Select multiple checkboxes
    await page.locator(locator).check();
  }
  await page.waitForTimeout(2000);



  // use for loop to Unselect the checkboxes
  for (const locator of checkboxLocators) {

    // UnSelect multiple checkboxes which are already selcted

    if (await page.locator(locator).isChecked);
    {
      await page.locator(locator).uncheck();
    }
  }
  await page.waitForTimeout(1000);
});