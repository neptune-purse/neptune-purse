import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {AllShapes} from '../components'
import {getCart, updateQty, removeItem} from '../store/cart'

class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
  }

  handleIncrement(item) {
    const qty = item.quantity + 1
    const newQty = {...item, quantity: qty}
    this.props.changeQty(newQty)
  }

  handleDecrease(item) {
    const qty = item.quantity - 1
    if (qty > 0) {
      const newQty = {...item, quantity: qty}
      this.props.changeQty(newQty)
    } else {
      this.props.deleteItem(item)
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Cart</h1>
        {this.props.cart.map(item => (
          <div key={item.id}>
            <p>Item: {item.shape.name}</p>
            <p>Price: ${item.shape.price}</p>
            <p>Size: {item.shape.size}</p>
            <p>Qty: {item.quantity}</p>
            <button onClick={() => this.handleIncrement(item)}>Increase</button>
            <button onClick={() => this.handleDecrease(item)}> Decrease</button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.currentCart
})

const mapDispatchToProps = dispatch => ({
  fetchCart: dispatch(getCart()),
  changeQty: newQty => dispatch(updateQty(newQty)),
  deleteItem: item => dispatch(removeItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
