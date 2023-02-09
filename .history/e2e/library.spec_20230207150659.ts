import { test, expect } from '@playwright/test'

test('should navigate to the library page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/library')
    // Find an element with the text 'About Page' and click on it
    await page.click('text=Library')
    // The new URL should be "/about" (baseURL is used there)
    await expect(page).toHaveURL('http://localhost:3000')
})