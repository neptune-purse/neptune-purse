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
const UPDATED_QTY = 'UPDATED_QTY'
const DELETED_ITEM = 'DELETE_ITEM'
const ADD_TO_CART = 'ADD_TO_CART'
/**
 * ACTION CREATORS
 */
const gotActiveCart = activeCart => ({type: GOT_ACTIVE_CART, activeCart})
const updatedQty = newObj => ({type: UPDATED_QTY, newObj})
const deletedItem = newObj => ({type: DELETED_ITEM, newObj})
const addedToCart = newObj => ({type: ADD_TO_CART, newObj})

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

export const updateQty = newObj => async dispatch => {
  try {
    if (newObj.quantity > 0) {
      dispatch(updatedQty(newObj))
    } else {
      dispatch(deletedItem(newObj))
    }
    console.log('newObj', newObj)
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = newObj => async dispatch => {
  try {
    dispatch(addedToCart(newObj))
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
    case UPDATED_QTY:
      const idx = state.activeCart.findIndex(elm => elm.id === action.newObj.id)
      const newArr = [...state.activeCart]
      newArr[idx].quantity = action.newObj.quantity
      return {...state, activeCart: newArr}
    case DELETED_ITEM:
      return {
        ...state,
        activeCart: [...state.activeCart].filter(
          item => item.id !== action.newObj.id
        )
      }
    case ADD_TO_CART:
      return {
        ...state,
        activeCart: [...state.activeCart, action.newObj]
      }
    default:
      return state
  }
}
