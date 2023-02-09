import { test, expect } from '@playwright/test'

test('should navigate to the back to home page', async ({ page }) => {
    // Start from the library page 
    await page.goto('http://localhost:3000/library')
    // Find an element with the text 'About Page' and click on it
    await page.click('text=Back to Home')
    // The new URL should be "/about" (baseURL is used there)
    await expect(page).toHaveURL('http://localhost:3000')
})
