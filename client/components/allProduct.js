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
            <EachProduct product={product} />
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
