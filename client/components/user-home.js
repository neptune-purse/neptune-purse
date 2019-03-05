import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from './container'
import {getActiveCart} from '../store/shoppingCart'
/**
 * COMPONENT
 */

class UserHome extends Component {
  async componentDidMount() {
    await this.props.loadShoppingCart()
  }

  render() {
    const {email} = this.props
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <Container />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

const mapDispatch = dispatch => ({
  loadShoppingCart: () => dispatch(getActiveCart())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
