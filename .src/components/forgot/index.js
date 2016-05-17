import React from 'react'
import StatusBar from '../util/status-bar'
import Header from './header.js'
import Navigator from '../util/navigator'
import {Card, CardActions} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {resetPassword} from '../../lib/connect.js'

export default class Forgot extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      account: ''
    }
  }
  changeAccount = e => {
    this.setState({account: e.target.value})
  }
  resetPassword = e => {
    e.preventDefault()
    resetPassword(this.state.account, err => {
      if (!err) {
        console.log('Reset complete.')
        this.context.router.push('/')
      }
    })
  }
  render () {
    return (
      <div>
        <Navigator />
        <StatusBar>
          <Header router={this.context.router}/>
        </StatusBar>
        <Card>
          <CardActions>
            <form onSubmit={this.resetPassword}>
              <TextField
                hintText="Submit your email here, we will send a new password soon."
                fullWidth={true}
                floatingLabelText="Email"
                onChange={this.changeAccount}
                value={this.state.account}
              />
              <RaisedButton label="Reset Password" fullWidth={true} primary={true} type="submit" />
            </form>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Forgot
