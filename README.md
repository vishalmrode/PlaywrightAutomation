# Playwright Automation

[!IMPORTANT]
Official Website: [PlayWright](https://playwright.dev/docs/intro).

---

![image](https://playwright.dev/img/playwright-logo.svg)

# Playwright Architecture

![image](https://cdn.prod.website-files.com/667144f11deb101986897c08/667144f11deb101986897e09_RH5oUf3qmBUEID5wf4txTFLVmgyBHt3UTZ7R6S4NsBREIjZDxr1in7_xIm-asTtCfBJ8v4x8pqJBx2VUoSeQl_rDT1RPE7gp_0LrwYnV7Gp-JFEocSC2c_uRwOuVYK7MFl5uoyI_Vaf5ZDie36A53zM.png)

- A WebSocket connection request is sent from the client to the server.
- If the configurational parameters are correct, the connection is accepted.
- The server acknowledges the connection establishment to the client.
- The test execution begins on the same connection.
- All the test cases can use the same connection for their execution.
- Once the execution is completed, the connection is disbanded.

---

## Playwright Installation

---

[!TIP]
[Quickstart for writing on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github).

1. Nodejs
2. VS Code Editor
3. Create project folder and open it in VSCode

4. Install playwright using terminal
   - `npm init playwright@latest`

1) package.json --- node project management file
2) playwright.config.js --- playwright configuration
3) tests --- we can write all the playwright tests
4) Check Playwright Version
   - `npm playwright -v` //return installed version of playwright.
5) Update Playwright
   `npm install -D @playwright/test@latest`
   ### Also download new browser binaries and their dependencies:
   `npx playwright install --with-deps`

## Install Cucumber

1. Invoke BDD inside your machine
   - `npm i -D playwright-bdd`
2. Invoke Cucumber
   - `npm i -D @cucumber/cucumber@latest`
3. Install Cucumber extension
   - **Extension ID :** **alexkrechik.cucumberautocomplete**

### Run the playwright test

---

| Command                        | Description   |
| :----------------------------- | :------------ |
| `npx playwright test`          | Headless Mode |
| `npx playwright test --headed` | Headed Mode   |

### HTML report

---

`npx playwright show-report`

---

## How To Create and Run Tests

---

1. Create a new file under test folder
2. Add module ‘playwright/test’

   - const { test, expect } = require('@playwright/test');

   [!IMPORTANT]

   - test, expect ------ functions from @playwright/test module

   * Playwright Test provides a test function to declare tests and expect function to write assertions.

3. Create a test block - test(title, testFunction)

   - The keyword 'async' before a function makes the function return a promise

   * The keyword 'await' before a function makes the function wait for a promise

4. Run the test

   | Command                                                            | Description                                                |
   | :----------------------------------------------------------------- | :--------------------------------------------------------- |
   | `npx playwright test --project=chromium --headed  example.spec.js` | Runs the file on specific browser                          |
   | `npx playwright test`                                              | Runs all tests on all browsers in headless mode.           |
   | `npx playwright test  example.spec.js`                             | Runs a specific test file.                                 |
   | `npx playwright test  example.spec.js  MyTest2.spec.js`            | Runs the files specified.                                  |
   | `npx playwright test -g "test title"`                              | Runs test with the title.                                  |
   | `npx playwright test --project=chromium`                           | Runs on specific browser.                                  |
   | `npx playwright test --headed`                                     | Runs tests in headed mode.                                 |
   | `npx playwright test --debug`                                      | Run tests in debug mode.                                   |
   | `npx playwright test example.spec.js --debug`                      | Debug specific test file.                                  |
   | `npx playwright test --reporter=list`                              | It will show the test cases are passed/falied at terminal. |
   | `npx playwright test --ui`                                         | Playwright will be opened in UI mode.                      |
   | `npx playwright codegen`                                           | Playwright Record window will open.                        |
   | `npx playwright test --retries 2`                                  | Retry the failed tests                                     |
   | `npx playwright test tests/todo-page/ tests/landing-page/`         | Run multiple tests                                         |
   | `npx playwright test --grep @fast`                                 | Run the tests with specific tags only                      |

5. Built In Locators

   These are the recommended built in locators: [Built In](https://playwright.dev/docs/locators).

   | Locator                   | Description                                                                                   |
   | :------------------------ | :-------------------------------------------------------------------------------------------- |
   | `page.getByRole() `       | To locate by explicit and implicit accessibility attributes.                                  |
   | `page.getByText()`        | To locate by text content.                                                                    |
   | `page.getByLabel()`       | to locate a form control by associated label's text.                                          |
   | `page.getByPlaceholder()` | To locate an input by placeholder.                                                            |
   | `page.getByAltText()`     | To locate an element, usually image, by its text alternative.                                 |
   | `page.getByTitle()`       | To locate an element by its title attribute.                                                  |
   | `page.getByTestId()`      | To locate an element based on its data-testid attribute (other attributes can be configured). |

6. Test Generator

   Some of the commands are as below: [Record Tests](https://playwright.dev/docs/codegen).

   | Command                                                                | Description                                                              |
   | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
   | `npx playwright codegen -b chromium `                                  | Runs the file on specific browser.                                       |
   | `npx playwright codegen -o tests/filename.spec.js`                     | This will create the file with given name and the code will added to it. |
   | `npx playwright codegen -o tests/filename.spec.js --target javascript` | Specify the language in which the code should be generated.              |

7. Assertions

   Playwright includes test assertions in the form of expect function. Some of the commonly used are mentioned below.
   Reference: [Assertions](https://playwright.dev/docs/test-assertions).

   | Command                              | Description                        |
   | :----------------------------------- | :--------------------------------- |
   | `expect(page).toHaveURL()`           | Page has URL.                      |
   | `expect(page).toHaveTitle()`         | Page has title.                    |
   | `expect(locator).toBeVisible()`      | Element is visible.                |
   | `expect(locator).toBeEnabled()`      | Control is enabled.                |
   | `expect(locator).toBeChecked()`      | Radio/Checkbox is checked.         |
   | `expect(locator).toHaveAttribute()`  | Element has attribute.             |
   | `expect(locator).toHaveText()`       | Element matches text.              |
   | `expect(locator).toContainText()`    | Element contains text.             |
   | `expect(locator).toHaveValue(value)` | Input has a value.                 |
   | `expect(locator).toHaveCount()`      | List of elements has given length. |
