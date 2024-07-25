# Playwright Automation

![image](https://miro.medium.com/v2/resize:fit:640/format:webp/1*qsVbAwEINjfgaGe2SuK3oQ.png)

[!IMPORTANT]
Official Website: [PlayWright](https://playwright.dev/docs/intro).
-----------------  

-----------------------------------------------------------------------------------------
## Playwright Installation
-----------------------------------------------------------------------------------------
[!TIP]
[Quickstart for writing on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github).

1) <span style="color: blue;"> Nodejs </span>
2) <span style="color: blue;"> VS Code Editor </span> 
3) <span style="color: blue;"> Create project folder  and  open it in VSCode </span> 

4) <span style="color: blue;">Install playwright  using terminal</span> 
      + `npm init playwright@latest`

  1. package.json           ---  node project management file
  2. playwright.config.js   ---  playwright configuration
  3. tests                  ---  we can write all the playwright tests
  4. Check Playwright Version
      + `npm playwright -v`     //return installed version of playwright.

## Install Cucumber 
  1) Invoke BDD inside your machine
      + `npm i -D playwright-bdd`
  2) Invoke Cucumber
      + `npm i -D @cucumber/cucumber@latest`
  3) Install Cucumber extension 
      + __Extension ID :__ **alexkrechik.cucumberautocomplete**

### Run the playwright test
-----------
  | Command | Description |
  | :--- | :--- |
  | `npx playwright test`| Headless Mode |
  | `npx playwright test --headed`| Headed Mode |

### HTML report
-------------
  `npx playwright show-report`

-------------------------------------------------------------------------------------------
## How To Create and Run Tests 
-------------------------------------------------------------------------------------------
1) Create a new file under test folder
2) Add module ‘playwright/test’
      + const { test, expect } = require('@playwright/test');
    
    [!IMPORTANT]
      + test, expect  ------ functions from @playwright/test module
      * Playwright Test provides a test function to declare tests and expect function to write assertions.

3) Create a test block - test(title, testFunction)

    + The keyword 'async' before a function makes the function return a promise
    * The keyword 'await' before a function makes the function wait for a promise

4) Run the test

    | Command | Description |
    | :--- | :--- |
    | `npx playwright test --project=chromium --headed  example.spec.js` | Runs the file on specific browser |
    | `npx playwright test` | Runs all tests on all browsers in headless mode. |
    | `npx playwright test  example.spec.js` | Runs a specific test file. |
    | `npx playwright test  example.spec.js  MyTest2.spec.js`| Runs the files specified. |
    | `npx playwright test -g "test title"` | Runs test with the title. |
    | `npx playwright test --project=chromium` | Runs on specific browser. |
    | `npx playwright test --headed`| Runs tests in headed mode. |
    | `npx playwright test --debug`| Run tests in debug mode. |
    | `npx playwright test example.spec.js --debug` | Debug specific test file. |
    | `npx playwright test --reporter=list` |  It will show the test cases are passed/falied at terminal. |
    | `npx playwright test --ui` | Playwright will be opened in UI mode. |
    | `npx playwright codegen` | Playwright Record window will open. |
