import {test,expect} from '@playwright/test';

test('Handle Hidden items in dropdown',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //login 
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // go to certain page
    await page.locator("//span[normalize-space()='PIM']").click()

    //click on drop down
    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]").click()

    //waiting for options
    await page.waitForTimeout(3000);

    const options=await page.$$("//div[@role='listbox']//span")

    for(let option of options)
    {
        const jobTitle=await option.textContent();
        //console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
    

})


