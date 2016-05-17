import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import {Link} from 'react-router'
import {Actions} from '../../stores/nav.js'
import IconBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

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
          iconElementLeft={<IconButton onClick={() => {this.context.router.push('/article-list')}}><IconBack /></IconButton>}
          iconElementRight={<IconButton onClick={this.edit}><EditorModeEdit/></IconButton>}
          />
    );
  }
}
