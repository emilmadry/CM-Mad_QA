// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Testowy Sklep – Strona główna');
  await expect(page.getByRole('heading', { name: 'Strona główna' })).toBeVisible();
});

