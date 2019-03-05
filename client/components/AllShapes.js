import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {addToCart} from '../store/shoppingCart'

class AllShapes extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(item) {
    console.log('im inside all shape', item)
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

// export default AllShapes

const mapStateToDispatch = dispatch => {
  return {
    addToCart: newItem => dispatch(addToCart(newItem))
  }
}

export default connect(null, mapStateToDispatch)(AllShapes)
