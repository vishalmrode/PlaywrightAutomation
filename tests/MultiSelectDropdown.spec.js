import {test,expect} from '@playwright/test';

test('Handle Multiselect Dropdown', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.selectOption('#colors',['red','blue','green']);


})