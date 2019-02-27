import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'

/**
 * INITIAL STATE
 */
const initialState = {
  products: []
}

/**
 * ACTION CREATORS
 */
const getProduct = products => ({type: GET_PRODUCT, products})

/**
 * THUNK CREATORS
 */
export const gotProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/shapes')
    dispatch(getProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {...state, products: action.products}
    default:
      return state
  }
}
