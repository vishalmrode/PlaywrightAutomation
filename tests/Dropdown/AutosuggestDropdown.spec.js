import {test,expect} from '@playwright/test';

test('Handle autosuggest dropdowns',async({page})=>{

    await page.goto('https://www.redbus.in');

    await page.locator('#src').fill('pune')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]");
    const fromCity = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]");

    for(let option of fromCity)
        {
            const value=await option.textContent();
            //console.log(value);
            if(value.includes('Wadgaon Bridge'))
            {
                await option.click();
                break;
            }
        }
        // wait for 5 seconds
    await page.waitForTimeout(5000);

})