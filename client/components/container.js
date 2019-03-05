import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import AllShapes from './AllShapes'
import ShoppingCart from './shoppingCart'

const Container = props => {
  return (
    <div className="container">
      <AllShapes allShapes={props.allShapes} />
      <ShoppingCart />
    </div>
  )
}

const mapStateToProps = state => ({
  allShapes: state.shapes.allShapes
})

export default withRouter(connect(mapStateToProps)(Container))
