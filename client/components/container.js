import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {AllShapes, ShoppingCart} from '../components'

const Container = props => {
  return (
    <div className="container">
      <AllShapes />
      <ShoppingCart />
    </div>
  )
}

// const mapStateToProps = state => ({

// })

// const mapDispatchToProps = (dispatch, ownProps) => ({

// })

export default Container
