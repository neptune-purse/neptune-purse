import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'
import {getShapes} from './store/shapes'

class App extends Component {
  async componentDidMount() {
    await this.props.loadShapes()
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
  loadShapes: () => dispatch(getShapes())
})
export default withRouter(connect(null, mapDispatchToProps)(App))
