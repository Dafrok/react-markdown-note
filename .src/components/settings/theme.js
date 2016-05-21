import React from 'react'
import Header from '../util/header'
import StatusBar from '../util/status-bar'
import Navigator from '../util/navigator'
import {Card, CardActions} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ColorPicker from './theme-color-picker.js'
import {changePassword} from '../../lib/connect.js'
import {Actions as ThemeActions} from '../../stores/theme.js'

export default class Theme extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      activeOption: -1,
      themeOptions: [
        {key: 'primary1Color', text: 'Primary Color 1'},
        {key: 'primary2Color', text: 'Primary Color 2'},
        {key: 'primary3Color', text: 'Primary Color 3'},
        {key: 'accent1Color', text: 'Accent Color 1'},
        {key: 'accent2Color', text: 'Accent Color 2'},
        {key: 'accent3Color', text: 'Accent Color 3'},
        {key: 'textColor', text: 'Text Color'},
        {key: 'alternateTextColor', text: 'Alternate Text Color'},
        // {key: 'canvasColor', text: 'Canvas Color'},
        {key: 'borderColor', text: 'Border Color'},
        {key: 'disabledColor', text: 'Disabled Color'},
        // {key: 'pickerHeaderColor', text: 'Picker Header Color'},
        // {key: 'clockCircleColor', text: 'Clock Circle Color'},
        {key: 'shadowColor', text: 'Shadow Color'}
      ]
    }
  }
  openColorPicker = index => {
    this.setState({activeOption: index})
  }
  closeColorPicker = () => {
    this.openColorPicker(-1)
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
        {this.state.themeOptions.map((item, index) => {
          return <ListItem primaryText={item.text} key={index} onClick={() => {this.openColorPicker(index)}}>
            <ColorPicker open={index === this.state.activeOption} handleClose={this.closeColorPicker} option={item}/>
          </ListItem>
        })}

      </List>
      <Card>
        <CardActions>
          <RaisedButton label="Reset Theme" fullWidth={true} type="button" onClick={this.resetTheme}/>
        </CardActions>
      </Card>
      </div>
    );
  }
}
