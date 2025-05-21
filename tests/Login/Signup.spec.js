// const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Using Locators to signup',async({page}) =>{

    await page.goto("https://demoblaze.com/index.html");

    //click on signup button
    await page.click('id=signin2');

    // Provide Username, find element by CSS
    // await page.click('#loginusername').fill('vishal')
    await page.fill('#sign-username','vishalr');

    // Provide password, find element by CSS
    // await page.click('#loginpassword').fill('vishal')
    await page.fill("input[id='sign-password']",'Test@123');


    // click on signup button, find element by xpath
    await page.click("button[onclick='register()']")
    
    await page.close();

}

)