import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'example-button',
  styleUrl: 'example-button.css',
  shadow: true,
})
export class ExampleButton {

  @Prop() text: string
  @Prop() appearance: string

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {/* Slot */}
        {this.text}
      </button>
    );
  }

}
