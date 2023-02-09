import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: { width: 414, height: 896 }
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