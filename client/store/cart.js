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
const GOT_ACTIVE_ORDER = 'GOT_ACTIVE_ORDER'

/**
 * ACTION CREATORS
 */
const gotCart = cart => ({
  type: GOT_CART,
  cart
})
const gotActiveOrder = order => ({
  type: GOT_ACTIVE_ORDER,
  order
})

/**
 * THUNK CREATORS
 */
export const getCart = () => dispatch => {
  let cart = window.localStorage.getItem('cart')
  if (!cart) {
    cart = window.localStorage.setItem('cart', JSON.stringify([]))
  }
  dispatch(gotCart(JSON.parse(cart)))
}

export const getActiveOrder = () => async dispatch => {
  try {
    const response = await axios.get('/api/orders')
    dispatch(gotActiveOrder(response.data))
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
    case GOT_ACTIVE_ORDER:
      return {...state, currentCart: action.order}
    default:
      return state
  }
}
