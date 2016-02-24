import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ContentSave from 'material-ui/lib/svg-icons/content/save';

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
          title='Editor'
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<IconButton><ContentSave /></IconButton>}
          />
    );
  }
}
