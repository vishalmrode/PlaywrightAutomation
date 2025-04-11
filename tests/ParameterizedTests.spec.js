const { test, expect } = require("@playwright/test");
//This won't work. just for understanding purpose
// Dummy user data for parameterized testing
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

test.describe("Parameterized Login Tests", () => {
  users.forEach((user) => {
    test(`Login test for ${user.username}`, async ({ page }) => {
      // Navigate to a dummy login page
      await page.goto(
        "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
      );

      // Fill in the login form
      await page.fill("#username", user.username);
      await page.fill("#password", user.password);

      // Click the login button
      await page.click("#loginButton");

      // Assert that the user is redirected to the dashboard or sees a success message
      await expect(page).toHaveURL(
        "https://ecommerce-playground.lambdatest.io/dashboard"
      );
      await expect(page.locator("#welcomeMessage")).toContainText(
        `Welcome, ${user.username}`
      );
    });
  });
});
