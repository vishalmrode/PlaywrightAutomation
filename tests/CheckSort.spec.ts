import { test, expect } from '@playwright/test';
import { PageObject } from '../page/PageObjects';

test.describe('Revenue Sorting Tests', () => {
    let pageObject: PageObject;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://interview-exercise-blush.vercel.app/');
        pageObject = new PageObject(page);
    });

    test('Sort Revenue column in descending order', async () => {
        await pageObject.sortRevenue(); // Sort ascending
        await pageObject.sortRevenue(); // Sort descending
        await pageObject.verifyRevenueSortedDescending(); // Verify descending order
    });
});

// Modification to the verifyRevenueSortedDescending function
async function verifyRevenueSortedDescending() {
    const revenueValues = await this.getRevenueValues();
    console.log('Revenue values:', revenueValues); // Debugging step

    // Check if the revenue values are sorted in descending order
    for (let i = 0; i < revenueValues.length - 1; i++) {
        expect(revenueValues[i]).toBeGreaterThanOrEqual(revenueValues[i + 1]);
    }
}
