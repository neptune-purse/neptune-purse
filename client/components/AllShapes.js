import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {addToActiveOrder} from '../store/cart'

class AllShapes extends Component {
  constructor(props) {
    super(props)

    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(item) {
    this.props.addToCart(item)
  }

  render() {
    return (
      <div className="allShapesPage">
        {this.props.allShapes.map(shape => (
          <div key={shape.id} className="oneShape">
            <Link to={`/shapes/${shape.id}`}>
              <div id="oneShape">
                <img
                  src={shape.imageUrl}
                  className="shapeImg"
                  alt={shape.name}
                />
                <p>{shape.name}</p>
                <h6>Price: ${shape.price}</h6>
              </div>
            </Link>
            <button
              className="btn"
              type="button"
              onClick={() => this.handleAdd(shape)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allShapes: state.shapes.allShapes
})

const mapStateToDispatch = dispatch => {
  return {
    addToCart: newItem => dispatch(addToActiveOrder(newItem))
  }
}

export default withRouter(
  connect(mapStateToProps, mapStateToDispatch)(AllShapes)
)
