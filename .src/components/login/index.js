import React from 'react'
import Header from './header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import ActionLock from 'material-ui/svg-icons/action/lock'
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add'
import {Card, CardActions} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import connect from '../../lib/connect.js'
import {Actions} from '../../stores/auth.js'

class Login extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      account: '',
      password: ''
    }
  }
  changeAccount = e => {
    this.setState({account: e.target.value})
  }
  changePassword = e => {
    this.setState({password: e.target.value})
  }
  login = e => {
    e.preventDefault()
    connect.authWithPassword({
      email: this.state.account,
      password: this.state.password
    }, (error, authData) => {
      if (error) {
        switch (error.code) {
          case "INVALID_EMAIL":
            console.log("The specified user account email is invalid.")
            break;
          default:
            console.log("Error logging user in:", error)
        }
      } else {
        this.context.router.push('/article-list')
        // console.log("Authenticated successfully with payload:", authData)
      }
    })
  }
  render() {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header />
      </StatusBar>
      <div>
      <Card>
        <CardActions>
          <form onSubmit={this.login} id="login">
            <RaisedButton onClick={() => {this.context.router.push('/signup')}} label="SignUp" type="button" icon={<SocialPersonAdd/>} fullWidth={true}/>
            <TextField
              hintText="Account"
              fullWidth={true}
              floatingLabelText="Account"
              onChange={this.changeAccount}
              value={this.state.account}
            /><br/>
            <TextField
              hintText="Password"
              fullWidth={true}
              floatingLabelText="Password"
              type="password"
              onChange={this.changePassword}
              value={this.state.password}
            />
            <RaisedButton onClick={this.login} label="Login" fullWidth={true} primary={true} type="submit" />
          </form>
        </CardActions>
      </Card>
      </div>
      </div>
    );
  }
}

Login.contextTypes = {
    router: React.PropTypes.object
}

export default Login
