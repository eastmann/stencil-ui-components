import { Component, getAssetPath, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'example-modal',
  styleUrl: 'example-modal.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class ExampleModal {

  @Prop({
    mutable: true,
    reflect: true
  })
  @Prop() isOpen: boolean
  @Prop() header: string
  @Prop() appearance: string
  @Prop() closeIcon = 'x.svg'
  @Prop() buttons: string

  // State for buttons array
  @State() _buttons: Array<any>

  // Watch for data
  arrayDataWatcher(buttons) {
    if (typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons)
    } else {
      this._buttons = buttons
    }
  }

  // Before component mounts/loads
  // Convert the buttons string to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons)
    console.log(this.buttons, 'Original string')
    console.log(this._buttons, 'New Array')
  }

  // Functions
  private handleCancel = () => {
    this.isOpen = false
  }

  render() {
    return (
      <div class={this.isOpen ? 'modal-wrapper -open' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel}/>
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="Close" />
            </div>
          </div>
          <div class="body">
            <slot/>
          </div>
          <div class="footer">
            {this._buttons.map((button, index) => {
              <example-button text={button.text} appearance={index === 0 && this.appearance} />
            })}
          </div>
        </div>
      </div>
    );
  }

}
