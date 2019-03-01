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
            <button className="btn" type="button" disabled="true">
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

export default withRouter(connect(mapStateToProps)(AllShapes))
