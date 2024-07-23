const{test,expect}=require('@playwright/test');
test('Home Page',async ({page}) =>{         // async will make a promise as javascript is a asynchronised language
    
    await page.goto('https://demoblaze.com/index.html');  // await will wait for the promise
    
    const pageTitle=await page.title();
    console.log('Page Title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL=page.url();
    console.log('Page URL is: ',pageURL);

    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    await page.close();
}


)