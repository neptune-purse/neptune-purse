import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {AllShapes} from '../components'
import {getCart} from '../store/cart'

const ShoppingCart = props => {
  return (
    <div className="container">
      <h1>Cart</h1>
      {props.cart.map(item => (
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

const mapStateToProps = state => ({
  cart: state.cart.currentCart
})

const mapDispatchToProps = dispatch => ({
  fetchCart: dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
