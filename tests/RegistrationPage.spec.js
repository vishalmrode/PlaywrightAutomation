const { test, expect } = require("@playwright/test");

test("Registration Page Signup", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Declaring all the fields as variables for use

  const firstName = page.locator("#firstName");
  const lastName = page.locator("#lastName");
  const userEmail = page.locator("#userEmail");
  const UserMobile = page.locator("#userMobile");
  const password = page.locator("#userPassword");
  const confirmPassword = page.locator("#confirmPassword");
  const checkBox = page.locator("(//input[@type='checkbox'])"); // will use index to get the last value which is checkbox
  const registerButton = page.locator("#login"); //used class to get the locator
  const successMessage = page.locator(".headcolor");

  await page.goto("https://rahulshettyacademy.com/client/");
  await page.waitForTimeout(4000);
  await page.locator(".text-reset").click();
  console.log("The Title of page is:", await page.title());
  await expect(page).toHaveTitle("Let's Shop");

  //Register User
  await firstName.fill("ABCDEFGHIJ");
  await lastName.fill("testing");
  await userEmail.fill("test43rrp@gmail.com");
  await UserMobile.fill("4444444455");
  await password.fill("Test@000!");
  await confirmPassword.fill("Test@000!");
  await checkBox.check();
  await registerButton.click();

  await page.waitForTimeout(4000);
  console.log("The success message is:", await successMessage.textContent());
  await expect(successMessage).toContainText("Account Created Successfully");
  await page.waitForTimeout(4000);
});

test.only("Login to the page", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const userEmail = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const registerButton = page.locator("#login");
  const cardTitles = page.locator(".card-body h5");

  await page.goto("https://rahulshettyacademy.com/client");

  console.log("The Title of page is:", await page.title());
  await expect(page).toHaveTitle("Let's Shop");

  await userEmail.fill("test43rrp@gmail.com");
  await password.fill("Test@000!");
  await registerButton.click();
  await page.waitForTimeout(4000);

  //get title of the first card
  console.log(
    "The first card title is:",
    await cardTitles.first().textContent()
  );
  const allTitles = await cardTitles.allTextContents();
  console.log("All Card titles are:", allTitles);
});
