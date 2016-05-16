import React from 'react'
import StatusBar from '../util/status-bar'
import Header from './header.js'
import Navigator from '../util/navigator'

export default class Forgot extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: ''
    }
  }
  render () {
    return (
      <div>
        <Navigator />
        <StatusBar>
          <Header router={this.context.router}/>
        </StatusBar>
      </div>
    )
  }
}

export default Forgot
