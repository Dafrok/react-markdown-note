import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import EditorModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import {Link} from 'react-router'
import {Actions} from '../../stores/nav.js'
import IconBack from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-left'

export default class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }
  edit = () => {
      this.context.router.push(`/editor/${this.props.id}`)
  }
  render() {
    return (
        <AppBar
          title='Preview'
          iconElementLeft={<IconButton onTouchTap={this.context.router.goBack}><IconBack /></IconButton>}
          iconElementRight={<IconButton onTouchTap={this.edit}><EditorModeEdit/></IconButton>}
          />
    );
  }
}
