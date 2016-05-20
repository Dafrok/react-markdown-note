import React from 'react'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import {Card, CardActions} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import Color from './theme-color-picker.js'
import {changePassword} from '../../lib/connect.js'
import {Actions as ThemeActions} from '../../stores/theme.js'

export default class Theme extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }
  changeTheme () {
    ThemeActions.changeTheme({
      palette: {
        primary1Color: ['red', 'blue', 'yellow'][0 | Math.random() * 3]
      }
    })
  }
  resetTheme () {
    ThemeActions.changeTheme()
  }
  render() {
    return (
      <div>
      <Navigator />
      <StatusBar>
        <Header />
      </StatusBar>
      <Dialog open={true} contentStyle={{textAlign: 'center', paddingLeft: 0, paddingRight: 0}}>
        <Color />
      </Dialog>
      <List>
        <ListItem
          primaryText="Primary Color 1"
          initiallyOpen={true}
        />
      </List>
      <Card>
        <CardActions>
          <RaisedButton label="Change Theme" fullWidth={true} type="button" onClick={this.changeTheme}/>
          <RaisedButton label="Reset Theme" fullWidth={true} type="button" onClick={this.resetTheme}/>
        </CardActions>
      </Card>
      </div>
    );
  }
}
