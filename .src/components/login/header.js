import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ContentSave from 'material-ui/lib/svg-icons/content/save';
import {Link} from 'react-router'
import {Actions} from '../../stores/nav.js'
export default class EditorHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  toggleNav () {
    Actions.toggleNav()
  }
  render() {
    return (
        <AppBar
          title='Login'
          showMenuIconButton={false}
          />
    );
  }
}
