import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

//----------------------------
import EachProduct from './eachProduct'

//NEED TO IMPORT FROM STORE:
/*
- state of product
*/

class AllProduct extends Component {
  constructor(props) {
    super(props)
  }
  // addButton() {
  //   this.state
  // }
  render() {
    return (
      <div className="allProductPage">
        {props.allProducts.map(product => (
          <section>
            <EachProduct product={product} />
          </section>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //check the name of the all products in the store
  allProducts: state.products,
  EachProduct: state.product
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllProduct)
)
