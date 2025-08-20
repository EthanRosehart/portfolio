import { test, expect } from '@playwright/test';

test('app loads', async ({ page }) => {
  await page.goto('http://localhost:4173/');
  await expect(page.locator('body')).toContainText('Text');
});
