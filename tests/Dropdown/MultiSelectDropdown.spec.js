import {test,expect} from '@playwright/test';

test('Handle Multiselect Dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors',['red','blue','green']);
})

test('Check number of options in dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const options=await page.locator('#colors option');
    await expect(options).toHaveCount(5);
    await page.waitForTimeout(3000);
})

test('Check number of options in dropdown JS array', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const options=await page.$$('#colors option');
    //console.log('Number of options are:',options.length);
    await expect(options.length).toBe(5);

    await page.waitForTimeout(3000);
})

test('Check presence of value in dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const content= await page.locator('#colors').textContent();
    await expect(content.includes('red')).toBeTruthy();
    await page.waitForTimeout(3000);
})