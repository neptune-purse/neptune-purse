// import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialCartState = {
  currentCart: [],
  shapeObj: {}
}

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
// const ADD_SHAPE = 'ADD_SHAPE'

/**
 * ACTION CREATORS
 */
const gotCart = cart => ({type: GOT_CART, cart})
// const addShape = shapeObj => ({type: ADD_SHAPE, shapeObj})

/**
 * THUNK CREATORS
 */
export const getCart = () => dispatch => {
  const cart = JSON.parse(window.localStorage.getItem('cart'))

  dispatch(gotCart(cart))
}

/**
 * REDUCER
 */
export default function(state = initialCartState, action) {
  switch (action.type) {
    case GOT_CART:
      return {...state, currentCart: action.cart}
    default:
      return state
  }
}
