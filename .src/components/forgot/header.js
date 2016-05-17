import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router'
import IconBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

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
