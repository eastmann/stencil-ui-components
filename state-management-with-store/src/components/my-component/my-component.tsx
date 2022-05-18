import { Component, getAssetPath, Host, h } from '@stencil/core'
import state from '../../store/store'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
  assetsDirs: ['assets']
})

export class MyComponent {

  private name = 'Traditional Clock'
  private currency = '$'
  private price = 25.00
  private maxPurchase = 5
  private image = 'clock.jpg'

  componentDidLoad() {
    state.price = this.price
  }

  add() {
    if (state.quantity < this.maxPurchase) {
      state.quantity++

      // debug
      console.log('QUANTITY MAIN:', state.quantity)
    }
  }

  increment() {
    if (state.quantity < this.maxPurchase) {
      state.quantity++
    }
  }

  decrement() {
    if (state.quantity > 0) {
      state.quantity--
    }
  }

  render() {
    let content = null

    if (true) {
      content = <Host>
        <div class="products">
          <div class="products__product">
            <div class="products__product--snapshot">
              <div class="snapshot__image">
                <img src={getAssetPath(`./assets/${this.image}`)} />
              </div>
              <span class="snapshot__price">{this.currency}{this.price}</span>
              <button class="snapshot__button" onClick={() => this.add()}>Add to Cart</button>
              <clear-button></clear-button>
            </div>
            <div class="products__product--description">
              <h1>{this.name}</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet elit pharetra, posuere
              mauris vel, congue metus. Nulla at tortor placerat purus vulputate cursus ut et quam. In lacinia gravida
              sapien vitae molestie.
              </p>
              <p>Etiam non mi augue. Nulla nisi felis, rhoncus at vestibulum sit amet, gravida
              sed dolor. Quisque congue nulla felis, eget malesuada ex efficitur ut.
              </p>

              <p>Morbi dignissim erat eros, eu
              volutpat massa mollis eu. Proin sodales ultrices nibh, consectetur lobortis augue dignissim non.
              </p>
            </div>
          </div>

        <div class="products__cart">
          <h1>Your Cart</h1>
          <table>
            <thead>
              <tr>
                <th class="products__cart--product">Product</th>
                <th class="products__cart--detail">Quantity</th>
                <th class="products__cart--detail">Price</th>
                <th class="products__cart--detail">Tax</th>
                <th class="products__cart--detail">Total</th>
              </tr>
            </thead>
          {state.quantity > 0 ?
            <tbody>
              <tr>
                <td class="products__cart--product">
                  {this.name}
                </td>
                <td class="products__cart--detail">
                { state.quantity > 0
                  ? <button onClick={() => this.decrement()}>-</button>
                  : null
                }
                <span class="products__cart--detail-quantity">{state.quantity}</span>
                { state.quantity < this.maxPurchase
                  ? <button onClick={() => this.increment()}>+</button>
                  : null
                }
                </td>
                <td class="products__cart--detail">
                {this.currency}{state.price}
                </td>
                <td class="products__cart--detail">
                {this.currency}{state.tax}
                </td>
                <td class="products__cart--detail">
                {this.currency}{state.total}
                </td>
              </tr>
            </tbody>
            :
            <tbody>
              <tr>
                <td colSpan={5}>No Items</td>
              </tr>
            </tbody>
            }
          </table>
        {state.quantity === this.maxPurchase
          ? <div class="cart__warning">
              <h1>Warning! Maximum of {this.maxPurchase} purchases only</h1>
            </div>
          : null
          }

          </div>
        </div>
      </Host>
    }

    return content
  }

}
