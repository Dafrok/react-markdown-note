import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button';
import {Link} from 'react-router'
import IconBack from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-left'

export default class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <AppBar
          title='Forgot'
          iconElementLeft={<IconButton onClick={() => {this.context.router.push('/')}}><IconBack /></IconButton>}
          />
    );
  }
}
