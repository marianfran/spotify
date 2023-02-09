import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test('should navigate to the back to home page', async ({ page }) => {
    await page.goto('http://localhost:3000/library')
    await page.click('text=Back to Home')
    await expect(page).toHaveURL('http://localhost:3000')
})

test('Paragraph Tag', async({ page }) => { 
    await page.goto('http://localhost:3000/library')
    const paragraphText = page.getByRole('paragraph');
    await expect(paragraphText).toContainText('Here are your top songs for 2019')
})
