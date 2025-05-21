import {test,expect} from '@playwright/test'

test( 'Login with created user', async({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //click on login button
    await page.click('id=login2');

    // Provide Username, find element by CSS
    // await page.click('#loginusername').fill('vishal')
    await page.fill('#loginusername','vishal777');

    // Provide password, find element by CSS
    // await page.click('#loginpassword').fill('vishal')
    await page.fill("input[id='loginpassword']",'Nokia777!');


    // click on login button, find element by xpath
    await page.click("button[onclick='logIn()']");
    
    //Verify the logout and click on it
    const logoutlink= await page.locator("//a[normalize-space()='Log out']");

    await expect(logoutlink).toBeVisible();
    await page.click("//a[normalize-space()='Log out']");

    await page.close();

}


)