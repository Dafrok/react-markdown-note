import React from 'react'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import {changePassword} from '../../lib/connect.js'

export default class About extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      old: '',
      new: '',
      repeat: '',
      errorNew: '',
      errorPassword: '',
      errorRepeat: ''
    }
  }
  changeOld = e => {
    this.setState({old: e.target.value}, () => {
    })
  }
  changeNew = e => {
    this.setState({new: e.target.value}, () => {
      this.validateNew()
      this.validateRepeat()
    })
  }
  changeRepeat = e => {
    this.setState({repeat: e.target.value}, () => {
      this.validateRepeat()
    })
  }
  changePassword = e => {
    e.preventDefault()
    changePassword({
      oldPassword: this.state.old,
      newPassword: this.state.new
    }, err => {
      if (!err) {
        console.log('Reset complete.')
        this.context.router.push('/')
      } else {
        console.log(err)
      }
    })
  }
  validateNew = () => {
    this.setState({errorNew: /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{8,20}$/.test(this.state.new) ? '' : 'Invalid password. Try one with 8~20 characters.'})
  }
  validateRepeat = () => {
    this.setState({errorRepeat: this.state.new !== this.state.repeat ? "These passwords don't match. Try again?" : ''},()=>{
    })
  }
  render() {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header />
      </StatusBar>
      <Card>
        <CardActions>
          <form onSubmit={this.changePassword}>
            <TextField
              hintText="Old Password"
              fullWidth={true}
              type="password"
              floatingLabelText="Old password"
              onChange={this.changeOld}
              value={this.state.old}
              errorText={this.state.errorOld}
            /><br/>
            <TextField
              hintText="New password"
              fullWidth={true}
              floatingLabelText="New password"
              type="password"
              onChange={this.changeNew}
              value={this.state.new}
              errorText={this.state.errorNew}
            />
            <TextField
              hintText="Repeat new password"
              fullWidth={true}
              floatingLabelText="Repeat new password"
              type="password"
              onChange={this.changeRepeat}
              value={this.state.repeat}
              errorText={this.state.errorRepeat}
            />
            <RaisedButton label="Change Password" disabled={!this.state.old || !this.state.new || !this.state.repeat || !!this.state.errorNew || !!this.state.errorPassword || !!this.state.errorRepeat} fullWidth={true} primary={true} type="submit" />
          </form>
        </CardActions>
      </Card>
      </div>
    );
  }
}
