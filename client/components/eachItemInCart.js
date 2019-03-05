import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {updateQty} from '../store/shoppingCart'

class EachItemInCart extends Component {
  constructor(props) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
  }

  handleIncrement(item) {
    const qty = item.quantity + 1
    const newObj = {...item, quantity: qty}
    this.props.changeQty(newObj)
  }

  handleDecrease(item) {
    const qty = item.quantity - 1
    const newObj = {...item, quantity: qty}
    this.props.changeQty(newObj)
  }
  render() {
    return (
      <section className="cartList">
        {this.props.activeCart.map(item => (
          <div key={item.id} className="eachItem">
            <p>Item: {item.shape.name}</p>
            <p>Price: ${item.shape.price}</p>
            <p>Size: {item.shape.size}</p>
            <p>Qty: {item.quantity}</p>
            <button onClick={() => this.handleIncrement(item)}>Increase</button>
            <button onClick={() => this.handleDecrease(item)}> Decrease</button>
          </div>
        ))}
      </section>
    )
  }
}

const mapStateToDispatch = dispatch => {
  return {
    changeQty: newObj => dispatch(updateQty(newObj))
  }
}

const mapStateToProps = state => ({
  activeCart: state.shoppingCart.activeCart
})

export default connect(mapStateToProps, mapStateToDispatch)(EachItemInCart)
