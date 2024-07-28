import { test, expect } from "@playwright/test";

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

test("Build in Locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // page.getByAltText() to locate an element, usually image, by its text alternative.

  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // page.getByPlaceholder() to locate an input by placeholder.

  const userName = await page.getByPlaceholder("Username").fill("Admin");
  const password = await page.getByPlaceholder("Password").fill("admin123");

  // page.getByRole() to locate by explicit and implicit accessibility attributes.

  await page.getByRole("button", { type: "submit" }).click();

// page.getByText() to locate by text content.

await expect (await page.getByText('manda user')).toBeVisible();


});
