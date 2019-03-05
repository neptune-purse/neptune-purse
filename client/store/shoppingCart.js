import axios from 'axios'
// import history from '../history'

/**
 * INITIAL STATE
 */
const initialCartState = {
  activeCart: []
}

/**
 * ACTION TYPES
 */
const GOT_ACTIVE_CART = 'GOT_ACTIVE_CART'

/**
 * ACTION CREATORS
 */
const gotActiveCart = activeCart => ({type: GOT_ACTIVE_CART, activeCart})

/**
 * THUNK CREATORS
 */
export const getActiveCart = () => async dispatch => {
  try {
    const res = await axios.get('/api/shoppingCart')
    dispatch(gotActiveCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialCartState, action) {
  switch (action.type) {
    case GOT_ACTIVE_CART:
      return {...state, activeCart: action.activeCart}
    default:
      return state
  }
}
