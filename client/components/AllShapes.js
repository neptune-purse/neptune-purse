import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

class AllShapes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="allShapesPage">
        {this.props.allShapes.map(shape => (
          <Link to={`/shapes/${shape.id}`}>
            <div id="oneShape" key={shape.id}>
              <img src={shape.imageUrl} className="shapeImg" alt={shape.name} />
              <p>{shape.name}</p>
              <p>Price:{shape.price}</p>
            </div>
          </Link>
        ))}
        <button className="btn" type="button" disabled="true">
          Add to Cart
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allShapes: state.shapes.allShapes
})

export default withRouter(connect(mapStateToProps)(AllShapes))
