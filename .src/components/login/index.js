import React from 'react'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import Wilddog from 'wilddog'
import {Actions} from '../../stores/auth.js'

export default class About extends React.Component {
  constructor(props) {
    super(props)
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
  login = () => {
    let wilddog = new Wilddog('https://wild-tiger-8739.wilddogio.com/')
    wilddog.authWithPassword({
      email    : this.state.account,
      password : this.state.password
    }, function(error, authData) {
      if (error) {
        switch (error.code) {
          case "INVALID_EMAIL":
            console.log("The specified user account email is invalid.")
            break;
          default:
            console.log("Error logging user in:", error)
        }
      } else {
        // Actions.onLogin(authData.token)
        global.authData = authData
        console.log("Authenticated successfully with payload:", authData)
      }
    })
  }
  render() {
    return (
      <div>
      <StatusBar>
        <Header />
      </StatusBar>
      <div>
      <Card>
        <CardActions>
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
            <RaisedButton onClick={this.login} label="Login" fullWidth={true} primary={true} />
        </CardActions>
      </Card>
      </div>
      </div>
    );
  }
}
