import React from 'react'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import connect from '../../lib/connect.js'
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
  login = e => {
    e.preventDefault()
    console.log(this.props.history)
    connect.authWithPassword({
      email    : this.state.account,
      password : this.state.password
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
        this.props.history.pushState(null, '/article-list')
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
          <form onSubmit={this.login}>
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
