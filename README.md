# Playwright Automation

> **IMPORTANT**  
> Official Website: [Playwright](https://playwright.dev/docs/intro).

---

![Playwright Logo](https://playwright.dev/img/playwright-logo.svg)

## Table of Contents

1. [Playwright Architecture](#playwright-architecture)
2. [Playwright Installation](#playwright-installation)
   - [Prerequisites](#prerequisites)
   - [Install Playwright](#install-playwright)
3. [Install Cucumber](#install-cucumber)
4. [Run Playwright Tests](#run-playwright-tests)
5. [How to Create and Run Tests](#how-to-create-and-run-tests)
6. [Built-in Locators](#built-in-locators)
7. [Test Generator](#test-generator)
8. [Assertions](#assertions)
9. [Generate HTML Report](#generate-html-report)

---

## Playwright Architecture

![Playwright Architecture](https://cdn.prod.website-files.com/667144f11deb101986897c08/667144f11deb101986897e09_RH5oUf3qmBUEID5wf4txTFLVmgyBHt3UTZ7R6S4NsBREIjZDxr1in7_xIm-asTtCfBJ8v4x8pqJBx2VUoSeQl_rDT1RPE7gp_0LrwYnV7Gp-JFEocSC2c_uRwOuVYK7MFl5uoyI_Vaf5ZDie36A53zM.png)

1. A WebSocket connection request is sent from the client to the server.
2. If the configurational parameters are correct, the connection is accepted.
3. The server acknowledges the connection establishment to the client.
4. The test execution begins on the same connection.
5. All the test cases can use the same connection for their execution.
6. Once the execution is completed, the connection is disbanded.

---

## Playwright Installation

---

> **TIP**  
> [Quickstart for writing on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github).

### Prerequisites

1. Install **Node.js**.
2. Install **VS Code Editor**.
3. Create a project folder and open it in VS Code.

### Install Playwright

Run the following command in the terminal:

```bash
npm init playwright@latest
```

- **package.json**: Node project management file.
- **playwright.config.js**: Playwright configuration file.
- **tests**: Folder to write all Playwright tests.

Check Playwright version:

```bash
npm playwright -v
```

---

## Install Cucumber

1. Install Playwright BDD:
   ```bash
   npm i -D playwright-bdd
   ```
2. Install Cucumber:
   ```bash
   npm i -D @cucumber/cucumber@latest
   ```
3. Install Cucumber extension:
   - **Extension ID**: `alexkrechik.cucumberautocomplete`.

---

## Run Playwright Tests

| Command                        | Description   |
| :----------------------------- | :------------ |
| `npx playwright test`          | Headless Mode |
| `npx playwright test --headed` | Headed Mode   |

---

## How to Create and Run Tests

1. Create a new file under the `tests` folder.
2. Add the Playwright module:

   ```javascript
   const { test, expect } = require("@playwright/test");
   ```

   > **IMPORTANT**  
   > `test` and `expect` are functions from the `@playwright/test` module.  
   > Playwright Test provides a `test` function to declare tests and an `expect` function to write assertions.

3. Create a test block:

   ```
      import { test, expect } from '@playwright/test';

   test('has title', async ({ page }) => {
     await page.goto('https://playwright.dev/');

   // Verify that the page title contains the substring "Playwright" to ensure the correct page is loaded.
     await expect(page).toHaveTitle(/Playwright/);
   });
   ```

   - Use `async` before a function to make it return a promise.
   - Use `await` before a function to make it wait for a promise.

4. Run the test using the following commands:
   Here are the most common options available in the command line.
   Reference: [`Command Line`] (https://playwright.dev/docs/test-cli).

| Command                                                           | Description                                      |
| :---------------------------------------------------------------- | :----------------------------------------------- |
| `npx playwright test --project=chromium --headed example.spec.js` | Runs the file on a specific browser.             |
| `npx playwright test`                                             | Runs all tests on all browsers in headless mode. |
| `npx playwright test example.spec.js`                             | Runs a specific test file.                       |
| `npx playwright test example.spec.js MyTest2.spec.js`             | Runs the specified files.                        |
| `npx playwright test -g "test title"`                             | Runs tests with the specified title.             |
| `npx playwright test --project=chromium`                          | Runs tests on a specific browser.                |
| `npx playwright test --headed`                                    | Runs tests in headed mode.                       |
| `npx playwright test --debug`                                     | Runs tests in debug mode.                        |
| `npx playwright test example.spec.js --debug`                     | Debugs a specific test file.                     |
| `npx playwright test --reporter=list`                             | Displays test results in the terminal.           |
| `npx playwright test --ui`                                        | Opens Playwright in UI mode.                     |
| `npx playwright codegen`                                          | Opens the Playwright Record window.              |
| `npx playwright test --retries 2`                                 | Retries failed tests.                            |
| `npx playwright test tests/todo-page/ tests/landing-page/`        | Runs multiple tests.                             |
| `npx playwright test --grep @fast`                                | Runs tests with specific tags only.              |

---

## Built-in Locators

Playwright provides built-in locators for better test reliability.  
Reference: [Built-in Locators](https://playwright.dev/docs/locators).

| Locator                   | Description                                                                                  |
| :------------------------ | :------------------------------------------------------------------------------------------- |
| `page.getByRole()`        | Locate by explicit and implicit accessibility attributes.                                    |
| `page.getByText()`        | Locate by text content.                                                                      |
| `page.getByLabel()`       | Locate a form control by associated label's text.                                            |
| `page.getByPlaceholder()` | Locate an input by placeholder.                                                              |
| `page.getByAltText()`     | Locate an element, usually an image, by its text alternative.                                |
| `page.getByTitle()`       | Locate an element by its title attribute.                                                    |
| `page.getByTestId()`      | Locate an element based on its `data-testid` attribute (other attributes can be configured). |

---

## Test Generator

Playwright provides a test generator to record and generate tests.  
Reference: [Record Tests](https://playwright.dev/docs/codegen).

| Command                                                                | Description                                                         |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------ |
| `npx playwright codegen -b chromium`                                   | Runs the file on a specific browser.                                |
| `npx playwright codegen -o tests/filename.spec.js`                     | Creates a file with the specified name and adds the generated code. |
| `npx playwright codegen -o tests/filename.spec.js --target javascript` | Specifies the language for the generated code.                      |

---

## Assertions

Playwright includes test assertions using the `expect` function.  
Reference: [Assertions](https://playwright.dev/docs/test-assertions).

| Command                              | Description                                             |
| :----------------------------------- | :------------------------------------------------------ |
| `expect(page).toHaveURL()`           | Verifies the page has the specified URL.                |
| `expect(page).toHaveTitle()`         | Verifies the page has the specified title.              |
| `expect(locator).toBeVisible()`      | Verifies the element is visible.                        |
| `expect(locator).toBeEnabled()`      | Verifies the control is enabled.                        |
| `expect(locator).toBeChecked()`      | Verifies the radio/checkbox is checked.                 |
| `expect(locator).toHaveAttribute()`  | Verifies the element has the specified attribute.       |
| `expect(locator).toHaveText()`       | Verifies the element matches the specified text.        |
| `expect(locator).toContainText()`    | Verifies the element contains the specified text.       |
| `expect(locator).toHaveValue(value)` | Verifies the input has the specified value.             |
| `expect(locator).toHaveCount()`      | Verifies the list of elements has the specified length. |

## Generate HTML Report

```bash
npx playwright show-report
```
