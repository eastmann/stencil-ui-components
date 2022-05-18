import { Component, Host, h } from '@stencil/core';
import state from '../../store/store'

@Component({
  tag: 'clear-button',
  styleUrl: 'clear-button.css',
  shadow: true,
})

export class ClearButton {

  private clear() {
    // debug:
    console.log('QUANTITY BUTTON:', state.quantity)

    state.quantity = 0
  }

  render() {
    return (
      <Host>
        <button class="clear__button" onClick={this.clear}>Clear Cart ({state.quantity})</button>
      </Host>
    );
  }

}
