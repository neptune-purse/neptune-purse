import axios from 'axios'

/**
 * INITIAL STATE
 */
const initialShapesState = {
  allShapes: [],
  selectedShape: {}
}

/**
 * ACTION TYPES
 */
const GOT_SHAPES = 'GOT_SHAPES'
const GOT_ONE_SHAPE = 'GOT_ONE_SHAPE'

/**
 * ACTION CREATORS
 */
const gotShapes = shapes => ({type: GOT_SHAPES, shapes})
const gotOneShape = shapeId => ({type: GOT_ONE_SHAPE, shapeId})

/**
 * THUNK CREATORS
 */
export const getShapes = () => async dispatch => {
  try {
    const res = await axios.get('/api/shapes')
    dispatch(gotShapes(res.data))
  } catch (err) {
    console.error(err)
  }
}
export const getOneShape = shapeId => async dispatch => {
  try {
    const res = await axios.get(`/api/shapes/${shapeId}`)
    dispatch(gotOneShape(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialShapesState, action) {
  switch (action.type) {
    case GOT_SHAPES:
      return {...state, allShapes: action.shapes}
    case GOT_ONE_SHAPE:
      return {...state, selectedShape: action.shapeId}
    default:
      return state
  }
}
