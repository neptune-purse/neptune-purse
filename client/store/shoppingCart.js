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
/**
 * ACTION CREATORS
 */
const gotActiveCart = activeCart => ({type: GOT_ACTIVE_CART, activeCart})
const updatedQty = newObj => ({type: UPDATED_QTY, newObj})
const deleteItem = newObj => ({type: DELETED_ITEM, newObj})

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
      dispatch(deleteItem(newObj))
    }
    console.log('newObj', newObj)
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
    default:
      return state
  }
}
