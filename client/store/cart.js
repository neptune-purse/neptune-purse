import axios from 'axios'

//INITIAL STATE

const initialState = {
  items: []
}

//ACTION TYPES

const GOT_ITEMS = 'GOT_ITEMS'

const gotItems = items => ({
  type: GOT_ITEMS,
  items
})

//THUNK CREATORS
export const addItem = product => {
  return async dispatch => {
    const {data: res} = await axios.post('/api/orders', product)
    dispatch(gotItems(res))
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ITEMS:
      return {...state, items: [...state.items, ...action.items]}
    default:
      return state
  }
}
