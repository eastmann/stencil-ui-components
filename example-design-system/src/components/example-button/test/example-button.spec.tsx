import { newSpecPage } from '@stencil/core/testing';
import { ExampleButton } from '../example-button';

describe('example-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleButton],
      html: `<example-button></example-button>`,
    });
    expect(page.root).toEqualHtml(`
      <example-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </example-button>
    `);
  });
});
