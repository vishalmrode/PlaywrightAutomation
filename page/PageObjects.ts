import { Locator, Page, expect } from '@playwright/test';

export class PageObject {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get revenueHeader(): Locator {
        return this.page.locator('th:has-text("Revenue")');
    }

    get revenueRows(): Locator {
        return this.page.locator('tbody .MuiTableRow-root');
    }

    async sortRevenue() {
        await this.revenueHeader.click();
        // Wait for the network to become idle after the sort operation
        await this.page.waitForLoadState('networkidle');
        // Optionally wait for the table rows to appear after sorting (to ensure the page is fully rendered)
        await this.page.waitForSelector('tbody .MuiTableRow-root', { state: 'attached' });
    }

    async getRevenueValues(): Promise<number[]> {
        const revenueTexts = await this.revenueRows.locator('td:nth-child(3)').allTextContents();
        return revenueTexts.map(text => parseFloat(text.replace(/,/g, '')));
    }

    // Updated function to check if revenue is sorted in descending order
    async verifyRevenueSortedDescending() {
        const revenueValues = await this.getRevenueValues();
        console.log('Revenue values:', revenueValues); // Debugging step

        // Ensure the revenue values are sorted in descending order
        for (let i = 0; i < revenueValues.length - 1; i++) {
            expect(revenueValues[i]).toBeGreaterThanOrEqual(revenueValues[i + 1]);
        }
    }
}
