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

  handleIncrement() {
    const qty = this.props.item.quantity + 1
    const newObj = {...this.props.item, quantity: qty}
    this.props.changeQty(newObj)
  }

  handleDecrease() {
    const qty = this.props.item.quantity - 1
    const newObj = {...this.props.item, quantity: qty}

    this.props.changeQty(newObj)
  }
  render() {
    const {item} = this.props
    return (
      <section key={item.id} className="cartList">
        <div className="eachItem">
          <p>Item: {item.shape.name}</p>
          <p>Price: ${item.shape.price}</p>
          <p>Size: {item.shape.size}</p>
          <p>Qty: {item.quantity}</p>
          <button onClick={this.handleIncrement}>Increase</button>
          <button onClick={this.handleDecrease}> Decrease</button>
        </div>
      </section>
    )
  }
}

const mapStateToDispatch = dispatch => {
  return {
    changeQty: newObj => dispatch(updateQty(newObj))
  }
}

export default connect(null, mapStateToDispatch)(EachItemInCart)
