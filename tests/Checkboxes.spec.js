import {test, expect} from '@playwright/test';

test('Handle Checkboxes',async({page})=>{

    await page.goto ('https://demoqa.com/checkbox');

    await page.getByLabel('Expand all').click();
    await page.locator("//span[contains(text(),'Notes')]").check();
    
    await expect(await page.locator("//span[contains(text(),'Notes')]").isChecked()).toBeTruthy();

    await page.waitForTimeout(1000);

}

)