import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import EachItemInCart from './eachItemInCart'
import {getActiveCart} from '../store/shoppingCart'

const ShoppingCart = () => {
  return (
    <div className="shoppingCart">
      <h2 className="section-title">Shopping Cart</h2>
      <EachItemInCart />
    </div>
  )
}

export default ShoppingCart
