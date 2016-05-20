import React from 'react'
import {Link} from 'react-router'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ColorLens from 'material-ui/svg-icons/image/color-lens'
import LockOpen from 'material-ui/svg-icons/action/lock-open'

export default class Settings extends React.Component {
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
      <List>
        <ListItem primaryText="Theme" containerElement={<Link to="/settings/theme"/>} leftIcon={<ColorLens />}/>
        <Divider />
        <ListItem primaryText="Password" containerElement={<Link to="/settings/password"/>} leftIcon={<LockOpen />}/>
        <Divider />
      </List>
      </div>
    );
  }
}
