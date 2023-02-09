import { test, expect } from '@playwright/test'

test('should navigate to the back to home page', async ({ page }) => {
    await page.goto('http://localhost:3000/library')t
    await page.click('text=Back to Home')
    await expect(page).toHaveURL('http://localhost:3000')
})
