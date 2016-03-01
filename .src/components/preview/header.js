import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import EditorModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import {Link} from 'react-router'
import {Actions} from '../../stores/nav.js'
export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  toggleNav () {
    Actions.toggleNav()
  }
  render() {
    return (
        <AppBar
          title='Preview'
          onLeftIconButtonTouchTap={this.toggleNav}
          iconElementRight={<IconButton><EditorModeEdit /></IconButton>}
          />
    );
  }
}
