import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const EachProduct = props => {
  const product = props.product
  return (
    <div className="wrapper">
      <ul id="eachProduct">
        <li>
          <Link to={`/shapes/${product.id}`}>
            <img className="productImg" src={product.imageUrl} alt="image" />
            {product.name}
          </Link>
          <p>Price:{product.price} </p>
          {/* <button className="addButton" onClick={this.addButton} /> */}
        </li>
      </ul>
    </div>
  )
}

export default EachProduct
