import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import EachProduct from './eachProduct'

class AllProduct extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="allProductPage">
        {this.props.allProducts.map(product => (
          <section key={product.id}>
            <ul id="eachProduct">
              <li>
                <Link to={`/shapes/${product.id}`}>
                  <img
                    className="productImg"
                    src={product.imageUrl}
                    alt="image"
                  />
                  {product.name}
                </Link>
                <p>Price:{product.price} </p>
                <button className="btn" onClick="eventHandler">
                  Add to Cart
                </button>
              </li>
            </ul>

            {/* <EachProduct product={product} /> */}
          </section>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allProducts: state.product.products
})

export default withRouter(connect(mapStateToProps)(AllProduct))
