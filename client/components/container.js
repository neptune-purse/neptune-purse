import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import AllShapes from './AllShapes'
import ShoppingCart from './shoppingCart'

const Container = props => {
  return (
    <div className="container">
      <AllShapes allShapes={props.allShapes} />
      <ShoppingCart activeCart={props.activeCart} />
    </div>
  )
}

const mapStateToProps = state => ({
  allShapes: state.shapes.allShapes,
  activeCart: state.shoppingCart.activeCart
})

export default withRouter(connect(mapStateToProps)(Container))

// export default Container
