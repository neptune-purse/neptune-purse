import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {addItem} from '../store/cart'

class AllShapes extends Component {
  constructor(props) {
    super(props)
    this.addHandler = this.addHandler.bind(this)
  }
  addHandler(event) {
    // console.log('this is the event', event)
    // console.log('this is ', this.props)
    this.props.addItem(event)
  }

  render() {
    console.log('this is state in the front end ', this.props)
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
              onClick={e => this.addHandler(shape, e)}
              type="button"
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
  allShapes: state.shapes.allShapes,
  cart: state.cart.items
})

const mapDispatchToProps = dispatch => ({
  addItem: product => {
    dispatch(addItem(product))
  }
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllShapes)
)
