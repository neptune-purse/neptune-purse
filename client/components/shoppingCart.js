import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import EachItemInCart from './eachItemInCart'
import {getActiveCart} from '../store/shoppingCart'

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.loadShoppingCart()
  }

  render() {
    console.log('im inside Shopping Cart', this.props.activeCart)
    return (
      <div className="shoppingCart">
        <h2 className="section-title">Shopping Cart</h2>
        {this.props.activeCart.map(item => (
          <EachItemInCart key={item.id} item={item} />
        ))}
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   activeCart: state.shoppingCart.activeCart
// })

const mapDispatch = dispatch => ({
  loadShoppingCart: () => dispatch(getActiveCart())
})

export default connect(null, mapDispatch)(ShoppingCart)
