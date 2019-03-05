import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialCartState = {
  currentCart: [],
  orderId: null
}

/**
 * ACTION TYPES
 */
const GOT_OR_UPDATED_CART = 'GOT_OR_UPDATED_CART'
const GOT_ACTIVE_ORDER_ITEMS = 'GOT_ACTIVE_ORDER_ITEMS'

/**
 * ACTION CREATORS
 */
const gotOrUpdatedCart = cart => ({
  type: GOT_OR_UPDATED_CART,
  cart
})

const gotActiveOrderItmes = (orderItems, oderId) => ({
  type: GOT_ACTIVE_ORDER_ITEMS,
  orderItems,
  orderId
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

export const addToCart = item => async dispatch => {
  let cart = JSON.parse(window.localStorage.getItem('cart'))
  let updated = false
  let newCart = cart.map(cartItem => {
    if (cartItem.shapeId === item.shapeId) {
      cartItem.quantity = cartItem.quantity + item.quantity
      updated = true
    }
    return cartItem // is my map syntax correct?
  })
  if (updated === false) {
    newCart.push(item)
  }
  window.localStorage.setItem('cart', JSON.stringify(newCart))
  dispatch(gotOrUpdatedCart(newCart))
}

export const getActiveOrderItems = () => async dispatch => {
  try {
    const response = await axios.get('/api/orderItems')
    const orderItems = response.data.orders
    const orderId = response.data.orderId
    if (orderItems.length) {
      const order = orderItems.map(orderItem => {
        return {shapeId: orderItem.shapeId, quantity: orderItem.quantity}
      })
      dispatch(gotActiveOrderItmes(order, orderId))
    } else {
      dispatch(gotActiveOrderItmes([], orderId))
    }
  } catch (err) {
    console.error(err)
  }
}

// where is the orderId coming from?
// should there be an orderId on state, then orderId added to item?
// I think we should put the orderId on the item object
// can we just dispatch 2 thunk creators from our client side
// like, dispatch(addToActiveOrder) to update our database,
// then dispatch(getActiveOrderItems) to update our cart on state
export const addToActiveOrder = item => async dispatch => {
  try {
    const response = await axios.post('/orderItems', item)
  } catch (err) {
    console.log(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialCartState, action) {
  switch (action.type) {
    case GOT_OR_UPDATED_CART:
      return {...state, currentCart: action.cart}
    case GOT_ACTIVE_ORDER_ITEMS:
      return {...state, currentCart: action.order, orderId: action.orderId}
    default:
      return state
  }
}
