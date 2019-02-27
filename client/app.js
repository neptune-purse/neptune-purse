import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'
import {gotProducts} from './store/product'

class App extends Component {
  async componentDidMount() {
    await this.props.loadProducts()
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
  loadProducts: () => dispatch(gotProducts())
})
export default withRouter(connect(null, mapDispatchToProps)(App))
