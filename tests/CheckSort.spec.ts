import { test, expect } from '@playwright/test';
import { PageSort } from '../page/PageSort';

test.describe('Revenue Sorting Tests', () => {
    let pageObject: PageSort;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://interview-exercise-blush.vercel.app/');
        pageObject = new PageSort(page);
    });

    test('Sort Revenue column in descending order', async () => {
        await pageObject.sortRevenue(); // Sort ascending
        await pageObject.sortRevenue(); // Sort descending
        await pageObject.verifyRevenueSortedDescending(); // Verify descending order
    });
});