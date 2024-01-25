const { chromium } = require('playwright')
const assert = require('assert');

(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('http://localhost:3000/home')
  await page.fill('input[name="name"]', 'Mr test')
  await page.fill('input[name="email"]', 'test@test.com')
  await page.fill('textarea[name="message"]', 'Test')
  await page.click('button[type="submit"]')
  await page.waitForTimeout(3000)
  const nameValue = await page.inputValue('input[name="name"]')
  const emailValue = await page.inputValue('input[name="email"]')
  const messageValue = await page.inputValue('textarea[name="message"]')
  assert.strictEqual(nameValue, '', 'Name field not cleared')
  assert.strictEqual(emailValue, '', 'Email field not cleared')
  assert.strictEqual(messageValue, '', 'Message field not cleared')

  await browser.close()
  console.log('success Form test')
})()
