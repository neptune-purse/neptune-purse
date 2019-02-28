import axios from 'axios'
// import history from '../history'

/**
 * INITIAL STATE
 */
const initialState = {
  products: [],
  selectedProduct: {}
}

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

/**
 * ACTION CREATORS
 */
const getProduct = products => ({type: GET_PRODUCT, products})
const getOneProduct = id => ({type: GET_ONE_PRODUCT, id})

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
export const gotOneProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/shapes/${id}`)
    dispatch(getOneProduct(res.data))
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
    case GET_ONE_PRODUCT:
      return {...state, selectedProduct: action.id}
    default:
      return state
  }
}
