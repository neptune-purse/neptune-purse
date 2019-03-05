import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getOneShape} from '../store/shapes'

const OneShape = props => {
  const shape = props.shape

  return (
    <div className="oneShapePage">
      <h1>{shape.name}</h1>
      <div id="oneShape">
        <img src={shape.imageUrl} className="shapeImg" alt={shape.name} />
        <div>
          <p>Price: ${shape.price}</p>
          <p>Color: {shape.color}</p>
          <p>Size: {shape.size}</p>
        </div>
      </div>
      <h6>Description: {shape.description}</h6>
      <button className="btn" type="button" disabled="true">
        Add to Cart
      </button>{' '}
      <button className="btn" type="button">
        <Link to="/">View all Shapes</Link>
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
