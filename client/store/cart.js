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
const GOT_OR_UPDATED_CART = 'GOT_OR_UPDATED_CART'
const GOT_ACTIVE_ORDER_ITEMS = 'GOT_ACTIVE_ORDER_ITEMS'
const ADDED_TO_ACTIVE_ORDER = 'ADDED_TO_ACTIVE_ORDER'

/**
 * ACTION CREATORS
 */
const gotOrUpdatedCart = cart => ({
  type: GOT_OR_UPDATED_CART,
  cart
})

const gotActiveOrderItmes = orderItems => ({
  type: GOT_ACTIVE_ORDER_ITEMS,
  orderItems
})

const addedToActiveOrder = orderItem => ({
  type: ADDED_TO_ACTIVE_ORDER,
  orderItem
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
  dispatch(gotOrUpdatedCart(JSON.parse(cart)))
}

// let item = {
//   shapeId,
//   quantity
// }

export const addToCart = item => dispatch => {
  let cart = JSON.parse(window.localStorage.getItem('cart'))
  let updated = false
  let newCart = cart.map(cartItem => {
    if (cartItem.shapeId === item.shapeId) {
      cartItem.quantity = cartItem.quantity + item.quantity
      updated = true
    }
    return cartItem
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
    const orderItems = response.data
    dispatch(gotActiveOrderItmes(orderItems))
  } catch (err) {
    console.error(err)
  }
}

export const addToActiveOrder = item => async dispatch => {
  try {
    const response = await axios.post('/api/orderItems', item)
    dispatch(addedToActiveOrder(response.data))
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
      return {...state, currentCart: action.orderItems}
    case ADDED_TO_ACTIVE_ORDER:
      return {
        ...state,
        currentCart: [...state.currentCart, ...action.orderItem]
      }
    default:
      return state
  }
}
