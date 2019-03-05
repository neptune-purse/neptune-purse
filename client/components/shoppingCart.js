import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const ShoppingCart = props => {
  return (
    <div className="shoppingCart">
      <h2 className="section-title">Shopping Cart</h2>
      {props.activeCart.map(item => (
        <section key={item.id} className="cartList">
          <div className="eachItem">
            <p>Price: ${item.shape.price}</p>
            <p>Color: {item.shape.color}</p>
            <p>Size: {item.shape.size}</p>
            <p>Qty: {item.quantity}</p>
            {/* <button onClick={this.handleIncrement}>Increase</button>
              <button onClick={this.handleDecrease}> Decrease</button> */}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ShoppingCart
