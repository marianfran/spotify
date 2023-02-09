import { test, expect } from '@playwright/test'

test.describe('Head tag area', () => {
    test("Contains the head tag and its contents", async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await expect(page).toHaveTitle('Spotify App');
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by Marian Francisco');
        const linkIcon = page.locator('link[rel="icon"]');
        await expect(linkIcon).toHaveAttribute('href','/spotifyfavicon.png');
    })
})

test('should navigate to the library page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/')
    // Find an element with the text 'About Page' and click on it
    await page.click('text=Library')
    // The new URL should be "/about" (baseURL is used there)
    await expect(page).toHaveURL('http://localhost:3000/library')
    // The new page should contain an h1 with "About Page"
    await expect(page.locator('h1')).toContainText('Library Page')
})