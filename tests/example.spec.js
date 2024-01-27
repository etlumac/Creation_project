const { test, expect } = require('@playwright/test')

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/home')

  await expect(page).toHaveTitle(/React App/)
})

test('get russia link', async ({ page }) => {
  await page.goto('http://localhost:3000/home')

  await page.getByRole('banner').getByRole('link', { name: 'Russia' }).click()

  await expect(page.getByRole('heading', { name: 'Russia' })).toBeVisible()
})

test('get algeria link', async ({ page }) => {
  await page.goto('http://localhost:3000/home')

  await page.getByRole('banner').getByRole('link', { name: 'Algeria' }).click()

  await expect(page.getByRole('heading', { name: 'Algeria' })).toBeVisible()
})

test('get faq link', async ({ page }) => {
  await page.goto('http://localhost:3000/home')

  await page.getByRole('banner').getByRole('link', { name: 'FAQ' }).click()

  await expect(page.getByRole('heading', { name: 'Frequantly Asked Questions' })).toBeVisible()
})

test('testing form submitting and clearing inputs after submit', async ({ page }) => {
  await page.goto('http://localhost:3000/home')
  await page.fill('input[name="name"]', 'Mr test')
  await page.fill('input[name="email"]', 'test@test.com')
  await page.fill('textarea[name="message"]', 'Test')
  await page.click('button[type="submit"]')
  await page.waitForTimeout(3000)

  await expect(page.getByRole('textbox', { name: 'name' })).toBeEmpty
  await expect(page.getByRole('textbox', { name: 'email' })).toBeEmpty
  await expect(page.getByRole('textbox', { name: 'message' })).toBeEmpty

  console.log('success Form test')
})
