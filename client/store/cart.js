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
const UPDATED_QTY = 'UPDATED_QTY'
const DELETED_ITEM = 'DELETE_ITEM'

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

const updatedQty = newQty => ({
  type: UPDATED_QTY,
  newQty
})

const deletedItem = newObj => ({type: DELETED_ITEM, newObj})
/**
 * THUNK CREATORS
 */
export const getCart = () => async dispatch => {
  try {
    const response = await axios.get('/api/orderItems')
    dispatch(gotOrUpdatedCart(response.data))
  } catch (err) {
    console.error(err)
  }

  // let cart = window.localStorage.getItem('cart')
  // const emptyCart = []
  // if (!cart) {
  //   cart = window.localStorage.setItem('cart', JSON.stringify(emptyCart))
  // }
  // dispatch(gotOrUpdatedCart(JSON.parse(cart)))
}

// let item = {
//   shapeId,
//   quantity
// }

export const addToCart = item => async dispatch => {
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

export const updateQty = newQty => async dispatch => {
  try {
    await axios.put('/api/orderItems', newQty)
    dispatch(updatedQty(newQty))
  } catch (err) {
    console.error(err)
  }
}

export const removeItem = item => async dispatch => {
  dispatch(deletedItem(item))
  console.log('inside of cart store', item)
  await axios.delete(`/api/orderItems/:${item.id}`)
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
        currentCart: [...state.currentCart, action.orderItem]
      }
    case UPDATED_QTY:
      const idx = state.currentCart.findIndex(
        elm => elm.id === action.newQty.id
      )
      const newArr = [...state.currentCart]
      newArr[idx].quantity = action.newQty.quantity
      return {...state, currentCart: newArr}

    case DELETED_ITEM:
      return {
        ...state,
        currentCart: [...state.currentCart].filter(
          item => item.id !== action.newObj.id
        )
      }
    default:
      return state
  }
}
