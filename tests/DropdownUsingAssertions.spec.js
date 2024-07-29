import { test, expect } from "@playwright/test";

test('Check Number of options in dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);
});

test('Check Number of options in dropdown with different method',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // $$ used for capturing array of all data
    const options = await page.$$('#country option');     
    console.log("Number of options:", options.length)
    await expect(options.length).toBe(10);
});

test('check presence of value in the dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const content = await page.locator('#country').textContent();
    await expect(content.includes('China')).toBeTruthy();
});

// Looping statement can be useful if the dropdown is dynamic,bootsrap or autosuggested. 

test('check presence of value in the dropdown using looping',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const options = await page.$$('#country option');
    let status = false;
    for(const option of options)
    {
        //console.log(await option.textContent());
        let value =await option.textContent();
        if(value.includes('France'))
        {
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();
});

test('Select option from dropdown using looping',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const options = await page.$$('#country option');
    let status = false;
    for(const option of options)
    {
        //console.log(await option.textContent());
        let value =await option.textContent();
        if(value.includes('France'))
        {
            await page.selectOption("#country",value);
            break;
        }
    }
    await page.waitForTimeout(5000);
});
