import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const EachProduct = props => {
  const product = props.product
  return (
    <div className="eachProduct">
      <ul id="eachProduct">
        <li>
          <Link to={`/product/${product.id}`}>
            <img className="productImg" src={product.imageUrl} alt="image" />
            {product.name}
          </Link>
          {product.price}
          {/* <button className="addButton" onClick={this.addButton} /> */}
        </li>
      </ul>
    </div>
  )
}

export default EachProduct
