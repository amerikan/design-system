import { injectAxe, checkA11y } from 'axe-playwright';

describe('BaseCheckbox', () => {
  beforeEach(async () => {
    // This is the URL of the Storybook Iframe
    await page.goto('http://localhost:6006/iframe.html?id=basecheckbox--indeterminate&viewMode=story');
    await injectAxe(page);
  });

  it('triggers axe on the document', async () => {
    await checkA11y(page);
  });

  it.jestPlaywrightSkip(
    { browsers: ['webkit'] },
    'moves to the next element when pressing tab and select when pressing the spacebar',
    async () => {
      await page.focus('text="Child 1"');
      await page.keyboard.press('Tab');
      await page.keyboard.press(' ');

      const secondBox = await page.$('#child2');
      expect(await secondBox?.isChecked()).toBe(true);
    },
  );

  it.jestPlaywrightSkip({ browsers: ['webkit'] }, 'select the parent element when all child are selected', async () => {
    await page.focus('text="Child 1"');
    await page.keyboard.press('Tab');
    await page.keyboard.press(' ');

    const secondBox = await page.$('#parent');
    expect(await secondBox?.isChecked()).toBe(true);
  });
});