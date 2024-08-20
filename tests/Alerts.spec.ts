import {test,expect} from '@playwright/test';

test('Handle Alert with Ok',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // enabling alert handling //dialog window handler
    page.on('dialog',async dialog=>{
        expect (dialog.type()).toContain('alert');
        expect (dialog.message).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator("//button[normalize-space()='Alert']").click;
    await page.waitForTimeout(5000);
})

test('Handle Alert with confirm',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    
})