# Playwright Automation

-----------------------------------------------------------------------------------------
## Playwright Installation `#0969DA`
-----------------------------------------------------------------------------------------
[!IMPORTANT]
Official Website:
-----------------
   [PlayWright](https://playwright.dev/docs/intro).

1) Nodejs
2) VS Code Editor
3) Create project folder  and  open it in VSCode

4) Install playwright  using terminal
  npm init playwright@latest

  1. package.json  --- node project management file
  2. playwright.config.js  -- playwright configuration
  3. tests --- we can all teh playwright tests
  4. Check Playwright Version
      npm playwright -v   //return installed version of playwright.

5) install playwright using vs code extension

### Run the playwright test
-----------
  1. npx playwright test    //Headless Mode
  2. npx playwright test --headed   //Headed Mode

### HTML report
-------------
  npx playwright show-report


-------------------------------------------------------------------------------------------
## How To Create and Run Tests `#0969DA`
-----------------------------
1) Create a new file under test folder
2) Add module ‘playwright/test’
    const { test, expect } = require('@playwright/test');
    
    [!IMPORTANT]
    _ test, expect  ------ functions from @playwright/test module
    * Playwright Test provides a test function to declare tests and expect function to write assertions.

3) Create a test block - test(title, testFunction)
    _ The keyword 'async' before a function makes the function return a promise
    * The keyword 'await' before a function makes the function wait for a promise

4) Run the test
    1) npx playwright test --project=chromium --headed  FirstTest.spec.js
    2) npx playwright test                 runs all tests on all browsers in headless mode
    3) npx playwright test  MyTest1.spec.js            runs a specific test file
    4) npx playwright test  MyTest1.spec.js  MyTest2.spec.js           runs the files specified
    5) npx playwright test -g "test title"             runs test with the title
    6) npx playwright test --project=chromium      runs on specific browser
    7) npx playwright test --headed         runs tests in headed mode
    8) npx playwright test --debug         debug tests
    9) npx playwright test example.spec.js --debug           debug specific test file
