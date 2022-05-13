import { newE2EPage } from '@stencil/core/testing';

describe('example-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-button></example-button>');

    const element = await page.find('example-button');
    expect(element).toHaveClass('hydrated');
  });
});
