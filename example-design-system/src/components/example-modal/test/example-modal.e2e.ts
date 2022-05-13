import { newE2EPage } from '@stencil/core/testing';

describe('example-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-modal></example-modal>');

    const element = await page.find('example-modal');
    expect(element).toHaveClass('hydrated');
  });
});
