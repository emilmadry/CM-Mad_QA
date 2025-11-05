// @ts-check
import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';


test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test('login as admin', async ({ page }) => {
  const login = new Login(page);

  await login.logInUserWithCredentials(process.env.ADMIN_LOGIN, process.env.ADMIN_PASSWORD);
  expect(await login.returnWelcomeMessage()).toContain(`Witaj: ${process.env.ADMIN_LOGIN}`);
});


test('login as regular user', async ({ page }) => {
  const login = new Login(page);

  await login.logInUserWithCredentials(process.env.USER_LOGIN, process.env.USER_PASSWORD);
  expect(await login.returnWelcomeMessage()).toContain(`Witaj: ${process.env.USER_LOGIN}`);
});

