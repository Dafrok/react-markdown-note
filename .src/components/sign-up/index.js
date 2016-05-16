import React from 'react'
import StatusBar from '../util/status-bar'
import Header from './header.js'
import Navigator from '../util/navigator'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import {signUp} from '../../lib/connect.js'

export default class SignUp extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      repeat: '',
      errorAccount: '',
      errorPassword: '',
      errorRepeat: ''
    }
  }
  changeAccount = e => {
    this.setState({account: e.target.value}, () => {
      this.validateAccount()
    })
  }
  changePassword = e => {
    this.setState({password: e.target.value}, () => {
      this.validatePassword()
      this.validateRepeat()
    })
  }
  changeRepeat = e => {
    this.setState({repeat: e.target.value}, () => {
      this.validateRepeat()
    })
  }
  signUp = e => {
    e.preventDefault()
    signUp({
      email: this.state.account,
      password: this.state.password
    }, err => {
      if (!err) {
        console.log('Sign up complete.')
        this.context.router.push('/')
      } else {
        console.log(err)
      }
    })
  }
  validateAccount = () => {
    this.setState({errorAccount: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.account) ? '' : 'Invalid email.'})
  }
  validatePassword = () => {
    this.setState({errorPassword: /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{8,20}$/.test(this.state.password) ? '' : 'Invalid password. Try one with 8~20 characters.'})
  }
  validateRepeat = () => {
    this.setState({errorRepeat: this.state.password !== this.state.repeat ? "These passwords don't match. Try again?" : ''},()=>{
      console.log(!!this.state.account,
         !!this.state.password,
         !!this.state.repeat,
         !this.state.errorAccount,
         !this.state.errorPassword,
         !this.state.errorRepeat)
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
            <form onSubmit={this.signUp}>
              <TextField
                hintText="Email"
                fullWidth={true}
                type="email"
                floatingLabelText="Email"
                onChange={this.changeAccount}
                value={this.state.account}
                errorText={this.state.errorAccount}
              /><br/>
              <TextField
                hintText="Password"
                fullWidth={true}
                floatingLabelText="Password"
                type="password"
                onChange={this.changePassword}
                value={this.state.password}
                errorText={this.state.errorPassword}
              />
              <TextField
                hintText="Repeat Password"
                fullWidth={true}
                floatingLabelText="Repeat Password"
                type="password"
                onChange={this.changeRepeat}
                value={this.state.repeat}
                errorText={this.state.errorRepeat}
              />
              <RaisedButton label="Sign Up" disabled={!this.state.account || !this.state.password || !this.state.repeat || !!this.state.errorAccount || !!this.state.errorPassword || !!this.state.errorRepeat} fullWidth={true} primary={true} type="submit" />
            </form>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default SignUp
