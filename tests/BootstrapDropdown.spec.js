const { test ,expect }=require('@playwright/test');

test('Handle Bootstrap dropdown',async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    // click on the dropdown
    await page.locator('.multiselect').click();

    // First Approach
    const options=await page.locator('ul>li label input');
    await expect(options).toHaveCount(11);
    await page.waitForTimeout(5000);
})

test('count length from Bootstrap dropdown',async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    // click on the dropdown
    await page.locator('.multiselect').click();

    // Second Approach
    const options=await page.$$('ul>li label input');
    await expect(options.length).toBe(11);
    await page.waitForTimeout(5000);
})

test('Select multiple options from Bootstrap dropdown',async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    // click on the dropdown
    await page.locator('.multiselect').click();
    //Use for Loop
    const options=await page.$$('ul>li label');
    for (let option of options)
        {
            const value=await option.textContent();
            console.log("values are:",value);
        }
    await page.waitForTimeout(5000);
})