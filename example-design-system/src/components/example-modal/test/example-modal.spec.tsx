import { newSpecPage } from '@stencil/core/testing';
import { ExampleModal } from '../example-modal';

describe('example-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleModal],
      html: `<example-modal></example-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <example-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </example-modal>
    `);
  });
});
