import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialCartState = {
  currentCart: []
}

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const GOT_ACTIVE_ORDER_ITEMS = 'GOT_ACTIVE_ORDER_ITEMS'

/**
 * ACTION CREATORS
 */
const gotCart = cart => ({
  type: GOT_CART,
  cart
})
const gotActiveOrderItmes = order => ({
  type: GOT_ACTIVE_ORDER_ITEMS,
  orderItems
})

/**
 * THUNK CREATORS
 */
export const getCart = () => dispatch => {
  let cart = window.localStorage.getItem('cart')
  const emptyCart = []
  if (!cart) {
    cart = window.localStorage.setItem('cart', JSON.stringify(emptyCart))
  }
  dispatch(gotCart(JSON.parse(cart)))
}

export const getActiveOrderItems = () => async dispatch => {
  try {
    const response = await axios.get('/api/orderItems')
    const orderItems = response.data
    if (orderItems.length) {
      const order = orderItems.map(orderItem => {
        return {shape: orderItem.shapeId, quantity: orderItem.quantity}
      })
      dispatch(gotActiveOrderItmes(order))
    } else {
      dispatch(gotActiveOrderItmes(orderItems))
    }

    // this is not what i want to update cart with hmmmm
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialCartState, action) {
  switch (action.type) {
    case GOT_CART:
      return {...state, currentCart: action.cart}
    case GOT_ACTIVE_ORDER_ITEMS:
      return {...state, currentCart: action.order}
    default:
      return state
  }
}
