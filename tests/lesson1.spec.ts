import { test, expect } from '@playwright/test';

test('Check that A/B Control test is visible', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'A/B Testing' }).click();
  await expect(page.getByRole('heading', { name: 'A/B Test Control' })).toBeVisible();

  });

  test('Enter numbers in the spin button and increase value by pressing the up arrow', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Inputs', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Inputs' })).toBeVisible();
   await page.getByText('Inputs Number').click();
  await page.getByRole('spinbutton').fill('100');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByRole('spinbutton').fill('101');
  await page.getByRole('spinbutton').click();
  await expect(page.getByRole('spinbutton')).toHaveValue('101');
});

//   test('test3', async ({ page }) => {
//   await page.getByRole('spinbutton').click();
//   await page.getByRole('spinbutton').press('End');
//   await page.getByRole('spinbutton').fill('8789901');
//   await page.getByRole('spinbutton').click();
//   await page.getByRole('spinbutton').fill('8789900');
//   await page.getByRole('spinbutton').click();
//   await page.getByRole('spinbutton').press('Enter');
//   await page.goto('https://the-internet.herokuapp.com/');
//   await page.getByRole('link', { name: 'Checkboxes' }).click();
//   await page.getByRole('checkbox').nth(1).uncheck();
//   await page.getByText('checkbox 1 checkbox').click();
//   await page.getByText('checkbox 1 checkbox').click();
//   await page.getByRole('checkbox').first().check();
//   await page.getByRole('checkbox').first().uncheck();
//   await page.getByRole('checkbox').nth(1).check();
//   await page.getByText('checkbox 1 checkbox').click();
//   await page.getByRole('link', { name: 'Multiple Select Dropdown' }).click();
//   await page.locator('#multiple-dropdown').selectOption('3');
//   await page.locator('#multiple-dropdown').selectOption('4');
// });