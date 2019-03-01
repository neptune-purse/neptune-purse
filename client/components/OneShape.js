import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOneShape} from '../store/shapes'

const OneShape = props => {
  const shape = props.shape

  return (
    <div className="wrapper">
      <h1>{shape.name}</h1>
      <ul id="oneShape">
        <img src={shape.imageUrl} className="shapeImg" alt={shape.name} />
        <li>Price:{shape.price}</li>
        <li>Description: {shape.description}</li>
        <li>Color: {shape.color}</li>
        <li>Size: {shape.size}</li>
      </ul>
      <button className="btn" type="button" disabled="true">
        Add to Cart
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  shape: state.shapes.selectedShape
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchOneShape: dispatch(getOneShape(ownProps.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(OneShape)
