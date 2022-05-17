import { createStore } from '@stencil/store'

const VAT = 17.5

const { state, onChange } = createStore({
  quantity: 0,
  price: 0,
  tax: 0,
  total: 0
})

onChange('quantity', () => {
  state.tax = Number(((state.price/100 * VAT) * state.quantity).toFixed(2))
  state.total = Number((state.price * state.quantity + state.tax).toFixed(2))
})

export default state
