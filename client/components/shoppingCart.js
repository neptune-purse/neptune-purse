import React from 'react'
import {connect} from 'react-redux'

const ShoppingCart = props => {
  const {cart} = props
  return (
    <div>
      <h1>Current Orders</h1>
      {cart.map(items => (
        <div key={items.id} className="oneShape">
          <img src={items.imageUrl} className="shapeImg" alt={items.name} />
          <h6>Price: ${items.price}</h6>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.items
})

export default connect(mapStateToProps)(ShoppingCart)
