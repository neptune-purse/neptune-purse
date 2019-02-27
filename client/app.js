import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'

//-----------

/*
IMPORT:
THUNK CREATOR for:
- fetch all products
*/
class App extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  //CHECK THENAME OF THE THUNK CREATOR
  loadProducts: () => dispatch(fetchProducts())
})
export default withRouter(connect(null, mapDispatchToProps)(App))
