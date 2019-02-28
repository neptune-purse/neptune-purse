import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {gotOneProduct} from '../store/product'

const EachProduct = props => {
  const product = props.product
  //come back and fix the <li> tag
  return (
    <div className="wrapper">
      <h1>THIS IS INSIDE EACH PRODUCT</h1>
      <h1>{product.name}</h1>
      <ul id="eachProduct">
        <img className="productImg" src={product.imageUrl} alt="image" />
        <li>Price:{product.price} </li>
        <li>Description: {product.description}</li>
        <li>Color: {product.color}</li>
        <li>Size: {product.size}</li>
        {/* <button className="addButton" onClick={this.addButton} /> */}
      </ul>
      <button className="btn" onClick="eventHandler">
        Add to Cart
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  product: state.product.selectedProduct
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleProduct: dispatch(gotOneProduct(ownProps.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EachProduct)
